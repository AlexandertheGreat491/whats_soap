import React, { useState } from "react";
// imports  the Link component
import { Link } from "react-router-dom";
// imports Navbar, Nav, Container, Modal, Tab from react bootstrap
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";
// imports the SignUpForm & LoginForm components
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";
// imports the auth logic
//import Auth from "../utils/auth";

const Navigation = () => {
  // sets the modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            What's Soap!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/">
                Signup
              </Nav.Link>
              {/*if user is logged in show saved recipes */}
              {/* {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to="/saved">
                    See Your Recipes!
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>
                  Login/Signup
                </Nav.Link>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* sets up the modal data */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/*tab container to either signup or login component */}
        <Tab.Container defaultActiveKey={"login"}>
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sing Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};
//exports the Navigation function so that the Nav component can be use by the app
export default Navigation;
