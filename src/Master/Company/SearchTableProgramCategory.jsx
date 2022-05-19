import React from "react";
import { toast } from 'react-toastify';
import $ from 'jquery';


import { deleteFunction } from '../../Service/CrudOperation';

const SearchTableProgramCategory = (props) => {
    $(() => {
        $(".DataTbl").DataTable();
    });

    const deleteUnitDataById = (id, program_id) => {
        const apiAndId = 'ProgramCategory/ProgramCategory/' + id

        if (window.confirm("Are You Sure Want To Delete")) {

            const returnStatus = deleteFunction(apiAndId);
            returnStatus.then((returnSt) => {
                if (returnSt === 200) {
                    toast.success("Id = " + id + "Program id  = " + program_id + " is Deleted", { position: toast.POSITION.TOP_CENTER });
                }
            })

        }

    };

    const updateUserDataById = (id) => {

        props.UpdateProgramCategoryDataFun('ProgramCategory/ProgramCategory?id=' + id)
    }

    const ViewUSerData = (id) => {
        props.ViewprogramcategoryBtnFunction('ProgramCategory/ProgramCategory?id=' + id);
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
                                            <th>Category Code</th>
                                            <th>Program Id</th>
                                            <th>Subprogram Id</th>
                                            <th>Category</th>
                                            <th>Remarks</th>
                                            <th>Edit</th>
                                            <th>View</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            props.data.programCategoryResponses.map(
                                                propsUserData => (

                                                    <tr key={propsUserData.id}>
                                                        <td>{propsUserData.category_cd}</td>
                                                        <td>{propsUserData.program_id}</td>
                                                        <td>{propsUserData.subprogram_id}</td>
                                                        <td>{propsUserData.category}</td>
                                                        <td>{propsUserData.remarks}</td>
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
                                                            <a onClick={() => deleteUnitDataById(propsUserData.id, propsUserData.program_id)}>
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
export default SearchTableProgramCategory;
