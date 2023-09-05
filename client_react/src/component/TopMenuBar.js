import React, { Component } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

class TopMenuBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                <a class="navbar-brand" href="#">Test01</a>
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="link1">Link 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="link2">Link 2</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default TopMenuBar;
