import React from "react";
import NavBar from "../Pages/Navbars/NavBar";
import MasterNav from "../Pages/Navbars/MasterNav";
import BrokerProductMatrix from "../Pages/BrokerProductMatrix";
import Footer from "../Pages/Footer";
// import "../../public/Common";

function BrokerProducts() {
    return(
        <>
            <NavBar></NavBar>
            <MasterNav></MasterNav>
            <BrokerProductMatrix></BrokerProductMatrix>
            <Footer></Footer>
        </>
    );
}

export default BrokerProducts;