import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";

import Home from "../pages/home";
import New from '../pages/New';
import Profile from "../pages/Profile";

import CustomDrawer from "../components/CustomDrawer";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            drawerContent={ (props) => <CustomDrawer {...props} /> }
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#fff',
                    paddingTop: 20,
                    width: Dimensions.get('window').width * 0.65, // 60% da largura
                },

                drawerItemStyle: {
                    borderRadius: 12,
                    marginBottom: 8, 
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

            <AppDrawer.Screen 
                name="Registrar"
                component={New}
            />

            <AppDrawer.Screen 
                name="Perfil"
                component={Profile}
            />

        </AppDrawer.Navigator>
    )
}

export default AppRoutes;