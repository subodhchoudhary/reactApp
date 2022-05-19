import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


function CDAIncentive(props) {


    const [postCDAIncentiveData, setpostCDAIncentiveData] = useState(
        {
            franchise_cd: '',
            incentive_type: '',
            incentive: 0,
            effective_from: null,
            effective_upto: null,
            description: ''

        }
    );

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setpostCDAIncentiveData({ ...postCDAIncentiveData, [name]: name === 'incentive' ? parseInt(value): value });

    }

   

    const AddCDAIncentiveData = () => {
        const path = "CDAIncentive/CDAIncentive";

        const myReturnResData = AddUserFunction(path, postCDAIncentiveData)

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
                                        Franchise Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='franchise_cd' onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Incentive Type:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    {/*<input type="text" className="form-control"  />*/}
                                    <select className="form-control" name='incentive_type' onChange={onInputChange} >
                                        <option value="F">Fixed</option>
                                        <option value="P">Percentage</option>


                                    </select>
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Incetive:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name='incentive' onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Effective From:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='effective_from' onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Effective Upto:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='effective_upto' onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Description:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='description' onChange={onInputChange}/>
                                </div>
                                <div className="col-md-1"></div>
                            </div>


                            <div className="row form-group">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <a onClick={AddCDAIncentiveData} className="expdbutton btnSearch mr-2">
                                            Add
                                        </a>
                                        <a className="expdbutton btnback mr-2" onClick={props.AddCDAIncentiveBackBtn} >
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

export default CDAIncentive;
