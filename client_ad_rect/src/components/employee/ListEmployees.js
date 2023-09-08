import React, { Component, useState, useEffect } from "react";
import { Navlink, useLocation, Link } from "react-router-dom";
import { Space, Table, Tag } from 'antd';
import axios from "axios";

const ListEmployees = () => {

    const employeeColumns = [
        {
            title: 'ID',
            dataIndex: 'ID',
            key: 'ID',
            render: (text) => <Link to="/ViewEmployee" onClick={() => setEmployeeID(text)}>{text}</Link>,
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
    //const [gotoCurrentPage, setGotoCurrentPage] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const setEmployeeID = (text) => {
        let id = text;
        localStorage.setItem('ID', id);
        localStorage.setItem('gotoCurrentPage', true);
    }
    
    const onPageChange = (page) => {
        setCurrentPage(page);
        localStorage.setItem('CurrentPageOfListEmployees', page);
        console.log("onPageChange:" + page);
    }

    useEffect(() => {
        console.log("useEffect->currentPage:" + localStorage.getItem('CurrentPageOfListEmployees'));

        setLoading(true);
        setCurrentPage(localStorage.getItem('CurrentPageOfListEmployees'));
        //localStorage.setItem('CurrentPageOfListEmployees', 1);

        axios.get('http://127.0.0.1:8800/test/getTest')
            .then((response) => {
                response.data.forEach(function (obj) {
                    obj.Action = "Update";
                })
                setemployeeDatas(response.data);
                setLoading(false);
                console.log(employeeDatas);
            })
            .catch((error) => console.log(error));
    }, []);

    

    return (
        <div>
            {currentPage}<p/>
            <Table
                columns={employeeColumns}
                dataSource={employeeDatas}
                loading={loading}
                pagination={{
                    current:currentPage,
                    onChange: (page, pageSize) => onPageChange(page),
                }}
            />
        </div>

    )

}

export default ListEmployees;