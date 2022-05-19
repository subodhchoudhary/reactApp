import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


function AddUnitType(props) {

    const [userData, getUserData] = useState([]);

    const [unit_rankName, setunit_rankName] = useState('');
    const [unit_rankValue, setunit_rankValue] = useState('');

    const [postUnitData, setPostUnitData] = useState(
        {
            unit_type_cd: 'U',
            unit_type: '',
            unit_rank: 1,
            description: ''
        }
    );

    const onIputIntValue = (e) => {
        const name = e.target.name;
        const value = parseInt(e.target.value);
        setunit_rankName(name);
        setunit_rankValue(value);
    }
    const OnMouseHoverBtn = () => {
        setPostUnitData({ ...postUnitData, [unit_rankName]: unit_rankValue })
    }

    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPostUnitData({ ...postUnitData, [name]: value });


    }


    const AddCustomerData = () => {
        const path = "UnitType/UnitType";

        const myReturnResData = AddUserFunction(path, postUnitData)

        myReturnResData.then((result) => {

            if (result.returnStatus === 400) {

                var Errors = '';
                for (var i = 0; i <= result.returnData.errorObj.length - 1; i++) {
                    Errors = Errors + '(' + (i + 1) + ')' +result.returnData.errorObj[i].errorMessage;
                }
                toast.error(Errors, { position: toast.POSITION.TOP_CENTER });
            }
            else if (result.returnStatus === 200) {
                toast.success('Successfully Added', { position: toast.POSITION.TOP_CENTER });
            }
        })



    }



    return (
        <>

            <div id="page-wrapper" className="page-wrapper-cls">
                <div id="page-inner" className="mt-3 px-6 py-6">
                    <div className="x_panel boxshadow">
                        <div className="x_title">
                            <div className="row">
                                <div className="top-head">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slope">
                                            <h2>Customer Details</h2>
                                        </div>
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
                                        Unit_Type_Cd:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" readOnly />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Unit_Type:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='unit_type' onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Unit_Rank:</label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='unit_rank' onChange={onIputIntValue} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Description:</label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='description' onChange={onIputChange} />
                                </div>


                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <a onClick={AddCustomerData} onMouseOver={OnMouseHoverBtn} className="expdbutton btnSearch mr-2">
                                            Add
                                        </a>
                                        <a className="expdbutton btnback mr-2" onClick={props.AddUnitTypeBackBtn} >
                                            Back
                                        </a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default AddUnitType;
