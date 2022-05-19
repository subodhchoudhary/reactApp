import React from "react";
import { Link } from "react-router-dom";
import "../../Css/Mainstyle.css";

function QRCNav() {
  return(
    <>
        <nav className="navbar navbar-default navBar  bckgrnd  mb-1 m-0">
        <div className="navBarwid">
          <ul className="nav     ">
            <li className="navBar margleft">
              <Link to="/Homepage" className="navBar p-0 text-center">
                <span>
                  <i
                    className="fa fa-share shareicon"
                    aria-hidden="true"
                  ></i>
                </span>
              </Link>
            </li>
            <li className="navBar">
              <Link to="/" className="p-0 text-decoration-none">
                <span className="fs-5">QRC</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-default  navBar bckgrnd m-0 ">
        <div className="navBarwid">
          <ul className="nav secnav-txt">
            <li className="navBar">
              <a href="/" className="pr-2 text-decoration-none">
                QRC
                <span>
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>    
    </>
      ) 
      ;
}

export default QRCNav;
