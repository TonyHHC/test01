import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from "react-router-dom";
import ButtonDemo from "./ButtonDemo";
import Link1 from './Link1';
import Link2 from './Link2';
import NoMatch from "./NoMatch";

class MainCanvas extends Component {
    render() {
        return (
            <Routes>
                <Route exact path="/" element={<ButtonDemo/>} />
                <Route exact path="/link1" element={<Link1/>} />
                <Route exact path="/link2" element={<Link2/>} />
            </Routes>
            
        )
    }
}

export default MainCanvas;
