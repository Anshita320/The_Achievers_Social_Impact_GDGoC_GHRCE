import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "./index.css";
import App from "./App.jsx";
import CreateTrip from "./create-trip";
import Header from "./components/custom/Header";
import Viewtrip from "./view-trip/[tripId]";
import Footer from "./view-trip/components/Footer";
import MyTrips from "./my-trips";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider
        clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}
      >
        <Header />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create-trip" element={<CreateTrip />} />
          <Route path="/view-trip/:tripId" element={<Viewtrip />} />
          <Route path="/my-trips" element={<MyTrips />} />
        </Routes>

        <Footer />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
