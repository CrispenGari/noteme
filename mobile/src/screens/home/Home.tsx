import React from "react";
import { View, Text } from "react-native";
import { AppNavProps } from "../../paramlists";
const Home: React.FC<AppNavProps<"Home">> = ({}) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
