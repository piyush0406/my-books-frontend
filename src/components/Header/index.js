import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

import {CiUser} from 'react-icons/ci'

import logo from '../../media/PrishaPolicy_Logo.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function NavElement() {
  return (
    <Navbar sticky expand="lg">
      <Container fluid className="mx-5">
        <Navbar.Brand href="/">
        <img
              src={logo}
              width="120"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
          <Nav className="ms-auto" activeKey="/">
            <Nav.Link className="mx-5" href="/">Home</Nav.Link>
            <Nav.Link href="/viewbook">Favourites</Nav.Link>            
          </Nav>
          <Nav className="ms-auto">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <CiUser />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Account</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavElement;