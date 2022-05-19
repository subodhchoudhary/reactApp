import React, { useState } from "react";
import { toast } from 'react-toastify';
import { AddUserFunction } from '../../Service/CrudOperation';



function Add_Agent(props) {
   

    const [Agent_rankName, setAgent_rankName] = useState('');
    const [Agent_rankValue, setAgent_rankValue] = useState('');

    const [postAgentData, setPostAgentData] = useState(
        {
            agent_type_cd: 'U',
            agent_type: '',
            agent_rank: null,
            description: ''
        }
    );

    const onInputIntValue = (e) => {
        const name = e.target.name;
        const value = parseInt(e.target.value);
        setAgent_rankName(name);
        setAgent_rankValue(value);
    }
    const OnMouseHoverBtn = () => {
        setPostAgentData({ ...postAgentData, [Agent_rankName]: Agent_rankValue })
    }

    const onInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPostAgentData({ ...postAgentData, [name]: value });


    }

    const AddAgentTypeData = () => {

        const path = "AgentType/AgentType";

        const myReturnResData = AddUserFunction(path, postAgentData)

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
                                      Agent Type Code:<span className="text-danger">*</span>
                                  </label>
                              </div>
                              <div className="col-md-3">
                                  <input type="text" className="form-control" readOnly />
                              </div>
                              <div className="col-md-1"></div>
                              <div className="col-md-2">
                                  <label className="control-label from-txt">
                                      Agent Type:<span className="text-danger">*</span>
                                  </label>
                              </div>
                              <div className="col-md-3">
                                  <input type="text" className="form-control" name='agent_type' onChange={onInputChange} />
                              </div>
                              <div className="col-md-1"></div>
                          </div>
                          <div className="row form-group">
                              <div className="col-md-2">
                                  <label className="control-label from-txt">Agent Rank:</label>
                              </div>
                              <div className="col-md-3">
                                  <input type="text" className="form-control" name='agent_rank' onChange={onInputIntValue} />
                              </div>
                              <div className="col-md-1"></div>
                              <div className="col-md-2">
                                  <label className="control-label from-txt">Description:</label>
                              </div>
                              <div className="col-md-3">
                                  <input type="text" className="form-control" name='description' onChange={onInputChange} />
                              </div>


                              <div className="row">
                                  <div className="col-md-12 text-center">
                                      <a
                                          type="submit"
                                          name=""
                                          onClick={AddAgentTypeData} onMouseOver={OnMouseHoverBtn}
                                          id=""
                                          className="expdbutton btnSearch mr-2"
                                          to="/AgentSearchTable"
                                      >
                                          Add
                                      </a>
                                      <a className="expdbutton btnback mr-2" onClick={props.AddAgentypeBackBtn} >
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

export default Add_Agent;
