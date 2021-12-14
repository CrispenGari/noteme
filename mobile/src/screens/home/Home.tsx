import React from "react";
import { View, Text, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Page from "../../components/page/Page";
import { LANGUAGES } from "../../constants";
import { AppNavProps } from "../../paramlists";
import { PageType, LanguageType } from "../../types";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";

const pages: PageType[] = [
  {
    page: 1,
    withPanel: true,
  },
  {
    page: 2,
    withPanel: false,
  },
];

const Home: React.FC<AppNavProps<"Home">> = ({ navigation }) => {
  const [seeTranslation, setSeeTranslation] = React.useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState<LanguageType>(
    LANGUAGES[3]
  );

  const ref = React.useRef<BottomSheet>(null);

  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      if (seeTranslation) {
        pages.pop();
      } else {
        pages.push({
          page: 2,
          withPanel: false,
        });
      }
    }
    return () => {
      mounted = false;
    };
  }, [seeTranslation]);

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
        horizontal={false}
        contentContainerStyle={{}}
        keyExtractor={(_, i) => i.toString()}
        snapToAlignment="center"
        pagingEnabled
        renderItem={({ item }) => (
          <Page
            page={item}
            seeTranslation={seeTranslation}
            setSeeTranslation={setSeeTranslation}
          />
        )}
      />
    </View>
  );
};

export default Home;
