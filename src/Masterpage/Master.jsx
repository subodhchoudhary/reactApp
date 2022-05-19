import React, { useState, useEffect } from "react";
import { forwardRef, useRef, useImperativeHandle } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "../Pages/Navbars/NavBar";
import MasterNav from '../Pages/Navbars/MasterNav';
import NavBarMid from '../Pages/Navbars/NavBarMid';
import Welcometxt from '../Pages/Middle Text/Welcometxt';
import Footer from '../Pages/Footer';
import { MasterJsonData } from '../JsonData/JsonData';
import ViewPopUp from '../ViewPopUp/ViewPopUp';
import '../ViewPopUp/ViewPopUp.css';

import VwCompany from '../Master/Company/VwCompany';
import SearchTable from '../Master/Company/SearchTable';
import AddCustomer from '../Master/Company/AddCustomer';
import ToEdit from '../Master/Company/ToEdit';

import { GetUserDataByIds, GetUserDataById } from '../Service/CrudOperation';

import Unit_TypeSearch from '../Master/Company/Unit_TypeSearch';
import Agent_TypeSearch from '../Master/Company/Agent_TypeSearch';
import SearchClient from '../Master/Company/SearchClient';
import ClientBankSearch from '../Master/Company/ClientBankSearch';
import SearchAgent from '../Master/Company/SearchAgent';
import UnitAgenttypesearch from '../Master/Company/UnitAgenttypesearch';
import BranchSearch from '../Master/Company/BranchSearch';
import UserSeach from '../Master/Company/UserSeach';
import FranchiseSearch from '../Master/Company/FranchiseSearch';
import SearchCDALinkage from '../Master/Company/SearchCDALinkage';
import CDAIncentiveSearch from '../Master/Company/CDAIncentiveSearch';

import EditProgram from '../Master/Company/EditProgram';
import SearchTableProgram from '../Master/Company/SearchTableProgram';
import AddProgram from '../Master/Company/AddProgram';
import SearchProgram from '../Master/Company/SearchProgram';
import EditSubProgram from '../Master/Company/EditSubProgram';
import SearchTableSubProgram from '../Master/Company/SearchTableSubProgram';
import AddSubProgram from '../Master/Company/AddSubProgram';
import SearchSubProgram from '../Master/Company/SearchSubProgram';
import EditProgramCategory from '../Master/Company/EditProgramCategory';
import SearchTableProgramCategory from '../Master/Company/SearchTableProgramCategory';
import AddProgramCategory from '../Master/Company/AddProgramCategory';
import SearchProgramCategory from '../Master/Company/SearchProgramCategory';
import EditCampaign from '../Master/Company/EditCampaign';
import SearchTableCampaign from '../Master/Company/SearchTableCampaign';
import AddCampaign from '../Master/Company/AddCampaign';
import SearchCampaign from '../Master/Company/SearchCampaign';


///New Update

import UnitSearchTable from '../Master/Company/UnitSearchTable';
import AddUnitType from '../Master/Company/AddUnit_Type';
import AgentSearchTable from '../Master/Company/AgentSearchTable';
import Add_Agent from '../Master/Company/Add_Agent';
import AddClient from "../Master/Company/AddClient";
import ClientTable from "../Master/Company/ClientTable";
import ClientBanks from "../Master/Company/ClientBanks";
import ClientBankSearchTable from "../Master/Company/ClientBankSearchTable";
import AgentTable from "../Master/Company/AgentTable";
import AddAgent from "../Master/Company/AddAgent";
import CDALinkageTable from "../Master/Company/CDALinkageTable";
import AddCDALinkage from "../Master/Company/AddCDALinkage";
import CDAIncentiveTable from "../Master/Company/CDAIncentiveTable";
import CDAIncentive from "../Master/Company/CDAIncentive";
import UnitAgentTypeTable from "../Master/Company/UnitAgentTypeTable";
import UnitAgenttype from "../Master/Company/UnitAgenttype";
import Branchtable from "../Master/Company/Branchtable";
import Branch from "../Master/Company/Branch";
import USerSearchTable from "../Master/Company/UserSearchTable";
import AddUSer from "../Master/Company/AddUser";
import FranchiseTable from "../Master/Company/FranchiseTable";
import Franchise from "../Master/Company/Franchise";
import USerSearch from "../Master/Company/UserSeach";

import UnitAgenttypeEdit from "../Master/Company/UnitAgenttypeEdit";
import BranchEdit from "../Master/Company/BranchEdit";
import UserEdit from "../Master/Company/USerEdit";
import FranchiseEdit from "../Master/Company/FranchiseEdit";
import EditCDALinkage from "../Master/Company/CDALinkageEdit";
import CDAIncentiveEdit from "../Master/Company/CDAIncentiveEdit";
///NEw Update
import EditUnit from "../Master/Company/EditUnit";
import EditAgent from "../Master/Company/EditAgent";
import EditClient from "../Master/Company/EditClient";
import ClientBankEdit from "../Master/Company/ClientBankEdit";
import AgentEdit from "../Master/Company/AgentEdit";


const Master = () => {

    const [pageLoadContent, setPageLoadContent] = useState(<Welcometxt key='MasterWelComePaGE' />);

    const [loadElement, setloadElement] = useState('');

    const [loadViewElement, setloadViewElement] = useState('');

    /* const NavItems=MasterJsonData();*/

    /* GetSeachChannelComponent Child Method Data */

    const getSearchComponentIds = useRef();

    /*  */
    const ViewPopUpCloseBtnFunction = () => {

        setloadViewElement("");
    };

    const ViewChannelTypeBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            console.log(ReturnData.responseObj.channelTypeResponse[0].channel_type_cd);
            setloadViewElement(<ViewPopUp key='ViewPopUpChannelType' popUpheaderName='Channel Type Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Channel_Type_Cd</th>
                            <th>Channel_Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.channelTypeResponse.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.channel_type_cd}</td>
                                        <td>{propsUserData.channel_type}</td>
                                        <td>{propsUserData.description}</td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateUserDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< ToEdit key='ToEditPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddChannelTypeBackBtn} />);
            setloadElement('');
        })
    }

    const SeachChannelTypeFunction = () => {

        var channel_type = (getSearchComponentIds.current.returnMyIdsValue()).channel_type;
       
        var channel_type_cd = (getSearchComponentIds.current.returnMyIdsValue()).channel_type_cd;
        
        if (channel_type === undefined) {
            channel_type = '';
        }      
       
        if (channel_type_cd ===undefined) {
            channel_type_cd = '';
        }       
        

        const ids = "ChannelType/ChannelType?channel_type_cd=" + channel_type_cd + "&channel_type=" + channel_type;

        const data = GetUserDataByIds(ids);       
       
        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<SearchTable key='SearchTableElement' data={Result.returnData.responseObj} UpdateUserDataFun={UpdateUserDataFun} ViewChannelTypeBtnFunction={ViewChannelTypeBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });
    };


    const BackChannelTypeFunction = () => {

        setPageLoadContent('');
        setloadElement(<Welcometxt key='MasterWelComePaGEB' />);


    };


    const AddChannelTypeFunction = () => {
        setPageLoadContent('');
        setloadElement(<AddCustomer AddChannelTypeBackBtn={AddChannelTypeBackBtn} key='AddCustomerElement' />);
    };

    const AddChannelTypeBackBtn = () => {
        setPageLoadContent(<VwCompany ref={getSearchComponentIds} key='BackVwCompanyPaGE' SeachChannelTypeFunction={SeachChannelTypeFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddChannelTypeFunction={AddChannelTypeFunction} />);
        setloadElement('');
    };

////////////New update////////
    // Unit_TypeSearch //////////////
    //---- View -- //
    const ViewUnitTypeBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            setloadViewElement(<ViewPopUp key='UnitTypePopUpGage' popUpheaderName='Unit Type Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Unit Type Code</th>
                            <th>Unit Type</th>
                            <th>Unit Rank</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.unitTypeResponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.unit_type_cd}</td>
                                        <td>{propsUserData.unit_type}</td>
                                        <td>{propsUserData.unit_rank}</td>
                                        <td>{propsUserData.description}</td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    //--- Update ---//
    const UpdateUnitTypeDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< EditUnit key='EditUnitPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddUnitTypeBackBtn} />);
            setloadElement('');
        })
    }

    const SearchUnitTypeFunction = () => {

        var unit_type = (getSearchComponentIds.current.returnMyIdsValue()).unit_type;

        var unit_type_cd = (getSearchComponentIds.current.returnMyIdsValue()).unit_type_cd;

        if (unit_type === undefined) {
            unit_type = '';
        }

        if (unit_type_cd === undefined) {
            unit_type_cd = '';
        }

        
        const ids = "UnitType/UnitType?unit_type_cd=" + unit_type_cd + "&unit_type=" + unit_type;

        const data = GetUserDataByIds(ids);
       
        data.then((Result) => {

            if (Result.returnStatus === 200) {
                setloadElement(<UnitSearchTable key='UnitSearchTableElement' data={Result.returnData.responseObj} UpdateUnitTypeDataFun={UpdateUnitTypeDataFun} ViewUnitTypeBtnFunction={ViewUnitTypeBtnFunction} />);
            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

    };

    const AddUnitTypeFunction = () => {
        setPageLoadContent('');
        setloadElement(<AddUnitType AddUnitTypeBackBtn={AddUnitTypeBackBtn} key='AddUnitTypeElement' />);
    };

    const AddUnitTypeBackBtn = () => {
        setPageLoadContent(<Unit_TypeSearch ref={getSearchComponentIds} key='BackUnit_TypeSearchPaGE' SearchUnitTypeFunction={SearchUnitTypeFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddUnitTypeFunction={AddUnitTypeFunction} />);
        setloadElement('');
    };

    // Unit_TypeSearch //////////////



    // Agent_TypeSearch //////////////

    //---- View -- //
    const ViewAgentTypeBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            setloadViewElement(<ViewPopUp key='AgentTypePopUpGage' popUpheaderName='Agent Type Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Agent Type Code</th>
                            <th>Agent Type</th>
                            <th>Agent Rank</th>
                            <th>Description</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.agentTypeResponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.agent_type_cd}</td>
                                        <td>{propsUserData.agent_type}</td>
                                        <td>{propsUserData.agent_rank}</td>
                                        <td>{propsUserData.description}</td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    //--- Update ---//
    const UpdateAgentTypeDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< EditAgent key='EditAgentPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddAgentypeBackBtn} />);
            setloadElement('');
        })
    }

    const SearchAgentTypeFunction = () => {

        var agent_type_cd = (getSearchComponentIds.current.returnMyIdsValue()).agent_type_cd;

        var agent_type = (getSearchComponentIds.current.returnMyIdsValue()).agent_type;


        if (agent_type_cd === undefined) {
            agent_type_cd = '';
        }

        if (agent_type === undefined) {
            agent_type = '';
        }


        const  ids = "AgentType/AgentType?agent_type_cd=" + agent_type_cd + "&agent_type=" + agent_type;

        const data = GetUserDataByIds(ids);
      
        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<AgentSearchTable key='AgentSearchTableElement' data={Result.returnData.responseObj} UpdateAgentTypeDataFun={UpdateAgentTypeDataFun} ViewAgentTypeBtnFunction={ViewAgentTypeBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

    };

    const AddAgentTypeFunction = () => {
        setPageLoadContent('');
        setloadElement(<Add_Agent AddAgentypeBackBtn={AddAgentypeBackBtn} key='Add_AgentElement' />);
    };

    const AddAgentypeBackBtn = () => {
        setPageLoadContent(<Agent_TypeSearch ref={getSearchComponentIds} key='BackAgent_TypeSearchPaGE' SearchAgentTypeFunction={SearchAgentTypeFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddAgentTypeFunction={AddAgentTypeFunction} />);
        setloadElement('');
    };

    // Agent_TypeSearch //////////////


    //Client
    //---- View -- //
    const ViewClientBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {


            setloadViewElement(<ViewPopUp key='ClientTypePopUpGage' AgentTypepopUpheaderName='Client Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Type</th>
                            <th>Full Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Mobile No.</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.clientResponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.type}</td>
                                        <td>{propsUserData.full_nm}</td>
                                        <td>{propsUserData.dob}</td>
                                        <td>{propsUserData.gender}</td>
                                        <td>{propsUserData.email1}</td>
                                        <td>{propsUserData.address_line1}</td>
                                        <td>{propsUserData.mobile1}</td>
                                        <td>{propsUserData.remarks}</td>

                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    //--- Update ---//
    const UpdateClientDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< EditClient key='EditClientPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddClientBackBtn} />);
            setloadElement('');
        })
    }

    const SearchClientFunction = () => {

        var parent_client_cd = (getSearchComponentIds.current.returnMyIdsValue()).parent_client_cd;

        var client_cd = (getSearchComponentIds.current.returnMyIdsValue()).client_cd;

        if (parent_client_cd === undefined) {
            parent_client_cd = '';
        }

        if (client_cd === undefined) {
            client_cd = '';
        }

        const ids = "Client/Client?client_cd=" + client_cd + "&parent_client_cd=" + parent_client_cd;

        const data = GetUserDataByIds(ids);
       
        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<ClientTable key='ClientTableElement' data={Result.returnData.responseObj} UpdateClientDataFun={UpdateClientDataFun} ViewClientBtnFunction={ViewClientBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

    };

    const AddClientFunction = () => {
        setPageLoadContent('');
        setloadElement(<AddClient AddClientBackBtn={AddClientBackBtn} key='AddClientElement' />);
    };

    const AddClientBackBtn = () => {
        setPageLoadContent(<SearchClient ref={getSearchComponentIds} key='BackSearchClientPaGE' SearchClientFunction={SearchClientFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddClientFunction={AddClientFunction} />);
        setloadElement('');
    };

    //Client

    //ClientBank
    //---- View -- //
    const ViewClientBankBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            
            setloadViewElement(<ViewPopUp key='ClientBankTypePopUpGage' popUpheaderName='ClientBank Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Type</th>
                            <th>Bank_Nm</th>
                            <th>Bank_Branch</th>
                            <th>Account_Type</th>
                            <th>Account_No</th>
                            <th>Ifsc_Cd</th>
                            <th>Micr_Cd</th>
                            <th>Swift_Cd</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.clientBankResponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.type}</td>
                                        <td>{propsUserData.bank_nm}</td>
                                        <td>{propsUserData.bank_branch}</td>
                                        <td>{propsUserData.account_type}</td>
                                        <td>{propsUserData.account_no}</td>
                                        <td>{propsUserData.ifsc_cd}</td>
                                        <td>{propsUserData.micr_cd}</td>
                                        <td>{propsUserData.swift_cd}</td>

                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };
    //--- Update ---//
    const UpdateClienBanktDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< ClientBankEdit key='ClientBankEditPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddClientBankBackBtn} />);
            setloadElement('');
        })
    }

    const SearchClientBankFunction = () => {

        var bank_nm = (getSearchComponentIds.current.returnMyIdsValue()).bank_nm;

        var ifsc_cd = (getSearchComponentIds.current.returnMyIdsValue()).ifsc_cd;

        if (bank_nm === undefined) {
            bank_nm = '';
        }

        if (ifsc_cd === undefined) {
            ifsc_cd = '';
        }

        const ids = "ClientBanks/ClientBanks?bank_nm=" + bank_nm + "&ifsc_cd=" + ifsc_cd;

        const data = GetUserDataByIds(ids);
       
        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<ClientBankSearchTable key='ClientBankSearchTableElementf' data={Result.returnData.responseObj} UpdateClienBanktDataFun={UpdateClienBanktDataFun} ViewClientBankBtnFunction={ViewClientBankBtnFunction} />);


            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

      

    };


    const AddClientBankFunction = () => {
        setPageLoadContent('');
        setloadElement(<ClientBanks AddClientBankBackBtn={AddClientBankBackBtn} key='ClientBanksElement' />);
    };

    const AddClientBankBackBtn = () => {
        setPageLoadContent(<ClientBankSearch ref={getSearchComponentIds} key='ClientBankSearchPaGE' SearchClientBankFunction={SearchClientBankFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddClientBankFunction={AddClientBankFunction} />);
        setloadElement('');
    };

    //ClientBank

    //Agent
    //---- View -- //
    const ViewAgentBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            console.log(ReturnData.responseObj.agentResponses[0].agent_nm);
            setloadViewElement(<ViewPopUp key='AgentTypePopUpGage' popUpheaderName='Agent Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Agent Name</th>
                            <th>Parent Agent Name</th>
                            <th>Mobile No.</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Pin Zip</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.agentResponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.agent_nm}</td>
                                        <td>{propsUserData.parent_agent_nm}</td>
                                        <td>{propsUserData.mobile_no}</td>
                                        <td>{propsUserData.email}</td>
                                        <td>{propsUserData.address_line1}</td>
                                        <td>{propsUserData.pin_zip}</td>
                                        <td>{propsUserData.remarks}</td>


                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };
    //--- Update ---//
    const UpdateAgentDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(<AgentEdit key='AgentEditPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddAgentBackBtn} />);
            setloadElement('');
        })
    }

    const SearchAgentFunction = () => {

        var agent_cd = (getSearchComponentIds.current.returnMyIdsValue()).agent_cd;

        var agent_nm = (getSearchComponentIds.current.returnMyIdsValue()).agent_nm;

        if (agent_cd === undefined) {
            agent_cd = '';
        }

        if (agent_nm === undefined) {
            agent_nm = '';
        }

        const  ids = "Agent/Agent?agent_cd=" + agent_cd + "&agent_nm=" + agent_nm;

        const data = GetUserDataByIds(ids);
       
        data.then((Result) => {

            if (Result.returnStatus === 200) {
               
                setloadElement(<AgentTable key='AgentTableElemenft' data={Result.returnData.responseObj} UpdateAgentDataFun={UpdateAgentDataFun} ViewAgentBtnFunction={ViewAgentBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

       
    };

    const AddAgentFunction = () => {
        setPageLoadContent('');
        setloadElement(<AddAgent AddAgentBackBtn={AddAgentBackBtn} key='AddAgentElement' />);
    };

    const AddAgentBackBtn = () => {
        setPageLoadContent(<SearchAgent ref={getSearchComponentIds} key='SearchAgentPaGE' SearchAgentFunction={SearchAgentFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddAgentFunction={AddAgentFunction} />);
        setloadElement('');
    };
    //Agent


    ///   UnitAgenttypesearch //////////////////

    const ViewUnitAgentTypeBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            setloadViewElement(<ViewPopUp key='ViewPopUpUnitAgenttyp' popUpheaderName='Unit Agent Type Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Unit Type Code</th>
                            <th>Agent Type Code</th>
                            <th>Remarks</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.unitagentResponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.unit_type_cd}</td>
                                        <td>{propsUserData.agent_type_cd}</td>
                                        <td>{propsUserData.remarks}</td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateUnitAgentTypeDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< UnitAgenttypeEdit key='UnitAgenttypeEdittypeff' data={ReturnData.responseObj} UpdatePageBackBtn={AddUnitAgenttypeBackBtn} />);
            setloadElement('');
        })
    }

    const UnitAgenttypesearchFunction = () => {

        var unit_type_cd = (getSearchComponentIds.current.returnMyIdsValue()).unit_type_cd;

        var agent_type_cd = (getSearchComponentIds.current.returnMyIdsValue()).agent_type_cd;

        if (unit_type_cd === undefined) {
            unit_type_cd = '';
        }

        if (agent_type_cd === undefined) {
            agent_type_cd = '';
        }

        const ids = "UnitAgentType/UnitAgentType?unit_type_cd=" + unit_type_cd + "&agent_type_cd=" + agent_type_cd;

        const data = GetUserDataByIds(ids);
       
        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<UnitAgentTypeTable key='UnitAgentTypeTableElement' data={Result.returnData.responseObj} UpdateUnitAgentTypeDataFun={UpdateUnitAgentTypeDataFun} ViewUnitAgentTypeBtnFunction={ViewUnitAgentTypeBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });


    };

    const AddUnitAgenttypesearchFunction = () => {
        setPageLoadContent('');
        setloadElement(<UnitAgenttype AddUnitAgenttypeBackBtn={AddUnitAgenttypeBackBtn} key='UnitAgenttypeElement' />);
    };

    const AddUnitAgenttypeBackBtn = () => {
        setPageLoadContent(<UnitAgenttypesearch ref={getSearchComponentIds} key='UnitAgenttypesearchPaGE' UnitAgenttypesearchFunction={UnitAgenttypesearchFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddUnitAgenttypesearchFunction={AddUnitAgenttypesearchFunction} />);
        setloadElement('');
    };


    ////Unit Agent Type

    ////  Branch///
    const ViewBranchBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {
           
            setloadViewElement(<ViewPopUp key='ViewPopUpBranch' popUpheaderName='Branch Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Agent Code</th>
                            <th>Agent Type Code</th>
                            <th>Branch Code</th>
                            <th>Branch Name</th>
                            <th>Remarks</th>
                           
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.branchResponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.agent_cd}</td>
                                        <td>{propsUserData.agent_type_cd}</td>
                                        <td>{propsUserData.branch_cd}</td>
                                        <td>{propsUserData.branch_nm}</td>
                                        <td>{propsUserData.remarks}</td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateBranchDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< BranchEdit key='BranchEditPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddBranchBackBtn} />);
            setloadElement('');
        })
    }
    const BranchSearchFunction = () => {

        var branch_cd = (getSearchComponentIds.current.returnMyIdsValue()).branch_cd;

        var branch_nm = (getSearchComponentIds.current.returnMyIdsValue()).branch_nm;

        if (branch_cd === undefined) {
            branch_cd = '';
        }

        if (branch_nm === undefined) {
            branch_nm = '';
        }
        const  ids = "Branch/Branch?branch_cd=" + branch_cd + "&branch_nm=" + branch_nm;

        const data = GetUserDataByIds(ids);
        
        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<Branchtable key='BranchtableTableElement' data={Result.returnData.responseObj} UpdateBranchDataFun={UpdateBranchDataFun} ViewBranchBtnFunction={ViewBranchBtnFunction} />);


            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });


    };

    const AddBranchSearchFunction = () => {
        setPageLoadContent('');
        setloadElement(<Branch AddBranchBackBtn={AddBranchBackBtn} key='BranchElement' />);
    };

    const AddBranchBackBtn = () => {
        setPageLoadContent(<BranchSearch ref={getSearchComponentIds} key='BranchsearchPaGE' BranchSearchFunction={BranchSearchFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddBranchSearchFunction={AddBranchSearchFunction} />);
        setloadElement('');
    };

    ////  Branch///

    //USer///
    const ViewUSerBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            setloadViewElement(<ViewPopUp key='ViewPopUpUSer' popUpheaderName='User Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Branch Code</th>
                            <th>Agent Type Code</th>
                            <th>User Code</th>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>first Name</th>
                            <th>Middle Name</th>
                            <th>Last Name</th>
                            <th>Full Name</th>
                            <th>DOB</th>
                            <th>Manager Code</th>
                           
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.userResponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.branch_cd}</td>
                                        <td>{propsUserData.agent_type_cd}</td>
                                        <td>{propsUserData.user_cd}</td>
                                        <td>{propsUserData.user_id}</td>
                                        <td>{propsUserData.user_nm}</td>
                                        <td>{propsUserData.first_nm}</td>
                                        <td>{propsUserData.middle_nm}</td>
                                        <td>{propsUserData.last_nm}</td>
                                        <td>{propsUserData.full_nm}</td>
                                        <td>{propsUserData.dob}</td>
                                        <td>{propsUserData.manager_cd}</td>
                                        
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateUserTab9DataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< UserEdit key='UserEditPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddUserBackBtn} />);
            setloadElement('');
        })
    }

    const USerSearchFunction = () => {

        var branch_cd = (getSearchComponentIds.current.returnMyIdsValue()).branch_cd;

        var user_cd = (getSearchComponentIds.current.returnMyIdsValue()).user_cd;

        if (branch_cd === undefined) {
            branch_cd = '';
        }

        if (user_cd === undefined) {
            user_cd = '';
        }

        const  ids = "User/User?branch_cd=" + branch_cd + "&user_cd=" + user_cd;

        const data = GetUserDataByIds(ids);
       
        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<USerSearchTable key='USerSearchTableElement' data={Result.returnData.responseObj} UpdateUserTab9DataFun={UpdateUserTab9DataFun} ViewUSerBtnFunction={ViewUSerBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

       

    };

    const AddUSerearchFunction = () => {
        setPageLoadContent('');
        setloadElement(<AddUSer AddUserBackBtn={AddUserBackBtn} key='AddUserElement' />);
    };

    const AddUserBackBtn = () => {
        setPageLoadContent(<UserSeach ref={getSearchComponentIds} key='USerSearchPaGE' USerSearchFunction={USerSearchFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddUSerearchFunction={AddUSerearchFunction} />);
        setloadElement('');
    };


    //USer///

    //Franchise//
    const ViewFranchiseBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {
           
            setloadViewElement(<ViewPopUp key='ViewPopUpFranchise' popUpheaderName='Franchise Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Franchise Code</th>
                            <th>Franchise</th>
                            <th>Franchise Rank</th>
                            <th>Description </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.franchiseResponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.franchise_cd}</td>
                                        <td>{propsUserData.franchise}</td>
                                        <td>{propsUserData.franchise_rank}</td>
                                        <td>{propsUserData.description}</td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateFranchiseDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< FranchiseEdit key='FFranchiseEditPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddFranchiseBackBtn} />);
            setloadElement('');
        })
    }

    const FranchiseSearchFunction = () => {

        var franchise_cd = (getSearchComponentIds.current.returnMyIdsValue()).franchise_cd;

        var franchise = (getSearchComponentIds.current.returnMyIdsValue()).franchise;

        if (franchise_cd === undefined) {
            franchise_cd = '';
        }

        if (franchise === undefined) {
            franchise = '';
        }

        const ids = "Franchise/Franchise?franchise_cd=" + franchise_cd + "&franchise=" + franchise;

        const data = GetUserDataByIds(ids);
       
        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<FranchiseTable key='FranchiseTableElement' data={Result.returnData.responseObj} UpdateFranchiseDataFun={UpdateFranchiseDataFun} ViewFranchiseBtnFunction={ViewFranchiseBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

       

    };

    const AddFranchiseFunction = () => {
        setPageLoadContent('');
        setloadElement(<Franchise AddFranchiseBackBtn={AddFranchiseBackBtn} key='AddFranchiseElement' />);
    };

    const AddFranchiseBackBtn = () => {
        setPageLoadContent(<FranchiseSearch ref={getSearchComponentIds} key='FranchiseSearchPaGE' FranchiseSearchFunction={FranchiseSearchFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddFranchiseFunction={AddFranchiseFunction} />);
        setloadElement('');
    };

    //Franchise///

    //CDALinkage//
    const ViewCDALinkageBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            setloadViewElement(<ViewPopUp key='ViewPopUpCDALinkage' popUpheaderName='CDALinkage Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Branch Code</th>
                            <th>Franchise Code</th>
                            <th>Adviser Code</th>
                            <th>Effective From</th>
                            <th>Effective Upto</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.cDALinkageresponse.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.branch_cd}</td>
                                        <td>{propsUserData.franchise_cd}</td>
                                        <td>{propsUserData.adviser_cd}</td>
                                        <td>{propsUserData.effective_from}</td>
                                        <td>{propsUserData.effective_upto}</td>
                                        <td>{propsUserData.description}</td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateCDALinkageDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< EditCDALinkage key='EditCDALinkageePageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddCDALinkageBackBtn} />);
            setloadElement('');
        })
    }

    const SearchCDALinkageFunction = () => {

        var branch_cd = (getSearchComponentIds.current.returnMyIdsValue()).branch_cd;

        var franchise_cd = (getSearchComponentIds.current.returnMyIdsValue()).franchise_cd;


        if (branch_cd === undefined) {
            branch_cd = '';
        }

        if (franchise_cd === undefined) {
            franchise_cd = '';
        }

        const ids = "CDALinkage/CDALinkage?branch_cd=" + branch_cd + "&franchise_cd=" + franchise_cd;

        const data = GetUserDataByIds(ids);
       
        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<CDALinkageTable key='CDALinkageTableElement' data={Result.returnData.responseObj} UpdateCDALinkageDataFun={UpdateCDALinkageDataFun} ViewCDALinkageBtnFunction={ViewCDALinkageBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

       

    };

    const AddCDALinkageFunction = () => {
        setPageLoadContent('');
        setloadElement(<AddCDALinkage AddCDALinkageBackBtn={AddCDALinkageBackBtn} key='AddCDALinkageElement' />);
    };

    const AddCDALinkageBackBtn = () => {
        setPageLoadContent(<SearchCDALinkage ref={getSearchComponentIds} key='SearchCDALinkagePaGE' SearchCDALinkageFunction={SearchCDALinkageFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddCDALinkageFunction={AddCDALinkageFunction} />);
        setloadElement('');
    };

    //CDALinkage//

    //CDA Incentive//

    const ViewCDAIncentiveBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            setloadViewElement(<ViewPopUp key='ViewPopUpCDAIncentive' popUpheaderName='CDAIncentive Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Franchise Code</th>
                            <th>Incentive Type</th>
                            <th>Incentive</th>
                            <th>Effective From</th>
                            <th>Effective Upto</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.cDAIncentiveresponse.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.franchise_cd}</td>
                                        <td>{propsUserData.incentive_type}</td>
                                        <td>{propsUserData.incentive}</td>
                                        <td>{propsUserData.effective_from}</td>
                                        <td>{propsUserData.effective_upto}</td>
                                        <td>{propsUserData.description}</td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateCDAIncentiveDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< CDAIncentiveEdit key='CDAIncentiveEditPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddCDAIncentiveBackBtn} />);
            setloadElement('');
        })
    }

    const SearchCDAIncentiveFunction = () => {

        var franchise_cd = (getSearchComponentIds.current.returnMyIdsValue()).franchise_cd;

        var incentive_type = (getSearchComponentIds.current.returnMyIdsValue()).incentive_type;

        if (franchise_cd === undefined) {
            franchise_cd = '';
        }

        if (incentive_type === undefined) {
            incentive_type = '';
        }

        const ids = "CDAIncentive/CDAIncentive?franchise_cd=" + franchise_cd + "&incentive_type=" + incentive_type;

        const data = GetUserDataByIds(ids);
      
        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<CDAIncentiveTable key='CDAIncentiveTableElement' data={Result.returnData.responseObj} UpdateCDAIncentiveDataFun={UpdateCDAIncentiveDataFun} ViewCDAIncentiveBtnFunction={ViewCDAIncentiveBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

       

    };

    const AddCDAIncentiveFunction = () => {
        setPageLoadContent('');
        setloadElement(<CDAIncentive AddCDAIncentiveBackBtn={AddCDAIncentiveBackBtn} key='CDAIncentiveElement' />);
    };

    const AddCDAIncentiveBackBtn = () => {
        setPageLoadContent(<CDAIncentiveSearch ref={getSearchComponentIds} key='CDAIncentiveSearchPaGE' SearchCDAIncentiveFunction={SearchCDAIncentiveFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddCDAIncentiveFunction={AddCDAIncentiveFunction} />);
        setloadElement('');
    };
    //CDA Incentive//

    //Program//
    const ViewProgramBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            setloadViewElement(<ViewPopUp key='ViewPopUpProgram' popUpheaderName='Program Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Program Code </th>
                            <th>Program </th>
                            <th>Remarks</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.programresponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.program}</td>
                                        <td>{propsUserData.program_cd}</td>
                                        <td>{propsUserData.remarks}</td>

                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateProgramDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(<EditProgram key='EditProgramPageKeytr' data={ReturnData.responseObj} UpdatePageBackBtn={AddProgramBackBtn} />);
            setloadElement('');
        })
    }

    const SearchProgramFunction = () => {

        var program_cd = (getSearchComponentIds.current.returnMyIdsValue()).program_cd;

        var program = (getSearchComponentIds.current.returnMyIdsValue()).program;

        if (program_cd === undefined) {
            program_cd = '';
        }


        if (program === undefined) {
            program = '';
        }

        const ids = "Program/Program?program_cd=" + program_cd + "&program=" + program;


        const data = GetUserDataByIds(ids);

        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<SearchTableProgram key='SearchTableProgramElement' data={Result.returnData.responseObj} UpdateProgramDataFun={UpdateProgramDataFun} ViewProgramBtnFunction={ViewProgramBtnFunction}/>);
            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

       

    };

    const AddProgramFunction = () => {
        setPageLoadContent('');
        setloadElement(<AddProgram AddProgramBackBtn={AddProgramBackBtn} key='AddProgramElement' />);
    };

    const AddProgramBackBtn = () => {
        setPageLoadContent(<SearchProgram ref={getSearchComponentIds} key='SearchProgramPaGE' SearchProgramFunction={SearchProgramFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddProgramFunction={AddProgramFunction} />);
        setloadElement('');
    };

//Program//
    //subprogram//

    const ViewSubProgramBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            setloadViewElement(<ViewPopUp key='ViewPopUpsubprogram' popUpheaderName='subprogram Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Program Id</th>
                            <th>Subprogram Code</th>
                            <th>Subprogram</th>
                            <th>Remarks</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.subprogramresponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>

                                        <td>{propsUserData.program_id}</td>
                                        <td>{propsUserData.subprogram_cd}</td>
                                        <td>{propsUserData.subprogram}</td>
                                        <td>{propsUserData.remarks}</td>

                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateSubProgramDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(<EditSubProgram key='EditSubProgramPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddSubProgramBackBtn} />);
            setloadElement('');
        })
    }

    const SearchSubProgramFunction = () => {

        var program_id = (getSearchComponentIds.current.returnMyIdsValue()).program_id;

        var subprogram_cd = (getSearchComponentIds.current.returnMyIdsValue()).subprogram_cd;


        if (program_id === undefined) {
            program_id = '';
        }


        if (subprogram_cd === undefined) {
            subprogram_cd = '';
        }


        const ids = "SubProgram/SubProgram?subprogram_cd=" + subprogram_cd + "&program_id=" + program_id;

        const data = GetUserDataByIds(ids);

        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<SearchTableSubProgram key='SearchTablesubprogramElement' data={Result.returnData.responseObj} UpdateSubProgramDataFun={UpdateSubProgramDataFun} ViewSubProgramBtnFunction={ViewSubProgramBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

       
    };

    const AddSubProgramFunction = () => {
        setPageLoadContent('');
        setloadElement(<AddSubProgram AddSubProgramBackBtn={AddSubProgramBackBtn} key='AddsubprogramElement' />);
    };

    const AddSubProgramBackBtn = () => {
        setPageLoadContent(<SearchSubProgram ref={getSearchComponentIds} key='SearchSubProgramPaGE' SearchSubProgramFunction={SearchSubProgramFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddSubProgramFunction={AddSubProgramFunction} />);
        setloadElement('');
    };

//////subprogram///////////////////////////
    //-----------Program Category------------//

    const ViewprogramcategoryBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            setloadViewElement(<ViewPopUp key='ViewPopUpCampaign' popUpheaderName='Campaign Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Program ID</th>
                            <th>SubProgram Id</th>
                            <th>Category Code</th>
                            <th>Category</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.programCategoryResponses.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>

                                        <td>{propsUserData.program_id}</td>
                                        <td>{propsUserData.subprogram_id}</td>
                                        <td>{propsUserData.category_cd}</td>
                                        <td>{propsUserData.category}</td>
                                        <td>{propsUserData.remarks}</td>

                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateProgramCategoryDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(<EditProgramCategory key='EditProgramCategoryPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddProgramCategoryBackBtn} />);
            setloadElement('');
        })
    }

    const SearchProgramCategoryFunction = () => {

        var program_id = (getSearchComponentIds.current.returnMyIdsValue()).program_id;

        var category_cd = (getSearchComponentIds.current.returnMyIdsValue()).category_cd;


        if (program_id === undefined) {
            program_id = '';
        }


        if (category_cd === undefined) {
            category_cd = '';
        }

        const ids = "ProgramCategory/ProgramCategory?category_cd=" + category_cd + "&program_id=" + program_id;

        const data = GetUserDataByIds(ids);

        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<SearchTableProgramCategory key='SearchTableProgramCategoryElement' data={Result.returnData.responseObj} UpdateProgramCategoryDataFun={UpdateProgramCategoryDataFun} ViewprogramcategoryBtnFunction={ViewprogramcategoryBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });


    };

    const AddProgramCategoryFunction = () => {
        setPageLoadContent('');
        setloadElement(<AddProgramCategory AddProgramCategoryBackBtn={AddProgramCategoryBackBtn} key='AddProgramCategoryElement' />);
    };

    const AddProgramCategoryBackBtn = () => {
        setPageLoadContent(<SearchProgramCategory ref={getSearchComponentIds} key='SearchProgramCategoryPaGE' SearchProgramCategoryFunction={SearchProgramCategoryFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddProgramCategoryFunction={AddProgramCategoryFunction} />);
        setloadElement('');
    };

    //-----------Program Category------------//

    //-----------Campaign------------//

    const ViewCampaignBtnFunction = (userId) => {

        const reponseData = GetUserDataById(userId);

        reponseData.then((ReturnData) => {

            setloadViewElement(<ViewPopUp key='ViewPopUpCampaign' popUpheaderName='Campaign Details' ViewPopUpCloseBtnFunction={ViewPopUpCloseBtnFunction} >

                <table className="viewPopUpTable">
                    <thead >
                        <tr>
                            <th>Program ID</th>
                            <th>SubProgram Id</th>
                            <th>Category</th>
                            <th>Target Type</th>
                            <th>Targent Unit</th>
                            <th>Target Value</th>
                            <th>Effective From</th>
                            <th>Effective Upto</th>
                            <th>Remark</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ReturnData.responseObj.campaignresponse.map(
                                propsUserData => (

                                    <tr key={propsUserData.id}>
                                        <td>{propsUserData.program_id}</td>
                                        <td>{propsUserData.subprogram_id}</td>
                                        <td>{propsUserData.category_id}</td>
                                        <td>{propsUserData.target_type}</td>
                                        <td>{propsUserData.target_unit}</td>
                                        <td>{propsUserData.target_value}</td>
                                        <td>{propsUserData.effective_from}</td>
                                        <td>{propsUserData.effective_upto}</td>
                                        <td>{propsUserData.remarks}</td>
                                    </tr>
                                )
                            )
                        }


                    </tbody>
                </table>


            </ViewPopUp>);
        })

    };

    const UpdateCampaignDataFun = (userId) => {

        const reponseData = GetUserDataById(userId);
        reponseData.then((ReturnData) => {

            setPageLoadContent(< EditCampaign key='EditCampaignPageKey' data={ReturnData.responseObj} UpdatePageBackBtn={AddCampaignBackBtn} />);
            setloadElement('');
        })
    }

    const SearchCampaignFunction = () => {

        var subprogram_id = (getSearchComponentIds.current.returnMyIdsValue()).subprogram_id;

        var program_id = (getSearchComponentIds.current.returnMyIdsValue()).program_id;

        if (subprogram_id === undefined) {
            subprogram_id = '';
        }


        if (program_id === undefined) {
            program_id = '';
        }


        const ids = "Campaign/Campaign?program_id=" + program_id + "&subprogram_id=" + subprogram_id;

        const data = GetUserDataByIds(ids);

        data.then((Result) => {

            if (Result.returnStatus === 200) {

                setloadElement(<SearchTableCampaign key='SearchTableCampaignElement' data={Result.returnData.responseObj} UpdateCampaignDataFun={UpdateCampaignDataFun} ViewCampaignBtnFunction={ViewCampaignBtnFunction} />);

            }

            else {
                toast.error("Invalid Data", { position: toast.POSITION.TOP_CENTER });
            }
        });

        //GetUserDataByIds(ids).then((Result) => {

        //    const Lstatus = localStorage.getItem("getResponseStatus");


        //    if (Lstatus === '200') {

        //        console.log('done');
        //        setloadElement(<SearchTableCampaign key='SearchTableCampaignElement' data={Result.returnData.responseObj} UpdateCampaignDataFun={UpdateCampaignDataFun} ViewCampaignBtnFunction={ViewCampaignBtnFunction} />);

        //    }
        //    else {
        //        alert('invalid Entry')
        //        localStorage.removeItem("getResponseStatus");
        //    }


        //})

    };

    const AddCampaignFunction = () => {
        setPageLoadContent('');
        setloadElement(<AddCampaign AddCampaignBackBtn={AddCampaignBackBtn} key='AddCampaignElement' />);
    };

    const AddCampaignBackBtn = () => {
        setPageLoadContent(<SearchCampaign ref={getSearchComponentIds} key='SearchCampaignPaGE' SearchCampaignFunction={SearchCampaignFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddCampaignFunction={AddCampaignFunction} />);
        setloadElement('');
    };

    //-----------Campaign------------//




////////////New Update///////////////
    const Tab1 = () => {
        setPageLoadContent(<VwCompany ref={getSearchComponentIds} key='VwCompanyPaGE' SeachChannelTypeFunction={SeachChannelTypeFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddChannelTypeFunction={AddChannelTypeFunction} />);
        setloadElement('');

    };
    const Tab2 = () => {
        setPageLoadContent(<Unit_TypeSearch ref={getSearchComponentIds} key='Unit_TypeSearchPaGE' SearchUnitTypeFunction={SearchUnitTypeFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddUnitTypeFunction={AddUnitTypeFunction} />);
        setloadElement('');
    };
    const Tab3 = () => {
        setPageLoadContent(<Agent_TypeSearch ref={getSearchComponentIds} key='Agent_TypeSearchPaGE' SearchAgentTypeFunction={SearchAgentTypeFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddAgentTypeFunction={AddAgentTypeFunction} />);
        setloadElement('');
    };
    const Tab4 = () => {
        setPageLoadContent(<SearchClient ref={getSearchComponentIds} key='SearchClientPaGE' SearchClientFunction={SearchClientFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddClientFunction={AddClientFunction} />);
        setloadElement('');
    };
    const Tab5 = () => {
        setPageLoadContent(<ClientBankSearch ref={getSearchComponentIds} key='ClientBankSearchPaGE' SearchClientBankFunction={SearchClientBankFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddClientBankFunction={AddClientBankFunction} />);
        setloadElement('');
    };
    const Tab6 = () => {
        setPageLoadContent(<SearchAgent ref={getSearchComponentIds} key='SearchAgentPaGE' SearchAgentFunction={SearchAgentFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddAgentFunction={AddAgentFunction} />)
        setloadElement('');
    };   
    const Tab7 = () => {
        setPageLoadContent(<UnitAgenttypesearch ref={getSearchComponentIds} key='UnitAgenttypesearchPaGE' UnitAgenttypesearchFunction={UnitAgenttypesearchFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddUnitAgenttypesearchFunction={AddUnitAgenttypesearchFunction} />);
        setloadElement('');
    };
    const Tab8 = () => {
        setPageLoadContent(<BranchSearch ref={getSearchComponentIds} key='BranchSearchPaGE' BranchSearchFunction={BranchSearchFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddBranchSearchFunction={AddBranchSearchFunction} />);
        setloadElement('');
    };
    const Tab9 = () => {
        setPageLoadContent(<USerSearch ref={getSearchComponentIds} key='UserSeachPaGE' USerSearchFunction={USerSearchFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddUSerearchFunction={AddUSerearchFunction} />);
        setloadElement('');
    };
    const Tab10 = () => {
        setPageLoadContent(<FranchiseSearch ref={getSearchComponentIds} key='FranchiseSearchPaGE' FranchiseSearchFunction={FranchiseSearchFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddFranchiseFunction={AddFranchiseFunction} />);
        setloadElement('');
    };
    const Tab11 = () => {
        setPageLoadContent(<SearchCDALinkage ref={getSearchComponentIds} key='SearchCDALinkagePaGE' SearchCDALinkageFunction={SearchCDALinkageFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddCDALinkageFunction={AddCDALinkageFunction} />);
        setloadElement('');
    };
    const Tab12 = () => {
        setPageLoadContent(<CDAIncentiveSearch ref={getSearchComponentIds} key='CDAIncentiveSearchPaGE' SearchCDAIncentiveFunction={SearchCDAIncentiveFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddCDAIncentiveFunction={AddCDAIncentiveFunction} />);
        setloadElement('');
    };
    const Tab13 = () => {
        setPageLoadContent(<SearchProgram ref={getSearchComponentIds} key='SearchProgramPaGE' SearchProgramFunction={SearchProgramFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddProgramFunction={AddProgramFunction} />);
        setloadElement('');
    };
    const Tab14 = () => {
        setPageLoadContent(<SearchSubProgram ref={getSearchComponentIds} key='SearchSubProgramPaGE' SearchSubProgramFunction={SearchSubProgramFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddSubProgramFunction={AddSubProgramFunction} />);
        setloadElement('');

    };
    const Tab15 = () => {
        setPageLoadContent(<SearchCampaign ref={getSearchComponentIds} key='SearchCampaignPaGE' SearchCampaignFunction={SearchCampaignFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddCampaignFunction={AddCampaignFunction} />);
        setloadElement('');
    };
    const Tab16 = () => {
        setPageLoadContent(<SearchProgramCategory ref={getSearchComponentIds} key='SearchProgramCategoryPaGE' SearchProgramCategoryFunction={SearchProgramCategoryFunction} BackChannelTypeFunction={BackChannelTypeFunction} AddProgramCategoryFunction={AddProgramCategoryFunction} />);
        setloadElement('');
    };

    const NavItems = [{
        KeyId: 'Channel_Type',
        NavItemsLinkName: 'Channel_Type',
        FunctionName: Tab1

    },
    {
        KeyId: 'Unit_Type',
        NavItemsLinkName: 'Unit_Type',
        FunctionName: Tab2

    },
    {
        KeyId: 'Agent_Type',
        NavItemsLinkName: 'Agent_Type',
        FunctionName: Tab3

    },
    {
        KeyId: 'Client',
        NavItemsLinkName: 'Client',
        FunctionName: Tab4

    },
    {
        KeyId: 'ClientBanks',
        NavItemsLinkName: 'ClientBanks',
        FunctionName: Tab5

    },
    {
        KeyId: 'Agent',
        NavItemsLinkName: 'Agent',
        FunctionName: Tab6

    },
    {
        KeyId: 'Unit_Agent_Type',
        NavItemsLinkName: 'Unit_Agent_Type',
        FunctionName: Tab7

    },
    {
        KeyId: 'Branch',
        NavItemsLinkName: 'Branch',
        FunctionName: Tab8

    },
    {
        KeyId: 'USer',
        NavItemsLinkName: 'User',
        FunctionName: Tab9

    },
    {
        KeyId: 'Franchise',
        NavItemsLinkName: 'Franchise',
        FunctionName: Tab10

    },
    {
        KeyId: 'CDA_Linkage',
        NavItemsLinkName: 'CDA_Linkage',
        FunctionName: Tab11

    },
    {
        KeyId: 'CDA_Incentive',
        NavItemsLinkName: 'CDA_Incentive',
        FunctionName: Tab12

        },       
        {
            KeyId: 'Program',
            NavItemsLinkName: 'Program',
            FunctionName: Tab13

        },
        {
            KeyId: 'SubProgram',
            NavItemsLinkName: 'SubProgram',
            FunctionName: Tab14

        },
        {
            KeyId: 'Campaign',
            NavItemsLinkName: 'Campaign',
            FunctionName: Tab15

        },
        {
            KeyId: 'ProgramCategory',
            NavItemsLinkName: 'ProgramCategory',
            FunctionName: Tab16

        }



    ];

    return (
        <>
            <ToastContainer autoClose={4000} theme='colored' />
            <NavBar></NavBar>
            <NavBarMid NavBarName='Master' NavItems={NavItems} />
            <div className='innerBodyMinHeight'>

                <div> {pageLoadContent}</div>
                <div>{loadElement}</div>
                <div>{loadViewElement}</div>
            </div>

            <Footer></Footer>
        </>
    );
}

export default Master;


