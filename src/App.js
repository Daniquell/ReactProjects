import { StyledEngineProvider } from "@mui/styled-engine-sc";
import React,{useState,useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouters from "./components/AppRouters";
import NavBar from "./components/NavBar";
import AuthContext from "./context"
import styled,{ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from "./themes.js";
import "./index.css"

const StyledApp=styled.div`
color:${(props)=>props.theme.fontColor};
text:${(props)=>props.theme.text};
`;

const App=() => {

  const[theme,setTheme]=useState("dark");

  const themeToggler=()=>{
    theme==="Light" ? setTheme("dark"):setTheme("light");
  };

  
  
  const[isAuth,setIsAuth] =useState(false);
  useEffect(() => {
    if(localStorage.getItem('auth')){
      setIsAuth(true)
    }
    
  }, [])
  
  return (
    <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <StyledApp>
      <a onClick={()=>themeToggler()}class="waves-effect waves-light btn"><i class="material-icons left">cloud</i>Change Theme</a>
      </StyledApp>
    

    <AuthContext.Provider
    value={{
      isAuth,
      setIsAuth
    }}>
      <StyledEngineProvider injectFirst>
    
      <BrowserRouter>
            <NavBar/>
            <AppRouters/>
      </BrowserRouter>
      </StyledEngineProvider>
      </AuthContext.Provider>
      
      
      </ThemeProvider>
  );
}

export default App;
