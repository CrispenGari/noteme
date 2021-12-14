import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./PanelStyles";
import { FONTS, LANGUAGES } from "../../constants";
import { Picker } from "@react-native-picker/picker";

interface PanelProps {
  seeTranslation: boolean;
  setSeeTranslation: React.Dispatch<React.SetStateAction<boolean>>;
}
const Panel: React.FC<PanelProps> = ({ seeTranslation, setSeeTranslation }) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState("Java");

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
            }}
            collapsable
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            {LANGUAGES.map((language) => {
              return (
                <Picker.Item
                  label={language.name}
                  value={language.code}
                  key={language.id.toString()}
                />
              );
            })}
          </Picker>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            setSeeTranslation(!seeTranslation);
          }}
        >
          <Text
            style={{
              color: "cornflowerblue",
              fontFamily: FONTS.regular,
              fontSize: 16,
            }}
          >
            see translation
          </Text>
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
        <TouchableOpacity style={styles.panel__button}>
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
