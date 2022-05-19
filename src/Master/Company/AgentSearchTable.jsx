import React from "react";
import { toast } from 'react-toastify';
import $ from 'jquery';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";

import { deleteFunction } from '../../Service/CrudOperation';
/*import AgentTable from "./AgentTable";*/

const AgentTypeTable = (props) => {
    $(() => {
        $(".DataTbl").DataTable();
    });

    const deleteUnitDataById = (id, agent_type_cd) => {
        const apiAndId = 'AgentType/AgentType/' + id

        if (window.confirm("Are You Sure Want To Delete")) {

            const returnStatus = deleteFunction(apiAndId);
            returnStatus.then((returnSt) => {
                if (returnSt === 200) {
                    toast.success("Id = " + id + "Agent Type Code = " + agent_type_cd + " is Deleted", { position: toast.POSITION.TOP_CENTER });
                }
            })


        }




    };

    const updateUserDataById = (id) => {

        props.UpdateAgentTypeDataFun('AgentType/AgentType?id=' + id)
    }

    const ViewUSerData = (id) => {
        props.ViewAgentTypeBtnFunction('AgentType/AgentType?id=' + id);
    }
    return (
        <>

            <div id="page-wrapper" className="page-wrapper-cls">
                <div id="page-inner" className="mt-3 px-6 py-6">

                    <div className="clearfix"></div>
                    <div className="x_panel boxshadow">
                        <div className="form-group" id="">
                            <div className="form-group x_content">
                                <table className="display w-100 DataTbl">
                                    <thead>
                                        <tr>
                                            <th>Agent Type Code</th>
                                            <th>Agent Type</th>
                                            <th>Agent Rank</th>
                                            <th>Description</th>
                                            <th>Edit</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            props.data.agentTypeResponses.map(
                                                propsUserData => (

                                                    <tr key={propsUserData.id}>
                                                        <td>{propsUserData.agent_type_cd}</td>
                                                        <td>{propsUserData.agent_type}</td>
                                                        <td>{propsUserData.agent_rank}</td>
                                                        <td>{propsUserData.description}</td>
                                                        <td>
                                                            <a onClick={() => updateUserDataById(propsUserData.id)}>
                                                                <i class="fa fa-edit fa-2x"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a onClick={() => ViewUSerData(propsUserData.id)}>
                                                                <i class="fa fa-eye fa-2x"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a onClick={() => deleteUnitDataById(propsUserData.id, propsUserData.agent_type_cd)}>
                                                                <i class="fa fa-trash fa-2x"></i>
                                                            </a>
                                                        </td>
                                                    </tr>
                                                )
                                            )
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};
export default AgentTypeTable;
