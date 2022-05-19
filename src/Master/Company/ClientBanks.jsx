import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


function ClientBanks(props) {

    const [postClientBankData, setpostClientBankData] = useState(
        {
            type: 0,
            bank_nm: '',
            bank_branch: '',
            account_type: '',
            account_no: '',
            ifsc_cd: '',
            micr_cd: '',
            swift_cd:''
        }
    );

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setpostClientBankData({ ...postClientBankData, [name]: name === 'type' ? parseInt(value):value });

    }

  
   

    const AddClientBankData = () => {
        const path = "ClientBanks/ClientBanks";

        const myReturnResData = AddUserFunction(path, postClientBankData)

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
                                        Type:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name='type' onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Bank Name:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='bank_nm' onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Bank Branch:</label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='bank_branch' onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Account Type:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='account_type' onChange={onInputChange}
 />
                                </div>
                                <div className="col-md-1"></div>

                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Account Number:</label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='account_no' onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        IFSC Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='ifsc_cd' onChange={onInputChange}
                                    />
                                </div>
                                <div className="col-md-1"></div>

                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">MICR Code:</label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='micr_cd' onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Swift Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='swift_cd' onChange={onInputChange}
                                    />
                                </div>
                                <div className="col-md-1"></div>

                            </div>

                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <a
                                            type="submit"
                                            name=""
                                        onClick={AddClientBankData}
                                            id=""
                                            className="expdbutton btnSearch mr-2"
                                            to="/ClientSearchTable"
                                        >
                                            Add
                                    </a>
                                    <a className="expdbutton btnback mr-2" onClick={props.AddClientBankBackBtn} >
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
}

export default ClientBanks;
