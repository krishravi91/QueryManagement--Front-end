import React from 'react'
import {Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import logo from '../../assets/img/logo.png';
import {Link,  useNavigate} from "react-router-dom";
import {LinkContainer} from 'react-router-bootstrap'

export const Header = () => {
  // const history = useHistory();
  const navigate = useNavigate();

  const logMeOut = () => {
    navigate.push("/")
  }
  return (
    <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
        <Navbar.Brand > 
            <img src={logo} alt="logo" width="50px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ml-auto'> 
                {/* <Link to="/dashboard">Dashboard</Link>
                <Link to="/tickets">Tickets</Link>
                <Link onClick={logMeOut}>Logout</Link> */}
                {/* <Nav.Link onClick={() => navigate.push("/dashboard")}>Dashboard</Nav.Link>
                <Nav.Link onClick={() => navigate.push("/tickets")}>Tickets</Nav.Link>
                <Nav.Link onClick={() => navigate.push("/")}>Logout</Nav.Link> */}
                <LinkContainer to ="/dashboard">
                  <Nav.Link> Dashboard</Nav.Link>
                </LinkContainer>
                <LinkContainer to ="/tickets/">  
                  <Nav.Link> Tickets</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/">  
                  <Nav.Link onClick={logMeOut}> Logout</Nav.Link>
                </LinkContainer>
            
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}






// import React from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import logo from "../../assets/img/logo.png";
// // import { useHistory } from "react-router-dom";
// import { LinkContainer } from "react-router-bootstrap";

// // import { userLogout } from "../../api/userApi";

// export const Header = () => {
// //   const history = useHistory();

//   // const logMeOut = () => {
//   //   sessionStorage.removeItem("accessJWT");
//   //   localStorage.removeItem("crmSite");
//   //   userLogout();
//   //   history.push("/");
//   // };

//   return (
//     <Navbar collapseOnSelect bg="info" variant="dark" expand="md">
//       <Navbar.Brand>
//         <img src={logo} alt="logo" width="50px" />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           <LinkContainer to="/dashboard">
//             <Nav.Link>Dashboard</Nav.Link>
//           </LinkContainer>
//           <LinkContainer to="/tickets">
//             <Nav.Link>Tickets</Nav.Link>
//           </LinkContainer>

//           <Nav.Link>Logout</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// };