import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./components/AppRouters";
import NavBar from "./components/NavBar";

const App=() => {
  return (
      <BrowserRouter>
            <NavBar/>
            <AppRouters/>
      </BrowserRouter>
  )
}

export default App;
