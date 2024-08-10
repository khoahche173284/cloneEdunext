import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./components/GlobalState/Provider";
import GroupProvider from "./components/GlobalState/StateGroupLearn/GroupProvider";
// import './components/GlobalStyles/Font.css';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider>
        <GroupProvider>
          <App />
        </GroupProvider>
      </Provider>
    </GlobalStyles>
  </React.StrictMode>
);
