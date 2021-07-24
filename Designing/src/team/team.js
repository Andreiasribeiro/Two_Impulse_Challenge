import React from 'react';
import './team.css';

import logo from "../images/logo.png";
import logo1 from "../images/circle.png";
import e1 from "../images/e1.png";





export default function Team(){
  
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
                <a href="/team" class="nav-item nav-link">Team </a>
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
      <p className="emp-p1">Team</p>
  </div>
  <div class="p-2 bd-highlight">
  <img className="e2" src={e1} height="28" alt="CoolBrand" />
  </div>
</div>
</div>


        <div className="container mb-5">
           <div className="row">
                <div className="col-md-6  col-lg-6">

                <div class="d-flex flex-row">
                    <div class="p-2">
                    <img className="circle" src={logo1}  alt="CoolBrand" />
                    </div>
                    <div class="p-2 ">
                        <h6 className="team-h6"> Bessie Barry</h6>
                        <p className="team-p">Employee ID  </p>
                    </div>
                    <div class="p-2 ">
                   
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil icon" viewBox="0 0 16 16">
      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
</svg>
    
                    </div>
              </div>
                    
               <hr/>
                </div>
                <div className="col-md-6  col-lg-6">

                <div class="d-flex flex-row">
                    <div class="p-2">
                    <img className="circle" src={logo1}  alt="CoolBrand" />
                    </div>
                    <div class="p-2 ">
                        <h6 className="team-h6"> Bessie Barry</h6>
                        <p className="team-p">Employee ID  </p>
                    </div>
                    <div class="p-2 ">
                   
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil icon" viewBox="0 0 16 16">
      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
</svg>
    
                    </div>
              </div>
                    
               <hr/>



                </div>
    


           </div>
        </div>



        <div className="container mb-5">
           <div className="row">
                <div className="col-md-6  col-lg-6">

                <div class="d-flex flex-row">
                    <div class="p-2">
                    <img className="circle" src={logo1}  alt="CoolBrand" />
                    </div>
                    <div class="p-2 ">
                        <h6 className="team-h6"> Bessie Barry</h6>
                        <p className="team-p">Employee ID  </p>
                    </div>
                    <div class="p-2 ">
                   
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil icon" viewBox="0 0 16 16">
      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
</svg>
    
                    </div>
              </div>
                    
               <hr/>
                </div>
                <div className="col-md-6  col-lg-6">

                <div class="d-flex flex-row">
                    <div class="p-2">
                    <img className="circle" src={logo1}  alt="CoolBrand" />
                    </div>
                    <div class="p-2 ">
                        <h6 className="team-h6"> Bessie Barry</h6>
                        <p className="team-p">Employee ID  </p>
                    </div>
                    <div class="p-2 ">
                   
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil icon" viewBox="0 0 16 16">
      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
</svg>
    
                    </div>
              </div>
                    
               <hr/>



                </div>
    


           </div>
        </div>

        <div className="container mb-5">
           <div className="row">
                <div className="col-md-6  col-lg-6">

                <div class="d-flex flex-row">
                    <div class="p-2">
                    <img className="circle" src={logo1}  alt="CoolBrand" />
                    </div>
                    <div class="p-2 ">
                        <h6 className="team-h6"> Bessie Barry</h6>
                        <p className="team-p">Employee ID  </p>
                    </div>
                    <div class="p-2 ">
                   
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil icon" viewBox="0 0 16 16">
      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
</svg>
    
                    </div>
              </div>
                    
               <hr/>
                </div>
                <div className="col-md-6  col-lg-6">

                <div class="d-flex flex-row">
                    <div class="p-2">
                    <img className="circle" src={logo1}  alt="CoolBrand" />
                    </div>
                    <div class="p-2 ">
                        <h6 className="team-h6"> Bessie Barry</h6>
                        <p className="team-p">Employee ID  </p>
                    </div>
                    <div class="p-2 ">
                   
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil icon" viewBox="0 0 16 16">
      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
</svg>
    
                    </div>
              </div>
                    
               <hr/>



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



             

