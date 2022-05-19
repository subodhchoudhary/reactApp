import React, { useState } from "react";
import { toast } from 'react-toastify';
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";



const EditProgram = (props) => {

    //console.log(setPostUserData);
    const [postUserData, setPostUserData] = useState({
        id: props.data.programresponses[0].id,
        Program_cd: props.data.programresponses[0].program_cd,
        Program: props.data.programresponses[0].program,
        remarks: props.data.programresponses[0].remarks,
        
        active_ind:1,
        
    });

    const {id, Program_cd,Program,remarks} = postUserData;


    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: value });

    }  

    

    const updateUserData = () => {

        const apiAndUrl = 'Program/Program/' + id;

        const updateStatus = UpdateUserDataFunction(apiAndUrl, postUserData);
        updateStatus.then((returnSt) => {
            if (returnSt === 200) {
                toast.success("Id = " +  "Program_cd = " + Program + " is Successfully Updated", { position: toast.POSITION.TOP_CENTER });
                props.UpdatePageBackBtn();
            }
            else {
                toast.error("Invalid Entry", { position: toast.POSITION.TOP_CENTER });
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
                                    Program_Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='Program_cd' value={ Program_cd} readOnly />
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                    Program:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='Program' value={Program} onChange={onIputChange} />
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
                                <div className="col-md-1"></div>
                               
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
};

export default EditProgram;
