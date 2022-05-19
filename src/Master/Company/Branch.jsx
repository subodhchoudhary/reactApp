import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


function Branch(props) {

 
   const [PostBranchData, setPostBranchData] = useState(
{

  agent_cd:"",
  agent_type_cd:"",
  branch_cd:"B",
  branch_nm:"",
  remarks:""
}

  );

const onInputchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostBranchData({...PostBranchData,[name]:value});
  }

    const AddBranchData = () => {
        const path = "Branch/Branch";

        console.log(PostBranchData);
        const myReturnResData = AddUserFunction(path, PostBranchData)

        myReturnResData.then((result) => {

            if (result.returnStatus === 400) {

                var Errors = '';
                for (var i = 0; i <= result.returnData.errorObj.length - 1; i++) {
                    Errors = Errors + '(' + (i + 1) + ')' +result.returnData.errorObj[i].errorMessage+'  ';
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
                    Agent Code:<span className="text-danger">*</span>
                  </label>
                </div>
                <div className="col-md-3">
                                  <input type="text" className="form-control" name="agent_cd" onChange={onInputchange} />
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                  <label className="control-label from-txt">
                    Agent Type Code:<span className="text-danger">*</span>
                  </label>
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control"   name="agent_type_cd" onChange={onInputchange}/>
                </div>
                <div className="col-md-1"></div>
              </div>

                          <div className="row form-group">                
                              <div className="col-md-2">
                                  <label className="control-label from-txt">Remarks:</label>
                              </div>
                              <div className="col-md-3">
                                  <input type="text" className="form-control" name="remarks" onChange={onInputchange} />
                              </div>
                <div className="col-md-1"></div>
                <div className="col-md-2">
                  <label className="control-label from-txt">
                    Branch Name:<span className="text-danger">*</span>
                  </label>
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control"  name="branch_nm" onChange={onInputchange} />
                </div>
                <div className="col-md-1"></div>
              </div>
              <div className="row form-group">
                


                <div className="row">
                  <div className="col-md-12 text-center">
                    <a onClick={AddBranchData}
                      
                      className="expdbutton btnSearch mr-2"
                      
                    >
                      Add
                    </a>
                    <a
                     className="expdbutton btnback mr-2"
                     onClick={props.AddBranchBackBtn}
                      
                    >
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

export default Branch;
