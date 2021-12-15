import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { LogBox, View, Text, StatusBar } from "react-native";
import Routes from "./src/routes";
import { NavigationContainer } from "@react-navigation/native";
import GraphQLApolloProvider from "./providers/GraphQLApolloProvider";
import Center from "./src/components/center/Center";

const App = () => {
  const [loaded] = useFonts({
    NunitoItalic: require("./assets/fonts/Nunito-Italic.ttf"),
    NunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    NunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
    NunitoBoldItalic: require("./assets/fonts/Nunito-BoldItalic.ttf"),
    NunitoExtraBold: require("./assets/fonts/Nunito-ExtraBold.ttf"),
    NunitoExtraBoldItalic: require("./assets/fonts/Nunito-ExtraBoldItalic.ttf"),
  });
  LogBox.ignoreAllLogs();
  if (!loaded) {
    return (
      <Center hideStatusBar={true}>
        <Text
          style={{
            color: "cornflowerblue",
          }}
        >
          loading...
        </Text>
      </Center>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar />
        <NavigationContainer>
          <GraphQLApolloProvider>
            <Routes />
          </GraphQLApolloProvider>
        </NavigationContainer>
      </View>
    );
  }
};
export default App;
