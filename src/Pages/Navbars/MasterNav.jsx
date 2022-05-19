import React from 'react';
import { Link } from 'react-router-dom';
import "../../Css/Mainstyle.css";



function Navbartwo() {
    const BackToHome ='/Homepage'
  return (
    <>
      <nav className="navbar navbar-default navBar  bckgrnd  mb-1 m-0">
        <div className="navBarwid">
          <ul className="nav     ">
            <li className="navBar margleft">
                          <Link to={BackToHome} className="navBar p-0 text-center">
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
                <span className="fs-5">Master</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="navbar navbar-default  navBar bckgrnd m-0 ">
        <div className="navBarwid">
          <ul className="nav secnav-txt">
            <li className="navBar">
              <Link to="/VwCompany" className="pr-2 text-decoration-none">
                Channel_Type
                <span className='pipeicon'> |
                  {/* <i className="ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>
            <li className="navBar">
                          <Link to="/UnitType" className="pr-2 text-decoration-none">
                Unit_Type
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>
            <li className="navBar">
                          <Link to="/Agent_TypeSearch" className="pr-2 text-decoration-none">
                Agent_Type
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>
            <li className="navBar">
                          <Link to="/SearchClient" className="pr-2 text-decoration-none">
               Client
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>
            <li className="navBar">
                          <Link to="/" className="pr-2 text-decoration-none">
                ClientBanks
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>
            <li className="navBar">
                          <Link to="/SearchAgent" className="pr-2 text-decoration-none">
                Agent
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>
            <li className="navBar">
                          <Link to="/" className="pr-2 text-decoration-none">
                Unit_Agent_Type
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>
            <li className="navBar">
                          <Link to="/" className="pr-2 text-decoration-none">
               Branch
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>
            <li className="navBar">
                          <Link to="/USerSearch" className="pr-2 text-decoration-none">
                USer
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>

            <li className="navBar">
                          <Link to="/" className="pr-2 text-decoration-none">
                Franchise
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>
            <li className="navBar">
                          <Link to="/SearchCDALinkage" className="pr-2 text-decoration-none">
                CDA_Linkage
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>
            <li className="navBar">
                          <Link to="/" className="pr-2 text-decoration-none">
                CDA_Incentive
                <span  className='pipeicon'> |
                  {/* <i className="fa-solid fa-circle ml-1 staricon" aria-hidden="true"></i> */}
                </span>
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbartwo;
