import React, { useState } from "react";
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import { toast } from 'react-toastify';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


const EditSubProgram = (props) => {

    const [postUserData, setPostUserData] = useState({
        id: props.data.subprogramresponses[0].id,
        program_id: props.data.subprogramresponses[0].program_id,
        subprogram_cd: props.data.subprogramresponses[0].subprogram_cd,
        subprogram: props.data.subprogramresponses[0].subprogram,
        remarks: props.data.subprogramresponses[0].remarks,
        actv_ind: 1,

    });


    const { id,program_id, subprogram_cd, subprogram , remarks, actv_ind } = postUserData;


    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: name === 'program_id' ? parseInt(value) : value });

    }


    const updatUserData = () => {

        const apiAndUrl = 'SubProgram/SubProgram/' + id;

        const updateStatus = UpdateUserDataFunction(apiAndUrl, postUserData);
        updateStatus.then((returnSt) => {
            if (returnSt === 200) {
                toast.success("Id = " + id + "program id  = " + program_id     + " is Successfully Updated", { position: toast.POSITION.TOP_CENTER });
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
                                    Program Id:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="number" className="form-control" name='program_id' value={program_id} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                    Subprogram Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='subprogram_cd' value={subprogram_cd}  readOnly />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                    subprogram:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='subprogram' value={subprogram} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                    Remarks:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='remarks' value={remarks} onChange={onIputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>


                            <div className="row form-group">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <a className="expdbutton btnSearch mr-2" onClick={updatUserData} >Update</a>
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

export default EditSubProgram;
