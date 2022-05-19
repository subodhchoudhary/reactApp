import React, { useState } from "react";
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import { toast } from 'react-toastify';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";

const ClientBankEdit = (props) => {


    const [postUserData, setPostUserData] = useState({
        id: props.data.clientBankResponses[0].id,
        type: props.data.clientBankResponses[0].type,
        bank_nm: props.data.clientBankResponses[0].bank_nm,
        bank_branch: props.data.clientBankResponses[0].bank_branch,
        account_type: props.data.clientBankResponses[0].account_type,
        account_no: props.data.clientBankResponses[0].account_no,
        ifsc_cd: props.data.clientBankResponses[0].ifsc_cd,
        micr_cd: props.data.clientBankResponses[0].micr_cd,
        swift_cd: props.data.clientBankResponses[0].swift_cd,
        actv_ind:1,
    });


    const { id, type, bank_nm, bank_branch, account_type, account_no, ifsc_cd, micr_cd, swift_cd, actv_ind } = postUserData;


    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: name === 'type' ? parseInt(value): value });

    }
    


    const updateUserData = () => {

        const apiAndUrl = 'ClientBanks/ClientBanks/' + id;

        const updateStatus = UpdateUserDataFunction(apiAndUrl, postUserData);
        updateStatus.then((returnSt) => {
            if (returnSt === 200) {
                toast.success("Id = " + id + "Bank Name = " + bank_nm + " is Successfully Updated", { position: toast.POSITION.TOP_CENTER });
                props.UpdatePageBackBtn();
            }
            else {
                toast.error("Invalid Enrty", { position: toast.POSITION.TOP_CENTER });
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
                                    <input type="text" className="form-control" value={type} readOnly />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Bank_Nm:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='bank_nm' value={bank_nm} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>




                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Bank_Branch:</label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='bank_branch' value={bank_branch} onChange={onIputChange} />
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Account_Type:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name='account_type' value={account_type} onChange={onIputChange} />
                                    </div>
                                    <div className="col-md-1"></div>
                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            Account_No:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name='account_no' value={account_no} onChange={onIputChange} />
                                    </div>
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="row form-group">
                                    <div className="col-md-2">
                                        <label className="control-label from-txt">Ifsc_Cd:</label>
                                    </div>
                                    <div className="col-md-3">
                                        <input type="text" className="form-control" name='ifsc_cd' value={ifsc_cd} onChange={onIputChange} />
                                    </div>

                                    <div className="row form-group">
                                        <div className="col-md-2">
                                            <label className="control-label from-txt">
                                                Micr_Cd:<span className="text-danger">*</span>
                                            </label>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="text" className="form-control" name='micr_cd' value={micr_cd} onChange={onIputChange} />
                                        </div>
                                        <div className="col-md-1"></div>
                                        <div className="col-md-2">
                                            <label className="control-label from-txt">
                                                Swift_Cd:<span className="text-danger">*</span>
                                            </label>
                                        </div>
                                        <div className="col-md-3">
                                            <input type="text" className="form-control" name='swift_cd' value={swift_cd} onChange={onIputChange} />
                                        </div>
                                        <div className="col-md-1"></div>
                                    </div>


                                </div>

                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <a onClick={updateUserData} className="expdbutton btnSearch mr-2" > Update </a>
                                        <a className="expdbutton btnback mr-2" onClick={props.UpdatePageBackBtn} >Back</a>
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

export default ClientBankEdit;
