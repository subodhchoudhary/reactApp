import React, { useState } from "react";
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import { toast } from 'react-toastify';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


const BranchEdit = (props) => {

    const [postUserData, setPostUserData] = useState({
        id: props.data.branchResponses[0].id,
        agent_cd: props.data.branchResponses[0].agent_cd,
        agent_type_cd: props.data.branchResponses[0].agent_type_cd,
        branch_cd: props.data.branchResponses[0].branch_cd,
        branch_nm: props.data.branchResponses[0].branch_nm,
        remarks: props.data.branchResponses[0].remarks,
    });



    const { id, agent_cd, agent_type_cd, branch_cd, branch_nm, remarks } = postUserData;


    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: value });

    }


    const updateUserData = () => {

        const apiAndUrl = 'Branch/Branch/' + id;

        const updateStatus = UpdateUserDataFunction(apiAndUrl, postUserData);
        updateStatus.then((returnSt) => {
            if (returnSt === 200) {
                toast.success("Id = " + id + "agent Type Code = " + agent_type_cd + " is Successfully Updated", { position: toast.POSITION.TOP_CENTER });
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
                                        Agent_Cd:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_cd' value={agent_cd} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Agent_Type_Cd:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_type_cd' value={agent_type_cd} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Branch_Cd:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='branch_cd' value={branch_cd} onChange={onIputChange} readOnly />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Branch_Nm:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='branch_nm' value={branch_nm} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Remarks:</label>
                                </div>

                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='remarks' value={remarks} onChange={onIputChange} />
                                </div>

                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <a className="expdbutton btnSearch mr-2" onClick={updateUserData} >Update</a>
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

export default BranchEdit;