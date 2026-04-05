import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainContainer from "./Components/MainContainer/MainContainer";
import AboutUs from "./Components/AboutUs/AboutUs";
import { Routes, Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import ITServices from "./Components/ITServices/ITServices";
import FacilityManagementServices from "./Components/FacilityManagementServices/FacilityManagementServices";
import ItStaffingAugmentation from "./Components/ItStaffingAugmentation/ItStaffingAugmentation";
import DigitalMarketing from "./Components/DigitalMarketing/DigitalMarketing";
import IOT from "./Components/IOT/IOT";
import BusinessIntelligenceSolutions from "./Components/BusinessIntelligenceSolutions/BusinessIntelligenceSolutions";
import SystemIntegration from "./Components/SystemIntegration/SystemIntegration";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import GovernmentSectorEngagement from "./Components/GovernmentSectorEngagement/GovernmentSectorEngagement";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route
          path="/services/system-integration"
          element={<SystemIntegration />}
        />
        <Route path="/services/it-services" element={<ITServices />} />
        <Route
          path="/services/facility-management-services"
          element={<FacilityManagementServices />}
        />
        <Route
          path="/services/it-staffing-Augmentation-services"
          element={<ItStaffingAugmentation />}
        />
        <Route
          path="/services/digital-marketing-services"
          element={<DigitalMarketing />}
        />
        <Route path="/services/iot-services" element={<IOT />} />
        <Route
          path="/services/business-intelligence-solutions-services"
          element={<BusinessIntelligenceSolutions />}
        />
        <Route
          path="/services/government-sector-engagement-services"
          element={<GovernmentSectorEngagement />}
        />
      </Routes>
    </>
  );
};

export default App;
