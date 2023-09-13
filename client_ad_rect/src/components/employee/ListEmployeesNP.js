import React, { Component, useState, useEffect, useRef } from "react";
import { Navlink, useLocation, Link, Outlet } from "react-router-dom";
import { Space, Table, Tag } from 'antd';
import axios from "axios";

const ListEmployeesNP = () => {

    const employeeColumns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
            render: (text) => <Link to="/ViewEmployee" onClick={() => {setEmployeeID(text); getscroll();} }>{text}</Link>,
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
        },
        {
            title: 'SN',
            dataIndex: 'SN',
            key: 'SN',
        },
        {
            title: 'EMail',
            dataIndex: 'EMail',
            key: 'EMail',
        },
        {
            title: 'Action',
            dataIndex: 'Action',
            key: 'Action',
        }
    ];

    const [employeeDatas, setemployeeDatas] = useState(null);
    const [loading, setLoading] = useState(false);

    const setEmployeeID = (text) => {
        let id = text;
        sessionStorage.setItem('ID', id);
    }

    useEffect(() => {
        setLoading(true);
        sessionStorage.setItem('CurrentPageOfListEmployees', 1);

        axios.get('http://127.0.0.1:8800/test/getAllEmployees')
            .then((response) => {
                response.data.forEach(function (obj) {
                    obj.key = obj.ID;
                    obj.Action = "Update";
                })
                setemployeeDatas(response.data);
                setLoading(false);

            })
            .catch((error) => console.log(error));

        ref.current.scrollTop = 880;
    }, []);

    const ref = useRef();
    const getscroll = () => {
        const scroll = Math.abs(ref.current.getBoundingClientRect().top - ref.current.offsetTop);
        console.log(scroll);
        //console.log( ref);
    };

    const handleScroll = () => {
        console.log("handleScroll");
        ref.current.scrollTop = 880;
    };

    return (
        <div ref={ref}
            style={{
                overflow: 'auto',
                height: '85vh',
            }}>
            <button onClick={handleScroll}>Scroll</button>
            <Table
                columns={employeeColumns}
                dataSource={employeeDatas}
                loading={loading}
                pagination={false}
            />
        </div>
    )

}

export default ListEmployeesNP;