import React from 'react';
import  $ from "jquery";
import "../Css/Dashboard1.css";
import "../Css/Mainstyle.css";
import { Link } from "react-router-dom";
import brokimg from "../Images/Dashimg.jpg";


function Dashboard1() {
  $(".button_su_inner").mouseenter(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({ left: relX, top: relY });
    $(this).prev(".su_button_circle").removeClass("desplode-circle");
    $(this).prev(".su_button_circle").addClass("explode-circle");
  });

  $(".button_su_inner").mouseleave(function (e) {
    var parentOffset = $(this).offset();

    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(this).prev(".su_button_circle").css({
      left: relX,
      top: relY,
    });
    $(this).prev(".su_button_circle").removeClass("explode-circle");
    $(this).prev(".su_button_circle").addClass("desplode-circle");
  });

  return (
    <>
      <div id="page-wrapper" className="page-wrapper-cls">
        <div id="page-inner2" className="mt-3 px-6 py-6">
          <div className="container-fluid my-4">
            <div className="row">
              <div className="col-md-6">
                <div className="dash2">
                  <img src={brokimg} alt="Dashboard IMG" />
                </div>
              </div>
              <div className="col-md-6 das2head">
                <h1 className="text-center ">Channel Management</h1>
               <br />
                <div className="row">
                  <div className="col-md-4 dash22">
                    <div className="button_container" onMouseEnter={Dashboard1}>
                      <div className="button_su">
                        <span className="su_button_circle"></span>
                        <Link to="/Master" className="button_su_inner">
                           <span className="button_text_container">
                            <span className="iconWraper">
                              <i className="fas fa-archive"></i>
                            </span>
                            Master
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 dash22">
                    <div className="button_container">
                      <div className="button_su">
                        <span className="su_button_circle"></span>
                        <Link to="/Quotation" className="button_su_inner">
                          <span className="button_text_container">
                            <span className="iconWraper">
                              <i className="fas fa-chart-line"></i>
                            </span>
                            Quotation
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 dash22">
                    <div className="button_container">
                      <div className="button_su">
                        <span className="su_button_circle"></span>
                        <Link to="/Policy" className="button_su_inner">
                          <span className="button_text_container">
                            <span className="iconWraper">
                              <i className="fas fa-phone-square-alt"></i>
                            </span>
                            Policy
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 dash22">
                    <div className="button_container">
                      <div className="button_su">
                        <span className="su_button_circle"></span>
                        <Link to="/Claim" className="button_su_inner">
                          <span className="button_text_container">
                            <span className="iconWraper">
                              <i className="fas fa-qrcode"></i>
                            </span>
                            Claim
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 dash22">
                    <div className="button_container">
                      <div className="button_su">
                        <span className="su_button_circle"></span>
                        <Link to="/Finance" className="button_su_inner">
                          <span className="button_text_container">
                            <span className="iconWraper">
                              <i className="fas fa-recycle"></i>
                            </span>
                            Finance
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 dash22">
                    <div className="button_container">
                      <div className="button_su">
                        <span className="su_button_circle"></span>
                        <Link to="/Report" className="button_su_inner">
                          <span className="button_text_container">
                            <span className="iconWraper">
                              <i className="fas fa-th-list"></i>
                            </span>
                            Report
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 dash22">
                    <div className="button_container">
                      <div className="button_su">
                        <span className="su_button_circle"></span>
                        <Link to="/DMS" className="button_su_inner">
                          <span className="button_text_container">
                            <span className="iconWraper">
                              <i className="fas fa-landmark"></i>
                            </span>
                            DMS
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 dash22">
                    <div className="button_container">
                      <div className="button_su">
                        <span className="su_button_circle"></span>
                        <Link to="/QRC" className="button_su_inner">
                          <span className="button_text_container">
                            <span className="iconWraper">
                              <i className="fab fa-slack"></i>
                            </span>
                            QRC
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 dash22">
                    <div className="button_container">
                      <div className="button_su">
                        <span className="su_button_circle"></span>
                        <Link to="/Tree" className="button_su_inner">
                          <span className="button_text_container">
                            <span className="iconWraper">
                              <i className="fab fa-slack"></i>
                            </span>
                            Tree
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4 dash22">
                    <div className="button_container">
                      <div className="button_su">
                        <span className="su_button_circle"></span>
                        <Link to="/Dashboard" className="button_su_inner">
                          <span className="button_text_container">
                            <span className="iconWraper">
                              <i className="fab fa-slack"></i>
                            </span>
                            Dashboard
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 dash22 d-none"></div>
                  <div className="col-md-4 dash22 d-none"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard1;
