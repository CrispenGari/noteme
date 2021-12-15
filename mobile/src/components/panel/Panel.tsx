import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./PanelStyles";
import { FONTS, LANGUAGES } from "../../constants";
import { Picker } from "@react-native-picker/picker";
import { LanguageType } from "../../types";

interface PanelProps {
  seeTranslation: boolean;
  setSeeTranslation: React.Dispatch<React.SetStateAction<boolean>>;
  selectedLanguage: LanguageType;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageType>>;
  deleteNote: () => void;
  save: () => void;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  detectedLanguage: any;
}
const Panel: React.FC<PanelProps> = ({
  seeTranslation,
  setSeeTranslation,
  setSelectedLanguage,
  selectedLanguage,
  deleteNote,
  detectedLanguage,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 0,
      }}
    >
      <View>
        <View style={{}}>
          <Picker
            style={{
              padding: 0,
              width: 150,
              fontFamily: FONTS.regular,
              borderBottomColor: "cornflowerblue",
              borderWidth: 1,
              backgroundColor: "white",
            }}
            dropdownIconRippleColor={"transparent"}
            dropdownIconColor="cornflowerblue"
            collapsable
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            {/* Don't translate to the language that you have detected */}
            {detectedLanguage?.prediction?.name === "english"
              ? LANGUAGES.filter(
                  (language) =>
                    language.name !== detectedLanguage?.prediction?.name
                ).map((language) => {
                  return (
                    <Picker.Item
                      style={{
                        fontFamily: FONTS.regular,
                        color:
                          language.code === selectedLanguage.code
                            ? "cornflowerblue"
                            : "#333",
                      }}
                      label={language.name}
                      value={language}
                      key={language.id.toString()}
                    />
                  );
                })
              : LANGUAGES.filter((language) => language.name === "english").map(
                  (language) => {
                    return (
                      <Picker.Item
                        style={{
                          fontFamily: FONTS.regular,
                          color:
                            language.code === selectedLanguage.code
                              ? "cornflowerblue"
                              : "#333",
                        }}
                        label={language.name}
                        value={language}
                        key={language.id.toString()}
                      />
                    );
                  }
                )}
          </Picker>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setSeeTranslation(!seeTranslation);
          }}
          style={{
            paddingVertical: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "cornflowerblue",
              fontFamily: FONTS.regular,
              fontSize: 16,
              marginRight: 20,
            }}
          >
            {seeTranslation ? "hide translation" : "show translation"}
          </Text>
          <MaterialIcons name="translate" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <TouchableOpacity style={styles.panel__button}>
          <MaterialIcons name="edit" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.panel__button} onPress={deleteNote}>
          <MaterialIcons name="delete" size={24} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.panel__button}>
          <MaterialIcons name="save" size={24} color="cornflowerblue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Panel;
