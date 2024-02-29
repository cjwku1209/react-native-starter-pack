import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IndexPage } from "./index-page/index-page";

const Stack = createNativeStackNavigator();

function Navigator (){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" component={IndexPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export const NavigationStack = Navigator;