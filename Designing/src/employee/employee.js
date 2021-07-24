import React from 'react';
import './employee.css';

import logo from "../images/logo.png";
import e1 from "../images/e1.png";





export default function Employee(){
  
        return (
    <>

 
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
                <a href="/team" class="nav-item nav-link">About US </a>
                <button className="btn btn-default">Login</button>
            </div>
        </div>
    </nav>
</div>


<div className="container text-center ">
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight ">
     <img className="e1" src={e1} height="28" alt="CoolBrand" />

  </div>
  <div class="p-2 bd-highlight">
      <p className="emp-p1">New Employee</p>
  </div>
  <div class="p-2 bd-highlight">
  <img className="e2" src={e1} height="28" alt="CoolBrand" />
  </div>
</div>
</div>





{/* 
<div className="container text-center mt-5 ">

</div> */}


<div class="container">
    <div class="row justify-content-center mt-5">
        <div class="col-md-9">
            <form class="text-center border border-light p-5" action="#!">
                
                <input type="text" class="form-control mb-4" name="username" placeholder="Employee ID"/>
              
                <input type="password" class="form-control mb-4" name="password" placeholder="Name"/>
                <input type="password" class="form-control mb-4" name="password" placeholder="Birthday"/>
                <input type="password" class="form-control mb-4" name="password" placeholder="Address"/>
                <input type="password" class="form-control mb-4" name="password" placeholder="Status"/>
                <input type="password" class="form-control mb-4" name="password" placeholder="Position" />
                <input type="password" class="form-control mb-4" name="password" placeholder="Created"/>
                <input type="password" class="form-control mb-4" name="password" placeholder="Updated"/>
              
              <button className="btn btn-info"> Submitt </button>

            </form>

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



             

