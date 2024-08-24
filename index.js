import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css";
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import AuthContextProvider from "./component/AuthContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-0p0oxddb4h1wqe83.us.auth0.com"
    clientId="ePxglQ9VkKVsARNLHRdszpjF38NUSrlT"
    redirectUri={window.location.origin}
  >
    <AuthContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </Auth0Provider>
);
