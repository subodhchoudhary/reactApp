import React from "react";
import { toast } from 'react-toastify';
import { deleteFunction } from '../../Service/CrudOperation';
import $ from 'jquery';
import NavBar from "../../Pages/Navbars/NavBar";
import MasterNav from "../../Pages/Navbars/MasterNav";
import Footer from "../../Pages/Footer";
import { Link } from "react-router-dom";


function SearchTableSubProgram(props) {
    $(() => {
        $(".DataTbl").DataTable();
    });

    const deleteSubProgramDataById = (id, program_id) => {
        const apiAndId = 'SubProgram/SubProgram/' + id

        if (window.confirm("Are You Sure Want To Delete")) {

            const returnStatus = deleteFunction(apiAndId);
            returnStatus.then((returnSt) => {
                if (returnSt === 200) {
                    toast.success("Id = " + id + "program id = " + program_id + " is Deleted", { position: toast.POSITION.TOP_CENTER });
                }
            })


        }




    };

    const updateSubprogramDataById = (id) => {

        props.UpdateSubProgramDataFun('SubProgram/SubProgram?id=' + id)
    }

    const ViewSubProgramData = (id) => {
        props.ViewSubProgramBtnFunction('SubProgram/SubProgram?id=' + id);
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

                                            <th>Program Id</th>
                                            <th>Subprogram Code</th>
                                            <th>Subprogram</th>
                                            <th>Remarks</th>
                                            <th>Edit</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            props.data.subprogramresponses.map(
                                                propsUserData => (

                                                    <tr key={propsUserData.id}>
                                                        <td>{propsUserData.program_id}</td>
                                                        <td>{propsUserData.subprogram_cd}</td>
                                                        <td>{propsUserData.subprogram}</td>
                                                        <td>{propsUserData.remarks}</td>
                                                        <td>
                                                            <a onClick={() => updateSubprogramDataById(propsUserData.id)}>
                                                                <i class="fa fa-edit fa-2x"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a onClick={() => ViewSubProgramData(propsUserData.id)}>
                                                                <i class="fa fa-eye fa-2x"></i>
                                                            </a>
                                                        </td>
                                                        <td>
                                                            <a onClick={() => deleteSubProgramDataById(propsUserData.id, propsUserData.program_id)}>
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
}


export default SearchTableSubProgram;
