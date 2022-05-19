import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


function UnitAgenttype(props) {

  const [userData, getUserData] = useState([]);
 
   const [PostUnitAgenttypeData, setPostUnitAgenttypeData] = useState(
{

  unit_type_cd:"U",
  agent_type_cd:"",
  remarks:""
}

  );

const onInputchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPostUnitAgenttypeData({...PostUnitAgenttypeData,[name]:value});
  }

 
    const AddUnitAgentType = () => {
        const path = "UnitAgentType/UnitAgentType";

        const myReturnResData = AddUserFunction(path, PostUnitAgenttypeData)

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
                    Unit Type Code:<span className="text-danger">*</span>
                  </label>
                </div>
                <div className="col-md-3">
                  <input type="text" className="form-control" readOnly />
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
                  <input type="text" className="form-control"  name="remarks" onChange={onInputchange} />
                </div>

                <div className="row">
                  <div className="col-md-12 text-center">
                    <a
                     
                    onClick={AddUnitAgentType}
                    
                      className="expdbutton btnSearch mr-2"
                     
                    >
                      Add
                    </a>
                                       <a className="expdbutton btnback mr-2" onClick={props.AddUnitAgenttypeBackBtn} >
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

export default UnitAgenttype;
