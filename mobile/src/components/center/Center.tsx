import React from "react";
import { View, StatusBar } from "react-native";

interface CenterProps {
  hideStatusBar: boolean;
}
const Center: React.FC<CenterProps> = ({ children, hideStatusBar }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar hidden={hideStatusBar} />
      {children}
    </View>
  );
};

export default Center;
