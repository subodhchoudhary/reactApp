import React, { useState } from "react";
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import { toast } from 'react-toastify';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


const UserEdit = (props) => {
    const [postUserData, setPostUserData] = useState({
        id: props.data.userResponses[0].id,
        branch_cd: props.data.userResponses[0].branch_cd,
        agent_type_cd: props.data.userResponses[0].agent_type_cd,
        user_cd: props.data.userResponses[0].user_cd,
        user_id: props.data.userResponses[0].user_id,
        user_nm: props.data.userResponses[0].user_nm,
        pwd: props.data.userResponses[0].pwd,
        first_nm: props.data.userResponses[0].first_nm,
        middle_nm: props.data.userResponses[0].middle_nm,
        last_nm: props.data.userResponses[0].last_nm,
        full_nm: props.data.userResponses[0].full_nm,
        dob: props.data.userResponses[0].dob,
        manager_cd: props.data.userResponses[0].manager_cd,
    });

    const { id, branch_cd, agent_type_cd, user_cd, user_id, user_nm, pwd, first_nm, middle_nm, last_nm, full_nm, dob, manager_cd} = postUserData;

   

    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: value });

    }


    const updateUserData = () => {

        const apiAndUrl = 'User/User/' + id;

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
                                    <label className="control-label from-txt">User Code:</label>
                                </div>

                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='user_cd' value={user_cd} onChange={onIputChange} readOnly />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Agent Type Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_type_cd' value={agent_type_cd} onChange={onIputChange}/>
                                    <div className="col-md-1"></div>
                                </div>

                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Branch Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='branch_cd' value={branch_cd} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>


                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        USer ID:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='user_id' value={user_id} onChange={onIputChange}/>
                                    <div className="col-md-1"></div>
                                </div>

                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        UserName:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='user_nm' value={user_nm} onChange={onIputChange}/>
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        PassWord:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='pwd' value={pwd} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        FirstName:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='first_nm' value={first_nm} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Middle Name:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='middle_nm' value={middle_nm} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Last Name:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='last_nm' value={last_nm} onChange={onIputChange}/>
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Full Name:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='full_nm' value={full_nm} onChange={onIputChange}/>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        DOB:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='dob' value={dob} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Manager Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='manager_cd' value={manager_cd} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
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
            
        </>
    );
}

export default UserEdit;
