import React from "react";
import "./App.css";
import { Button , Navbar , Nav , Form , FormControl , NavDropdown , Container , Col , Row} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <div className="App">
  <div className="navbar">
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
  <Navbar.Brand href="#home">Hypnus <img src=".\favicon.ico" width="20%"height="20%"></img> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Some Products" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Reels</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Hooks</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Popular</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Facebook</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Find more here</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Sponsor
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>

<div className="form">
<Container>
<Col>
<h3> Login:
</h3>
<Row>

<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
   
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Row>

</Col>
</Container>
</div>
<div className="main-footer"> 
<hr/>
<h4 className="font"><a href="">Contact us </a></h4>
<h4 className="font"> www.React-app.com © 2020 </h4>
</div>
</div>

  );
}

export default App;
