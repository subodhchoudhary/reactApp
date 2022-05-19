import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


function AddUSer(props) {

    const [userData, getUserData] = useState([]);
    

    const [postUserData, setpostUserData] = useState(
        {
            branch_cd: '',
            agent_type_cd: '',
            user_cd: 'U',
            user_id: '',
            user_nm: '',
            pwd: '',
            first_nm: '',
            middle_nm: '',
            last_nm: '',
            full_nm: '',
            dob: null,
            manager_cd:''

        }
    );

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setpostUserData({ ...postUserData, [name]: value });

    }

 

    const AddUSerData = () => {
        const path = "User/User";

        const myReturnResData = AddUserFunction(path, postUserData)

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
                                        Branch Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='branch_cd' onChange={onInputChange}  />
                                    <div className="col-md-1"></div>
                                </div>
                                
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Agent Type Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='agent_type_cd' onChange={onInputChange} />
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
                                    <input type="text" className="form-control" name='user_nm' onChange={onInputChange}/>
                                    <div className="col-md-1"></div>
                                    </div>
                                    
                                    <div className="col-md-2">
                                        <label className="control-label from-txt">
                                            PassWord:<span className="text-danger">*</span>
                                        </label>
                                    </div>
                                    <div className="col-md-3">
                                    <input type="text" className="form-control" name='pwd' onChange={onInputChange} />
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
                                    <input type="text" className="form-control" name='first_nm' onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        MiddleName:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='middle_nm' onChange={onInputChange}/>
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        LastName:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='last_nm' onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        FullName:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='full_nm' onChange={onInputChange} />
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
                                    <input type="date" className="form-control" name='dob' onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        Manager Code:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='manager_cd' onChange={onInputChange} />
                                </div>
                                <div className="col-md-1"></div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <label className="control-label from-txt">
                                        User ID:<span className="text-danger">*</span>
                                    </label>
                                </div>
                                <div className="col-md-3">
                                    <input type="text" className="form-control" name='user_id' onChange={onInputChange} />
                                    <div className="col-md-1"></div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <a
                                        type="submit"
                                        name=""
                                        onClick={AddUSerData}
                                        id=""
                                        className="expdbutton btnSearch mr-2"
                                        to="/UserSearchTable"
                                    >
                                        Add
                                    </a>
                                    <a
                                        className="expdbutton btnback mr-2"
                                          onClick={props.AddUserBackBtn}
                      
                                         >
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

export default AddUSer;
