import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Pages/Common";
import Login from "./Masterpage/Login";
import { ErrorPage404 } from "./ErrorPage/ErrorPage";
import NavBar from "./Pages/Navbars/NavBar";
import Dashboard1 from "./Pages/Dashboard1";
import Welcometxt from "./Pages/Middle Text/Welcometxt";
import BrokerProductMatrix from "./Pages/BrokerProductMatrix";
import Footer from "./Pages/Footer";
import Master  from "./Masterpage/Master";
import Homepage from "./Masterpage/Homepage";
import Brokerproduct from "./Masterpage/Brokerproduct";
import Quotation from "./Masterpage/Quotation";
import Policy from "./Masterpage/Policy";
import Claim from "./Masterpage/Claim";
import Finance from "./Masterpage/Finance";
import Report from "./Masterpage/Report";
import DMS from "./Masterpage/DMS";
import QRC from "./Masterpage/QRC";
import Tree from "./Masterpage/Tree";
import Dashboard from "./Masterpage/Dashboard";

// POPup's
import Validation from "./Pages/ModalsPopup/Validation";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
                  <Route exact path="/NavBar" element={<NavBar />} />
                  <Route exact path="/ErrorPage404" element={<ErrorPage404 />} />
          <Route
            exact
            path="/BrokerProductMatrix"
            element={<BrokerProductMatrix />}
          />
          <Route exact path="/Footer" element={<Footer />} />
          <Route exact path="/Dashboard1" element={<Dashboard1 />} />
          <Route exact path="/Welcometxt" element={<Welcometxt />} />
          <Route exact path="/Homepage" element={<Homepage />} />
          <Route exact path="/Master" element={<Master />} />
          <Route exact path="/Brokerproduct" element={<Brokerproduct />} />
          <Route exact path="/Quotation" element={<Quotation />} />
          <Route exact path="/Policy" element={<Policy />} />
          <Route exact path="/Claim" element={<Claim />} />
          <Route exact path="/Finance" element={<Finance />} />
          <Route exact path="/Report" element={<Report />} />
          <Route exact path="/DMS" element={<DMS />} />
          <Route exact path="/QRC" element={<QRC />} />
          <Route exact path="/Tree" element={<Tree />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />

          {/* POPup's */}
          <Route exact path="/Validation" element={<Validation />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
