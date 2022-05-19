import React from "react";
import NavBar from "../Pages/Navbars/NavBar";
import QoutNav from "../Pages/Navbars/QuotNav";
import Footer from '../Pages/Footer';
import Welcometxt1 from "../Pages/Middle Text/Welcometxt1";
// import TransformText from "../Pages/TransformText";


function Quotation(){
    return(
        <>
            <NavBar></NavBar>
            <QoutNav></QoutNav>
            <Welcometxt1></Welcometxt1>
            <Footer></Footer>
        </>
    );
}

export default Quotation;