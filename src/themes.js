import { pink } from "@mui/material/colors";
import {createGlobalStyle} from "styled-components";


export const lightTheme={
    body:"white",
    fontColor:"white",

};

export const darkTheme={
    body:"black",
    fontColor:"black",
    
};

export const GlobalStyles=createGlobalStyle`

body{
    background-color:${props=>props.theme.body};
}

`