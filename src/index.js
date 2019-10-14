import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import "./app.css";
import Main_Navbar from "./Nav1.js";
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


    export default function App() {
        return (
            <Router>
                <div >
                <nav style={{ margin: 0 }}>
                <div >
                  
                    <Navbar color="light" light expand="md" >
                    <div class="row">
                      <div class="col-md-4">
                          <h1 style={{fontSize: 33}}>Today's Deals</h1>
                      </div>
                      <div class="col-md-9" style={{paddingRight: 30}, {marginRight: 10}}>
                          <Link to='/Option1' className= "hideitem" style={{ textDecoration: 'none' },{color: "black"}}>
                              Cutlery
                          </Link>
  
                          <Link to='/Option2' className= "hideitem" style={{ textDecoration: 'none' },{color: "black"}}>
                              Kitchen Tools & Utensil Sets
                          </Link>
  
                          <Link to='/Option3' className= "hideitem" style={{ textDecoration: 'none' },{color: "black"}}>
                              Spatulas & Turners
                          </Link>
                      </div>
                    </div>
                    </Navbar>
                  
                </div>
  
                <hr  class="line" />
                
                </nav>
                    <Route path='/Option1' exact component={Option1} />
                    <Route path='/Option2' component={Option2} />
                    <Route path='/Option3' component={Option3} />
                </div>
            </Router>
        )
    }
    
  
  function Option1() {
      return (
          <div className= "cut row w-100" style= {{display: "none"}}>

            <div className= "border w-100 col-md-3">
                <a href="#"><img className= "imgs" class="d-block w-100" src="kitchen_club_photos\cut_1.jpg" alt="cut1" /></a>
                <p>Zwilling Kanren 4-Piece Steak Knife Set</p>
                <span className= "sug"><p>Sugg. Price $160</p></span>
                <span className= "our"><p>Our Price $79.99</p></span>
            </div>

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\cut_2.jpg" alt="cut2" /></a>
                <p>Zwilling Kanren 7-Piece Easel Knife Set</p>
                <span className= "sug"><p>Sugg. Price $1,060</p></span>
                <span className= "our"><p>Our Price $799.95</p></span>
            </div>

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\cut_3.jpg" alt="cut3" /></a>
                <p>Zwilling Twin 1731 7-Piece Knife Block Set</p>
                <span className= "sug"><p>Sugg. Price $1,499</p></span>
                <span className= "our"><p>Our Price $1,200</p></span>
            </div>

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\cut_4.jpg" alt="cut4" /></a>
                <p>Zwilling Twin 1731 4-Piece Knife Roll Set</p>
                <span className= "sug"><p>Sugg. Price $1,000</p></span>
                <span className= "our"><p>Our Price $699.99</p></span>
            </div>

          </div>
      )
  }
  
  function Option2() {
      return (
        <div className= "cut row w-100" style= {{display: "none"}}>

        <div className= "border w-100 col-md-3">
            <a href="#"><img class="d-block w-100" src="kitchen_club_photos\tools_1.jpg" alt="cut1" /></a>
            <p>Kitchen Club Ultimate Prep Kitchen Set</p>
            <span className= "sug"><p>Sugg. Price $250</p></span>
            <span className= "our"><p>Our Price $149.99</p></span>
        </div>

        <div className= "border w-100 col-md-3">
            <a href="#"><img class="d-block w-100" src="kitchen_club_photos\tools_2.jpg" alt="cut2" /></a>
            <p>Kitchen Club 15-Piece Kitchen Tool Set</p>
            <span className= "sug"><p>Sugg. Price $250</p></span>
            <span className= "our"><p>Our Price $149.99</p></span>
        </div>

        <div className= "border w-100 col-md-3">
            <a href="#"><img class="d-block w-100" src="kitchen_club_photos\tools_3.jpg" alt="cut3" /></a>
            <p>All Clad Precision Nonstick Flex Turner</p>
            <span className= "sug"><p>Sugg. Price $99.99</p></span>
            <span className= "our"><p>Our Price $49.99</p></span>
        </div>

        <div className= "border w-100 col-md-3">
            <a href="#"><img class="d-block w-100" src="kitchen_club_photos\tools_4.jpg" alt="cut4" /></a>
            <p>Copper Utensils, Set of 4</p>
            <span className= "sug"><p>Sugg. Price $200</p></span>
            <span className= "our"><p>Our Price $99.99</p></span>
        </div>

      </div>
      )
  }
  
  function Option3() {
    return (
        <div className= "cut row w-100" style= {{display: "none"}}>

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\spat_1.jpg" alt="cut1" /></a>
                <p>Kitchen Club Maple Wood Turner</p>
                <span className= "sug"><p>Sugg. Price $89.99</p></span>
                <span className= "our"><p>Our Price $49.99</p></span>
            </div>

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\spat_2.jpg" alt="cut2" /></a>
                <p>Kitchen Club Ultimate Copper Utensils, Set of 8</p>
                <span className= "sug"><p>Sugg. Price $170</p></span>
                <span className= "our"><p>Our Price $129.99</p></span>
            </div>

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\spat_3.jpg" alt="cut3" /></a>
                <p>Kitchen Club Large BBQ Spatula</p>
                <span className= "sug"><p>Sugg. Price $80</p></span>
                <span className= "our"><p>Our Price $59.99</p></span>
            </div>

            <div className= "border w-100 col-md-3">
                <a href="#"><img class="d-block w-100" src="kitchen_club_photos\spat_4.jpg" alt="cut4" /></a>
                <p>Kitchen Club Nonstick Cookie Spatula</p>
                <span className= "sug"><p>Sugg. Price $30</p></span>
                <span className= "our"><p>Our Price $19.99</p></span>
            </div>

          </div>
    )
  }



  
  const ColoredLine = ({ color }) => (
      <hr
          style={{
              color: color,
              backgroundColor: color,
              height: 5
          }}
      />
  );
  

ReactDOM.render(
    <div>
        <Main_Navbar />
        <App />
    </div>, 
    document.getElementById('root')
);

//Jquery effects for the shipping details link
const $ = window.$;
$(document).ready(function() {
    
    $(".details2").hide()
    $(".details").hover(
      function () {
        $('.details2').stop().fadeTo(300, 1.0);
      }, 
      function () {
        $('.details2').stop().fadeOut(300);
      }
    );
});

//50% OFF DEALS functionality for Cutlery
$(document).ready(function(){
    $(".hideitem").click(function(){
    $(".cut").toggle("fast");
    });
});

//Account and Cart functionality
$(document).ready(function(){
    $(".acc").click(function(){
    alert("There is currently no account details available for your account");
    });
});

$(document).ready(function(){
    $(".cart").click(function(){
    alert("Your cart is empty");
    });
});
