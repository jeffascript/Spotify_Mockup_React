import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import SideNav from "./SideNav";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Route, Link , Switch} from "react-router-dom";


class Main extends Component {
  state = {};

  render() {
    return (
      <>
        <Router>
        <Switch>
          <Container fluid className="h-100 m0 overflow-hidden p-0">
            <Row
              className="w-100 mx-0 p-0"
              style={{ height: "calc(100% - 6em)" }}
            >
              <Col xs="3" sm="3" md="3" lg="2" xl="2" className="p-0 h-100">
              <Route path="/" component={SideNav
            }/>
              </Col>
              <Col className="p-0 h-100">
                  <Route path="/" component={HomePage}/>
                
                 

              
              </Col>
            </Row>

            <footer className="position-sticky mb-0"></footer>
          </Container>
          </Switch>
        </Router>
      </>
    );
  }
}

export default Main;
