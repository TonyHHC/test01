/*
import { HashRouter, BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap"

import ButtonDemo from './component/ButtonDemo';
import TopMenuBar from './component/TopMenuBar';
import MainCanvas from './component/MainCanvas';
import Link1 from "./component/Link1";
import Link2 from "./component/Link1";
import NoMatch from "./component/NoMatch";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container fluid>
          <Row>
            <nav className="nav">
              <ul className="nav-list">
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='link1'>Link1</NavLink></li>
                <li><NavLink to='link2'>Link2</NavLink></li>
              </ul>
            </nav>
          </Row>
          <Row>
            <Col>
              Left
            </Col>
            <Col>
              <Routes>
                <Route exact path="/" component={ButtonDemo} />
                <Route path="/link1" component={Link1} />
                <Route path="/link2" component={Link2} />
                <Route component={NoMatch} />
              </Routes>
            </Col>
          </Row>
          <Row>Bottom</Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
*/

import { HashRouter, BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

import ButtonDemo from './component/ButtonDemo';
import TopMenuBar from './component/TopMenuBar';
import MainCanvas from './component/MainCanvas';
import Link1 from "./component/Link1";
import Link2 from "./component/Link2";
import NoMatch from "./component/NoMatch";

export default function App() {
  return (
    
      <div>
        <TopMenuBar/>
        <MainCanvas/>
      </div>
    
  );
}




