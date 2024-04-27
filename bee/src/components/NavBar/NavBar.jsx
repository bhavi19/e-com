import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

export const NavBarMenu = () => {
  return (
    <body>

<div class="header">
  <div class="header-left">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <a href="#default" class="logo">CompanyLogo</a>

</div>

</body>
  );
}