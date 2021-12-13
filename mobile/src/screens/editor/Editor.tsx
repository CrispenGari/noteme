import React from "react";
import { View, Text } from "react-native";
import Page from "../../components/page/Page";

const Editor: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        padding: 10,
      }}
    >
      <Page />
    </View>
  );
};

export default Editor;
