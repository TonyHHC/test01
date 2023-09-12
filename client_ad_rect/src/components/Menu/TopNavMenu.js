import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, TeamOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';

import { NavLink, useLocation, withRouter } from 'react-router-dom';

const TopNavMenu = (props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Menu theme="dark" mode="horizontal" style={{ marginLeft: 'auto' }}>
            <Menu.Item key="/">
                <NavLink to="/">
                    <span>Home</span>
                </NavLink>
            </Menu.Item>
            <Menu.Item key="/ListEmployeesCP">
                <NavLink to="/ListEmployeesCP">
                    <span>Employee</span>
                </NavLink>
            </Menu.Item>
        </Menu>
    );
}

export default TopNavMenu;