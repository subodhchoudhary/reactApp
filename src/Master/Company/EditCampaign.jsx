import React, { useState } from "react";
import { toast } from 'react-toastify';
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";



const EditCampaign = (props) => {

   
    const [postUserData, setPostUserData] = useState({
        id: props.data.campaignresponse[0].id,
        program_id: props.data.campaignresponse[0].program_id,
        subprogram_id: props.data.campaignresponse[0].subprogram_id,
        category_id: props.data.campaignresponse[0].category_id,
        target_type: props.data.campaignresponse[0].target_type,
        target_unit: props.data.campaignresponse[0].target_unit,
        target_value: props.data.campaignresponse[0].target_value,
        effective_from: props.data.campaignresponse[0].effective_from,
        effective_upto: props.data.campaignresponse[0].effective_upto,
        remarks: props.data.campaignresponse[0].remarks,
        actv_ind: 1,

    });

    const { id, program_id, subprogram_id, category_id, target_type, target_unit, target_value, effective_from, effective_upto, remarks, actv_ind } = postUserData;


    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: name === 'program_id' ? parseInt(value) : value || name === 'subprogram_id' ? parseInt(value) : value || name === 'category_id' ? parseInt(value) : value});

    }



    const updateUserData = () => {

        const apiAndUrl = 'Campaign/Campaign/' + id;

        const updateStatus = UpdateUserDataFunction(apiAndUrl, postUserData);
        updateStatus.then((returnSt) => {
            if (returnSt === 200) {
                toast.success("Id = " + id + "Program Id Code = " + program_id + " is Successfully Updated", { position: toast.POSITION.TOP_CENTER });
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
                                        Program Id :<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='program_id' value={program_id} onChange={onInputChange}  />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Subprogram Id:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='subprogram_id' value={subprogram_id} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Category Id: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='category_id' value={category_id} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Target Type: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='target_type' value={target_type} onChange={onInputChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> Target Unit: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='target_unit' value={target_unit} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">Target Value: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='target_value' value={target_value} onChange={onInputChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> Effective From: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='effective_from' value={effective_from} onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> Effective From: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="date" className="form-control" name='effective_upto' value={effective_upto} onChange={onInputChange} />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt"> remarks: <span className="text-danger">*</span></label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='remarks' value={remarks} onChange={onInputChange} />
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


        </>
    );
};

export default EditCampaign;
