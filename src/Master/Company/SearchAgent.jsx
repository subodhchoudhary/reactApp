﻿import React from "react";
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";
// import "../../../public/Common";
import { useState, forwardRef, useRef, useImperativeHandle } from 'react';

const SearchAgemnt = forwardRef((props, ref) => {

    const [inputValue, setInputValue] = useState(
        [{
            agent_cd: '',  
            agent_nm: ''

        }]);

    const onChangeFunction = (e) => {

        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };


    useImperativeHandle(ref, () => ({
        returnMyIdsValue() {
            return inputValue;
        },
    }));
    return (
        <>

            <div id="page-wrapper" className="page-wrapper-cls">
                <div id="page-inner" className="mt-3 px-6 py-6">
                    <div className="x_panel boxshadow">
                        <div className="x_title">
                            <div className="row">
                                <div className="top-head">
                                    <div className="col-md-6 col-sm-6 col-xs-6">
                                        <div className="slope">
                                            <h2>Customer Details</h2>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6">
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li>
                                                <a className="disableusercontrol" onClick={props.AddAgentFunction}>
                                                    Add Customer
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="x_content">
                            <br />
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Agent Code:
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_cd' onChange={onChangeFunction} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Agent Name:
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_nm' onChange={onChangeFunction} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <a className="expdbutton btnSearch mr-2" onClick={props.SearchAgentFunction} >
                                        Search
                                    </a>

                                    <a className="expdbutton btnback mr-2" onClick={props.BackChannelTypeFunction}>
                                        Back
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
});
export default SearchAgemnt;
