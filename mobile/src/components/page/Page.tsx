import React from "react";
import { View, Text, TextInput } from "react-native";
import { Input } from "react-native-elements";
import { FONTS, HEIGHT, WIDTH } from "../../constants";
import Panel from "../panel/Panel";

interface PageType {
  content: string;
  page: number;
}
const Page: React.FC<{
  setPages: React.Dispatch<React.SetStateAction<PageType[]>>;
  pageContent: PageType;
  totalPages: number;
}> = ({ setPages, pageContent, totalPages }) => {
  const [height, setHeight] = React.useState(0);
  const [lines, setLines] = React.useState(0);
  const [pageFull, setPageFull] = React.useState(false);

  const PADDING: number = 10;
  const FONT_SIZE: number = 16;
  const MAX_INPUT_HEIGHT: number = HEIGHT * 0.7 - PADDING;
  const NUMBER_OF_LINES: number = Math.floor(MAX_INPUT_HEIGHT / FONT_SIZE);

  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      if (pageFull && mounted) {
        setPages((prev) => [
          ...prev,
          {
            content: "",
            page: totalPages + 1,
          },
        ]);
      }
    }
    return () => {
      mounted = false;
    };
  }, [pageFull]);

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
        onContentSizeChange={(e) => {
          if (e.nativeEvent.contentSize.height > MAX_INPUT_HEIGHT) {
            setPageFull(true);
          }
        }}
        style={{
          backgroundColor: "#f5f5f5",
          flex: 1,
          justifyContent: "flex-start",
          textAlign: "left",
          borderColor: "cornflowerblue",
          borderRadius: 5,
          borderWidth: 1,
          padding: PADDING,
          alignItems: "flex-start",
          fontFamily: FONTS.regular,
          textAlignVertical: "top",
          maxHeight: HEIGHT * 0.7,
          fontSize: FONT_SIZE,
        }}
        multiline
        autoCapitalize="sentences"
        autoCompleteType="cc-exp-year"
        selectionColor="cornflowerblue"
        spellCheck
        underlineColorAndroid={"transparent"}
        returnKeyType="next"
        numberOfLines={NUMBER_OF_LINES}
      />
      <View
        style={{
          justifyContent: "flex-end",
          alignItems: "flex-end",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: 16,
          }}
        >
          {pageContent.page}/{totalPages}
        </Text>
      </View>
    </View>
  );
};
export default Page;
