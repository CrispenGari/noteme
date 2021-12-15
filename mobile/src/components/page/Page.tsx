import React from "react";
import { View, Text, TextInput } from "react-native";
import { Input } from "react-native-elements";
import { COLORS, FONTS, HEIGHT, WIDTH } from "../../constants";
import { LanguageType, PageType } from "../../types";
import Panel from "../panel/Panel";

const NUMBER_OF_LINES: number = 200;

interface PageProps {
  page: PageType;
  seeTranslation: boolean;
  setSeeTranslation: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLanguage: LanguageType;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
  translation: string;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  deleteNote: () => void;
  save: () => void;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  detectedLanguage: any;
}
const Page: React.FC<PageProps> = ({
  page: { withPanel },
  seeTranslation,
  setSeeTranslation,
  selectedLanguage,
  setSelectedLanguage,
  translation,
  setContent,
  content,
  setEdit,
  save,
  deleteNote,
  detectedLanguage,
}) => {
  return (
    <View
      style={{
        flex: 1,
        width: WIDTH,
        padding: 10,
      }}
    >
      {withPanel && (
        <Panel
          seeTranslation={seeTranslation}
          setSeeTranslation={setSeeTranslation}
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          setEdit={setEdit}
          deleteNote={deleteNote}
          save={save}
          detectedLanguage={detectedLanguage}
        />
      )}
      {withPanel && (
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
      )}
      {!withPanel && (
        <Text
          style={{
            color: "cornflowerblue",
            fontSize: 20,
            fontFamily: FONTS.regularBold,
          }}
        >
          translation
        </Text>
      )}
      {withPanel ? (
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
          numberOfLines={15}
        />
      ) : (
        <TextInput
          placeholder="translation here"
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
          numberOfLines={15}
          value={translation}
        />
      )}

      <View
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          flexDirection: "row",
        }}
      >
        {withPanel && (
          <Text
            style={{
              color: "cornflowerblue",
              fontFamily: FONTS.regular,
              fontSize: 12,
            }}
          >
            {detectedLanguage
              ? `${detectedLanguage.prediction?.name} (${(
                  detectedLanguage.probability * 100
                ).toFixed(0)}%)`
              : "none (100%)"}
          </Text>
        )}
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: 12,
              color: "gray",
              marginRight: 10,
            }}
          >
            {withPanel
              ? `${content.trim().length} character(s)`
              : `translated to ${selectedLanguage.name}`}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: 12,
              color: "gray",
            }}
          >
            {translation.trim().split(/\s/).length} words
          </Text>
        </View>
      </View>
    </View>
  );
};
export default Page;
