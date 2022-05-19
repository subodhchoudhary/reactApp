import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../Css/Mainstyle.css";

const NavBarMid = (props) => {

    const [activeTabBar, setActiveBar] = useState('');


    const setActiveBarFunction = (keyId) => {       
        setActiveBar(keyId);
    };

    const setActiveBarClass = (MykeyId) => {
        const rtActiveBar = activeTabBar === MykeyId  ? 'navBar activeTabBar' : 'navBar hoverOnTabBar';       
        return rtActiveBar;       
    };

    return (
        
        <>
            <nav className="navbar navbar-default navBar  bckgrnd  mb-1 m-0">
                <div className="navBarwid">
                    <ul className="nav  ">
                        <li className="navBar margleft">
                            <Link to='/Homepage' className="navBar p-0 text-center">
                                <span>
                                    <i
                                        className="fa fa-share shareicon"
                                        aria-hidden="true"
                                    ></i>
                                </span>
                            </Link>
                        </li>
                        <li className="navBar hoverOnBackBtn">
                            <Link to="/" className="p-0 text-decoration-none">
                                <span className="fs-5">{props.NavBarName}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <nav className="navbar navbar-default  navBar bckgrnd m-0 ">
                <div className="navBarwid">
                    <ul className="nav secnav-txt ">


                        {
                            props.NavItems.map(
                                propsUserData => (

                                    <li key={propsUserData.KeyId} className={setActiveBarClass(propsUserData.KeyId)} onClick={() => { setActiveBarFunction(propsUserData.KeyId); }}>
                                        <a className="pr-2 text-decoration-none " onClick={propsUserData.FunctionName}>
                                            {propsUserData.NavItemsLinkName}
                                        </a>
                                            <span className='pipeicon'> |
                                                {/* <i className="ml-1 staricon" aria-hidden="true"></i> */}
                                            </span>                                       
                                    </li>
                                   
                                )
                            )
                        }


                       
                       

                    </ul>
                </div>
            </nav>



            </>
        );
};

export default NavBarMid;

/*style = {{ color: 'red' }}*/

/*to = { propsUserData.NavItemsLink }*/