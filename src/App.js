import React from 'react';

import Routes from "./Routes";
import CustomNavBar from "./components/CustomNavBar";
import DropDownMenu from "./components/DropDownMenu";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <div className="flex-grow-0">
          <div>
            <Layout />
            <DropDownMenu />
          </div>
        </div>
        <div className="flex-grow-1">
          <Routes />
        </div>
        <div className="flex-grow-0">
          <CustomNavBar />
        </div>
      </div>
    </>
  );
}

export default App;
