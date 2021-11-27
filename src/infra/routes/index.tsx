import React from "react";
//NAVIGATION
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//SCREENS
//REGISTER

import Login from "../../presentation/screens/public/Login";
import Register from "../../presentation/screens/public/Register";
import MessageCode from "../../presentation/screens/public/MessageCode";
import ValideCode from "../../presentation/screens/public/ValideCode";
import SucessActive from "../../presentation/screens/public/SucessActive";
import InactiveAccount from "../../presentation/screens/public/InactiveAccount";
import Onboarding from "../../presentation/screens/public/Onboarding";
import Home from "../../presentation/screens/authenticated/Home";
import RegisterItem from "../../presentation/screens/authenticated/RegisterItem";

export default function Routes() {
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerStyle: { backgroundColor: 'red' } }}
                initialRouteName="Onboarding"
            >

            <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Register"
                component={Register}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="MessageCode"
                component={MessageCode}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="ValideCode"
                component={ValideCode}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="SucessActive"
                component={SucessActive}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="InactiveAccount"
                component={InactiveAccount}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="Onboarding"
                component={Onboarding}
            />

            {/* >>>>>>>>>>>>>>>>>>>>>>auth routes */}

            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home}
            />

            <Stack.Screen
                options={{ headerShown: false }}
                name="RegisterItem"
                component={RegisterItem}
            />


            </Stack.Navigator>
        </NavigationContainer>
    )
}