import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContainer from "./Components/MainContainer/MainContainer";
import AboutUs from "./Components/AboutUs/AboutUs";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import SoftwareDevelopment from "./Components/SystemIntegration/SystemIntegration";
import ITServices from "./Components/ITServices/ITServices";
import FacilityManagementServices from "./Components/FacilityManagementServices/FacilityManagementServices";
import EmergingTechnologies from "./Components/EmergingTechnologies/EmergingTechnologies";
import DigitalTransformation from "./Components/DigitalTransformation/DigitalTransformation";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services/system-integration" element={<SoftwareDevelopment />} />
        <Route path="/services/it-services" element={<ITServices />} />
        <Route
          path="/services/facility-management-services"
          element={<FacilityManagementServices />}
        />
        <Route
          path="/services/emerging-technologies-services"
          element={<EmergingTechnologies />}
        />
        <Route
          path="/services/digital-transformation-services"
          element={<DigitalTransformation />}
        />
      </Routes>
    </>
  );
};

export default App;
