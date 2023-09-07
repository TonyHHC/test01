import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import Employee from "../employee/Employee";

class RouteContent extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/employee" element={<Employee/>} />
            </Routes>
            
        )
    }
}

export default RouteContent;
