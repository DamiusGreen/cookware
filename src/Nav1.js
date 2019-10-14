import React from 'react';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


export default class Main_Navbar extends React.Component {
    constructor(props) {
        super(props);
    
        this.dropToggle = this.dropToggle.bind(this);
        this.navToggle = this.navToggle.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    
        this.state = {
          dropdownOpen: false
        };
    
        this.state = {
          isOpen: false
        };
    
      }
      
//Navbar toggle button when window is smaller functionality
navToggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

//Drop down mousehover functionality
dropToggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
  }


  render() {
    return (
      <div className="sticky">
        <Navbar color="light" light expand="md" className="w-100 sticky-nav" >
          <NavbarBrand style={{fontSize: 18}}>
            <i>
              We provide a wide variety of luxury brands.
            </i>
          </NavbarBrand>
          <NavbarToggler onClick={this.navToggle} style={{border:"none"}}/>
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto stickybar" navbar >
              <NavItem>
                <NavLink className="nav-hover" href="https://damiusgreen.github.io/ecommerce_site/#/" style={{ textDecoration: 'none' },{color: "black"}}>Home</NavLink>
              </NavItem>
              <DropdownItem divider />
              <NavItem>
                
                <UncontrolledDropdown >
                  <DropdownToggle className="nav-hover" disabled nav style={{ textDecoration: 'none' },{color: "black"}}>
                    Dinnerware
                  </DropdownToggle>
                  <DropdownMenu right>
                      <DropdownItem toggle={false} className="dropdown-link">
                          <a href="https://damiusgreen.github.io/dinnerware_sets/" >Dinnerware Sets</a>
                      </DropdownItem >
                    <DropdownItem divider />
                      <DropdownItem toggle={false} className="dropdown-link">
                          <a href="https://damiusgreen.github.io/dinner_plates/#/" >Dinner Plates</a>
                      </DropdownItem>
                    <DropdownItem divider />
                      <DropdownItem toggle={false} className="dropdown-link">
                          <a href="https://damiusgreen.github.io/bowls/" >Bowls</a>
                      </DropdownItem>
                    <DropdownItem divider />
                      <DropdownItem toggle={false} className="dropdown-link">
                          <a href="https://damiusgreen.github.io/mugs/#/" >Mugs</a>
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              
              
              </NavItem>
              <DropdownItem divider />

              <NavItem >
                <UncontrolledDropdown >
                  <DropdownToggle className="nav-hover" disabled nav class="topnav" style={{ textDecoration: 'none' },{color: "black"}}>
                    Kitchen Appliances
                  </DropdownToggle>
                  <DropdownMenu right >
                      <DropdownItem toggle={false} className="dropdown-link">
                          <a href="https://damiusgreen.github.io/slow_cookers/#/" >Slow Cookers</a>
                      </DropdownItem >
                    <DropdownItem divider />
                      <DropdownItem toggle={false} className="dropdown-link">
                          <a href="https://damiusgreen.github.io/microwaves/#/" >Microwaves</a>
                      </DropdownItem>
                    <DropdownItem divider />
                      <DropdownItem toggle={false} className="dropdown-link">
                          <a href="https://damiusgreen.github.io/blenders/#/" >Blenders</a>
                      </DropdownItem>
                    <DropdownItem divider />
                      <DropdownItem toggle={false} className="dropdown-link">
                          <a href="https://damiusgreen.github.io/toasters/#/" >Toasters & Toaster Ovens</a>
                      </DropdownItem>
                  </DropdownMenu>
              </UncontrolledDropdown>
              </NavItem>

              <DropdownItem divider />

              <UncontrolledDropdown  >
                <DropdownToggle className="nav-hover" disabled nav style={{ textDecoration: 'none' },{color: "black"}}>
                  Pots & Pans
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem toggle={false} className="dropdown-link">
                      <a href="https://damiusgreen.github.io/cookware/#/" >Cookware Sets</a>
                  </DropdownItem >
                <DropdownItem divider />
                  <DropdownItem toggle={false} className="dropdown-link">
                      <a href="https://damiusgreen.github.io/roasting_pans/#/" >Roasting Pans</a>
                  </DropdownItem>
                <DropdownItem divider />
                  <DropdownItem toggle={false} className="dropdown-link">
                      <a href="https://damiusgreen.github.io/woks/#/" >Woks</a>
                  </DropdownItem>

                  </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      
    );
  }
}