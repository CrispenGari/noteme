import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./PanelStyles";
const Panel = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5,
      }}
    >
      <View></View>
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
