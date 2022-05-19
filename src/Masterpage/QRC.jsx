import React from "react";
import NavBar from "../Pages/Navbars/NavBar";
import QRCNav from "../Pages/Navbars/QRCNav";
import Welcometxt7 from "../Pages/Middle Text/Welcometxt7";
import Footer from "../Pages/Footer";

function QRC(){
    return(
        <>
            <NavBar></NavBar>
            <QRCNav></QRCNav>
            <Welcometxt7></Welcometxt7>
            <Footer></Footer>
        </>
    );
}

export default QRC;