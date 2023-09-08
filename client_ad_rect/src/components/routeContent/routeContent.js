import React, { Component } from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../home/Home";
import ListEmployees from "../employee/ListEmployees";
import ViewEmployee from "../employee/ViewEmployee";

class RouteContent extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/ListEmployees" element={<ListEmployees/>} />
                <Route exact path="/ViewEmployee" element={<ViewEmployee/>} />
            </Routes>
            
        )
    }
}

export default RouteContent;
