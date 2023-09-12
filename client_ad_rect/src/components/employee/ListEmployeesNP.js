import React, { Component, useState, useEffect } from "react";
import { Navlink, useLocation, Link } from "react-router-dom";
import { Space, Table, Tag } from 'antd';
import axios from "axios";

const ListEmployeesNP = () => {

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

    const setEmployeeID = (text) => {
        let id = text;
        localStorage.setItem('ID', id);
    }
    
    useEffect(() => {
        console.log("useEffect->currentPage:" + localStorage.getItem('CurrentPageOfListEmployees'));

        setLoading(true);
        localStorage.setItem('CurrentPageOfListEmployees', 1);

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
    }, []);

    return (
        <div>
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