import React from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Page from "../../components/page/Page";
import { AppNavProps } from "../../paramlists";

const Home: React.FC<AppNavProps<"Home">> = ({ navigation }) => {
  const pages = [2];
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={pages}
        horizontal
        contentContainerStyle={{}}
        keyExtractor={(_, i) => i.toString()}
        snapToAlignment="center"
        pagingEnabled
        renderItem={({ item }) => <Page />}
      />
    </View>
  );
};

export default Home;
