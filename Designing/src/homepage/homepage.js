import React from 'react';
import './homepage.css';

import logo from "../images/logo.png";
import landings from "../images/landings.png";





export default function MainPage(){
  
        return (
    <>

<div class="bg-img">
  <div class="container-fluid">

    {/* <div class="topnav">
     <img src={logo} alt="Not FOund" />
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
     
    </div> */}


    
<div class="bs-example ">
    <nav class="navbar navbar-expand-md background">
        <a href="/home" class="navbar-brand">
            <img className="logo3" src={logo} height="28" alt="CoolBrand" />
        </a>
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav left">
                
            </div>
            <div class="navbar-nav ml-auto">
            <a href="/" class="nav-item nav-link">Home</a>
            <a href="/emp" class="nav-item nav-link">Employee</a>
                <a href="/team" class="nav-item nav-link">Team </a>
             
            </div>
        </div>
    </nav>
</div>


 <h1 className="text-center text1">Make Your Team <br/> the best it can </h1>
 <div className="text-center">
 <button className="text-center btn btn-success">Login</button>
</div>

  </div>
</div>


<h4 className="text-center text2"> Lorem Ipsum is simply dummy text of the printing and 
  typesetting industry. 
</h4>




<div className="container">

  <div className="row">

    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <img className="landings image-fluid" src={landings} alt="Not FOund" />

    </div>
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">

    <h4 className=" text3"> Augmented reality  </h4>
     <p className="p1"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled
      it to make a type specimen book  </p>

      <button className="text-center btn btn-info">Login</button>


    </div>
    
    
    
    </div>

</div>









<div class="bg-img1">
  <div className="container">
    <div className="row">
  
       <div className="col-lg-3 col-sm-3 mt-5">

         <img className="" src={logo} alt="Not Found " />
         <p className="simple-p1 mt-3 ml-3"> Lorem Ipsum is simply dummy text of the printing and 
           typesetting industry. Lorem Ipsum has been the industry's 
           </p>
       </div>
       <div className="col-lg-3 col-sm-6  ref">
       <a href="#news">Team</a><br/>
       <a href="#news">About Us </a><br/>
       <a href="#news">Employee </a><br/>
       <a href="#news">Lorem</a><br/>
       </div>
       <div className="col-lg-3 col-sm-6  ref">
       <a href="#news">Lorem</a><br/>
       <a href="#news">About US </a><br/>
       <a href="#news">Team </a><br/>
       <a href="#news">Employee</a><br/>
       </div>
       <div className="col-lg-3 col-sm-3 ref">

       <a href="#news">Team</a><br/>
       <a href="#news">About Us </a><br/>
       <a href="#news">Employee </a><br/>
       <a href="#news">Lorem</a><br/>
       </div>
  
  </div>
  <h6 className="text-center mt-5 footer-text">   @something | All rights reserved 2020</h6>
</div>
</div>


    </>
        );
    
}



             

