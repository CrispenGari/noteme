import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AppParamList, AppNavProps } from "../paramlists";
import { Home, Editor } from "../screens";
import * as Network from "expo-network";
const Stack = createStackNavigator<AppParamList>();

const AppStack = () => {
  const [ipAddress, setIpAddress] = React.useState<string>("");

  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      (async () => {
        const ipAddress = await Network.getIpAddressAsync();
        setIpAddress(ipAddress);
      })();
    }
    return () => {
      mounted = false;
    };
  }, []);

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
      <Stack.Screen
        name="Home"
        component={Home}
        initialParams={{
          ipAddress,
        }}
      />
      <Stack.Screen
        name="Editor"
        component={Editor}
        initialParams={{
          ipAddress,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
