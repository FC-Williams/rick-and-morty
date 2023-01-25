import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import ToggleColorMode from "./components/molecules/ToggleColorMode";

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<ToggleColorMode/>} />
          <Route path="*" element={<></>} />
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Routes;
  