import React from "react";
import { Link } from "react-router-dom";

function ValidationPOPUP() {
  return (
    <>
      <div
        className="modal bs-example-modal-sm in"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
        id="ModalPopupValidation"
      >
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title ">Validation Error</h4>
            </div>
            <div className="modal-body">
              <ul id="errorbody">
                <li>
                  <h5>Atleast one field is mandatory for the request</h5>
                </li>
              </ul>
            </div>
            <div className="modal-footer">
              <Link
              to="/VwClaim"
                type="button"
                className="btn btn-default btn-xs popbtn"
                data-dismiss="modal"
                id="btncloseModal"
              >
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ValidationPOPUP;
