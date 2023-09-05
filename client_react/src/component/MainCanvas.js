import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonDemo from "./ButtonDemo";
import Link1 from './Link1';
import Link2 from './Link2';
import NoMatch from "./NoMatch";

class MainCanvas extends Component {
    render() {
        return (
            <BrowserRouter>
                <a>AAA</a>
                <Routes>
                    <Route exact path="/" component={ButtonDemo} />
                    <Route path="/link1" component={Link1} />
                    <Route path="/link2" component={Link2} />
                    <Route component={NoMatch} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default MainCanvas;