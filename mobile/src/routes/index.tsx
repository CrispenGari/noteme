import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppParamList, AppNavProps } from "../paramlists";
import { Home, Editor } from "../screens";
const Stack = createStackNavigator<AppParamList>();

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          elevation: 0,
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          color: "#333",
          textTransform: "lowercase",
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Editor" component={Editor} />
    </Stack.Navigator>
  );
};

export default AppStack;
