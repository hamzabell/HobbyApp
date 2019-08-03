import React, { Component } from 'react';
import {
    Link
  } from 'react-router-dom';
  import {
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Breadcrumb,
    BreadcrumbItem
 } from 'reactstrap';

class Header extends Component {
  render() {
    return (
      <header> 
          <Navbar color="primary" light expand="sm">
          <NavbarBrand className="mb4" href="/">Hobbinator</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Nav className="ml-auto" navbar>
            <div>
                <Breadcrumb>
                     <BreadcrumbItem active><Link to="/"> Home</Link> </BreadcrumbItem>
                     <BreadcrumbItem active>
                      
                     <Link to="/about"> about us</Link> 
                     </BreadcrumbItem>
                </Breadcrumb>
             </div>
            </Nav>
        </Navbar>
      </header>
    );
  }
}

export default Header;