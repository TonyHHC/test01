import React, { Component, useState, useEffect } from "react";
import { Col, Divider, Row } from 'antd';

const Home = () => {
    
    const [token, seteToken] = useState("");

    useEffect(() => {
        seteToken(sessionStorage.getItem("token"));
    }, []);

    return (
        <div>
            This is Page Home.
            <Row>
                <Col flex={2}>2 / 5</Col>
                <Col flex={3}>3 / 5</Col>
            </Row>
            <Row>
                <Col flex="200px">a</Col>
                <Col flex="auto"></Col>
            </Row>
            <Row>
                <Col flex="200px">100px</Col>
                <Col flex="auto">Fill Rest</Col>
            </Row>

            <div>
                <a>123</a>
                <a>456</a>
            </div>
            <p/>
            Token : {token}
        </div>

    )
}

export default Home;