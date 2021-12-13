import React from "react";
import { View, Text, TextInput } from "react-native";
import { Input } from "react-native-elements";
import { FONTS, HEIGHT, WIDTH } from "../../constants";
import Panel from "../panel/Panel";

const NUMBER_OF_LINES: number = 200;
const Page: React.FC = () => {
  const [content, setContent] = React.useState<string>("");
  const [header, setHeader] = React.useState<string>("");

  return (
    <View
      style={{
        flex: 1,
        width: WIDTH,
        padding: 10,
      }}
    >
      <Panel />

      <TextInput
        style={{
          backgroundColor: "#f5f5f5",
          width: "100%",
          fontSize: 16,
          fontFamily: FONTS.regularBold,
          borderColor: "cornflowerblue",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          marginBottom: 5,
          textAlignVertical: "top",
        }}
        numberOfLines={2}
        placeholder="notes title"
      />
      <TextInput
        onChangeText={(text) => setContent(text)}
        placeholder="type notes here"
        style={{
          backgroundColor: "#f5f5f5",
          flex: 1,
          justifyContent: "flex-start",
          textAlign: "left",
          borderColor: "cornflowerblue",
          borderRadius: 5,
          borderWidth: 1,
          padding: 10,
          alignItems: "flex-start",
          fontFamily: FONTS.regular,
          textAlignVertical: "top",
          maxHeight: HEIGHT * 0.7,
          fontSize: 16,
        }}
        multiline
        autoCapitalize="sentences"
        autoCompleteType="cc-exp-year"
        selectionColor="cornflowerblue"
        spellCheck
        underlineColorAndroid={"transparent"}
        numberOfLines={NUMBER_OF_LINES}
      />
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 10,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: 15,
            color: "gray",
            marginRight: 10,
          }}
        >
          {content.trim().length} character(s)
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: 15,
            color: "gray",
          }}
        >
          {content.trim().split(/\s/).length} words
        </Text>
      </View>
    </View>
  );
};
export default Page;
