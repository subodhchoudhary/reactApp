import React from "react";
import NavBar from "../Pages/Navbars/NavBar";
import DMSNav from "../Pages/Navbars/DMSNav";
import Welcometxt6 from "../Pages/Middle Text/Welcometxt6";
import Footer from "../Pages/Footer";

function DMS(){
    return(
        <>
            <NavBar></NavBar>
            <DMSNav></DMSNav>
            <Welcometxt6></Welcometxt6>
            <Footer></Footer>
            </>
    );
}

export default DMS;