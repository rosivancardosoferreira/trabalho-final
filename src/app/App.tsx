import React from "react";

//ROUTES
import Routes from "../infra/routes";

//THEMES
import { ThemeProvider } from "styled-components/native";
import {themes} from "./../styles/themes";
import { StatusBar } from "react-native";

export default function App(){
    return (
        <ThemeProvider theme={themes}>
            <StatusBar backgroundColor={"#717FFF"} />
            <Routes/>
        </ThemeProvider>
    ) 
}