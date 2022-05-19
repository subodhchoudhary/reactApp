import React, { useState } from "react";
import logo from "../Images/logo1.png";
import "../Css/Login.css";
import { useNavigate } from "react-router-dom";
import Auth from '../Service/Auth'
import StsVarify from '../Service/StsVarify'

import Homepage from "./Homepage";

const Login = () => {

    // script
    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [statusReturn, setstatusReturn] = useState('f');



    //onChange UserName InputBox
    const onChangeUserNameInput = (e) => {
        setUsername(e.target.value);
    }
    //onChange password InputBox
    const onChangePasswordInput = (e) => {
        setPassword(e.target.value);
    }



    /*   window.globalUserName = username;*/

    localStorage.setItem('LocalStorageUserName', username);

    function handleClickForLogin() {
        const Lstatus = localStorage.getItem("responseStatus");

        let rtStatus = StsVarify(Lstatus, statusReturn);
        
        if (rtStatus.rtStatus === 200) {
            navigate(rtStatus.rtLogin);
            localStorage.removeItem("responseStatus");
        }
        else if (rtStatus.rtStatus === 400) {
            alert("Invalid credentials. Please try again.");
            localStorage.removeItem("LocalStorageUserName");
            navigate('/ErrorPage404');
        }
        else if (rtStatus.rtStatus === 404) {
            alert("Password Incorrect");
            localStorage.removeItem("LocalStorageUserName");
        }
        else if (rtStatus.rtStatus === 500) {
            alert("Password Incorrect");
            localStorage.removeItem("LocalStorageUserName");
        }
        else {
            navigate('/ErrorPage404');
            localStorage.removeItem("LocalStorageUserName");
        }
        
       /* true ? navigate(rtStatus.rtLogin) : alert("Password Incorrect");*/
    }

    function OnMouseOverLogin() {

        var isValid = Auth(username, password);

        isValid.then((Result) => {
            setstatusReturn(Result.errorObj[0].errorCode);
        })


    }

    return (
        <>
            <div className="bg-img">
                <div className="content">
                    {/* Header */}
                    <header>
                        <div className="img-logo text-center">
                            <img
                                className="img-responsive logoImg"
                                alt="logo"
                                height="100"
                                width="200"
                                src={logo}
                            />
                        </div>
                        <p className="mt-4 text-blue">Channel Mangment</p>
                    </header>
                    {/* main content */}
                    <form action="/" id="loginContainers">
                        <div className="loginform" id="loginform1">
                            <div className="field">
                                <span className="fa fa-user"></span>
                                <input
                                    name="txtUserName"
                                    type="text"
                                    id="txt"
                                    className="form-control"
                                    placeholder="Username"
                                    value={username}
                                    onChange={onChangeUserNameInput}

                                />
                                <span></span>
                            </div>
                            <div className="field space">
                                <span className="fa fa-lock"></span>
                                <input
                                    name="txtPassword1"
                                    type="password"
                                    id="txtpassword"
                                    className="pass-key form-control"
                                    placeholder="Password"
                                    autoComplete="Disabled"
                                    value={password}
                                    onChange={onChangePasswordInput}
                                />
                                <span className="show">
                                    <i className=" fa-lg fas fa-eye"></i>
                                </span>
                                <span></span>
                            </div>
                            <div className="field field1 mt-3">
                                <input
                                    type="submit"
                                    name="btnLogin"
                                    value="Login"
                                    id="btnLogin"
                                    className="loginBtn"
                                    onClick={handleClickForLogin}
                                    onMouseOver={OnMouseOverLogin}
                                />
                                {/* <button  onClick={handleClick}>Submit</button> */}
                                <div></div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;
