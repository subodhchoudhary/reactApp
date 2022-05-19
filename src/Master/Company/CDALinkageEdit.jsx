import React, { useState } from "react";
import { UpdateUserDataFunction } from '../../Service/CrudOperation';
import { toast } from 'react-toastify';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


const EditCDALinkage = (props) => {
    const [postUserData, setPostUserData] = useState({
        id: props.data.cDALinkageresponse[0].id,
        branch_cd: props.data.cDALinkageresponse[0].branch_cd,
        franchise_cd: props.data.cDALinkageresponse[0].franchise_cd,
        adviser_cd: props.data.cDALinkageresponse[0].adviser_cd,
        effective_from: props.data.cDALinkageresponse[0].effective_from,
        effective_upto: props.data.cDALinkageresponse[0].effective_upto,
        description: props.data.cDALinkageresponse[0].description,
        actv_ind:1,
    });

    

    const { id, branch_cd, franchise_cd, adviser_cd, effective_from, effective_upto, description, actv_ind } = postUserData;


    const onIputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPostUserData({ ...postUserData, [name]: value });

    }


    const updateUserData = () => {

        const apiAndUrl = 'CDALinkage/CDALinkage/' + id;

        const updateStatus = UpdateUserDataFunction(apiAndUrl, postUserData);
        updateStatus.then((returnSt) => {
            if (returnSt === 200) {
                toast.success("Id = " + id + "channel Type Code = " + franchise_cd + " is Successfully Updated", { position: toast.POSITION.TOP_CENTER });
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
                                        Branch Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" readOnly value={branch_cd} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Franchise Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='franchise_cd' value={franchise_cd} onChange={onIputChange}/>
                                    <div className="col-md-1"></div>
                                </div>

                            </div>
                            <div className="row form-group">

                                <div className="col-md-2">
                                    <label className="control-label from-txt">Adviser Code:</label>
                                </div>

                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='adviser_cd' value={adviser_cd} onChange={onIputChange}/>
                                    <div className="col-md-1"></div>
                                </div>


                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Effective From:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='effective_from' value={effective_from} onChange={onIputChange}/>
                                    <div className="col-md-1"></div>
                                </div>

                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Effective Upto:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='effective_upto' value={effective_upto} onChange={onIputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Description:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='description' value={description} onChange={onIputChange}/>
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

export default EditCDALinkage;
