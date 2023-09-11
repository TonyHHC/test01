import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, TeamOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';

import { NavLink, useLocation, withRouter } from 'react-router-dom';
import RouteContent from './components/routeContent/routeContent';

const { Header, Content, Sider } = Layout;


function setNavItem(label, key, icon, children, type){
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const NavItems = [
  setNavItem("Employee", "Employee", <UserOutlined/>,[
    setNavItem(<NavLink to="/">Home</NavLink>, "/" ),
    setNavItem(<NavLink to="/ListEmployees">List Employees</NavLink>, "/ListEmployees" ),
  ] ),
  setNavItem("Laptop", "Laptop", <LaptopOutlined/> ),
]

const App = () => {

  console.log("App");

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const location = useLocation();
  console.log(new Date().toLocaleString() + " " + location.pathname);

  const MenuClick = (selectedKeys) => {
    console.log("MenuClick:"+selectedKeys);
  }

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            margin:0,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <div className="demo-logo" />

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['/']} selectedKeys={[location.pathname]} >
          <Menu.Item key="/">
            <NavLink to="/">
              <span>Home</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item key="/ListEmployees">
            <NavLink to="/ListEmployees">
              <span>Employee</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
          }}
          trigger={null}
          collapsible collapsed={collapsed}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['/']}
            defaultOpenKeys={['Employee']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
            items={NavItems}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <RouteContent />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
export default App;
