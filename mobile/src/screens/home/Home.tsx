import React from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Page from "../../components/page/Page";
import { AppNavProps } from "../../paramlists";

interface PageType {
  content: string;
  page: number;
}
const Home: React.FC<AppNavProps<"Home">> = ({ navigation }) => {
  const [pages, setPages] = React.useState<PageType[]>([
    {
      content: "",
      page: 1,
    },
  ]);
  React.useLayoutEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      navigation.setOptions({
        title: "noteme",
      });
    }
    return () => {
      mounted = false;
    };
  }, [navigation]);

  const elements = Array(3).fill(1);
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
        renderItem={({ item }) => (
          <Page
            totalPages={pages.length}
            setPages={setPages}
            pageContent={item}
          />
        )}
      />
    </View>
  );
};

export default Home;
