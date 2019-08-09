import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
        <Navbar color="faded" light expand="md" className="custom-navbar">
          <NavbarBrand href="/" className="mr-auto width-20">
           Logo
          </NavbarBrand>

          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar className="custom-navbar-nav">
            <NavItem>
              <h3 className="mb-0px page__title title-black openSan-bold">Demo Credit Check</h3>
            </NavItem>
            <NavItem>
              <NavLink href="/login" className="text-decoration">
                <h5 className="mb-0px title-butter-scotch page__title">Login</h5>
              </NavLink>
            </NavItem>
          </Nav>
          </Collapse>
        </Navbar>
    );
  }
}

export default Navigation;
