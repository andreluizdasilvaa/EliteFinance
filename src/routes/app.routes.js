import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/home";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#fff',
                    paddingTop: 20,
                },
                
                drawerActiveBackgroundColor: '#3b3dbf',
                drawerActiveTintColor: '#fff',

                drawerInactiveBackgroundColor: '#F0F2FF',
                drawerInactiveTintColor: '#121212'
            }}
        >
            <AppDrawer.Screen 
                name="Home"
                component={Home}
            />
        </AppDrawer.Navigator>
    )
}

export default AppRoutes;