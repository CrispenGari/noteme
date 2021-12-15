import React from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Page from "../../components/page/Page";
import { LANGUAGES } from "../../constants";
import { AppNavProps } from "../../paramlists";
import { PageType, LanguageType } from "../../types";
import { Foundation, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  useIdentifyMutation,
  useTranslateMutation,
} from "../../generated/graphql";
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
  // states that are set from children components
  const [seeTranslation, setSeeTranslation] = React.useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState<LanguageType>(
    LANGUAGES[3]
  );
  const [detectedLanguage, setDetectedLanguage] = React.useState<any>();
  const [content, setContent] = React.useState<string>("");
  const [translation, setTranslation] = React.useState<string>("");
  const [edit, setEdit] = React.useState<boolean>(false);
  const [identify, _] = useIdentifyMutation();
  const [translate, __] = useTranslateMutation();

  React.useLayoutEffect(() => {
    let mounted: boolean = true;
    if (mounted) {
      navigation.setOptions({
        title: "noteme",
        headerLeft: () => {
          return (
            <Foundation
              name="clipboard-notes"
              size={35}
              color="cornflowerblue"
            />
          );
        },
        headerRightContainerStyle: {
          paddingHorizontal: 10,
        },
        headerRight: () => {
          return (
            <MaterialCommunityIcons
              name="dots-vertical"
              size={24}
              color="#333"
            />
          );
        },
        headerLeftContainerStyle: {
          paddingHorizontal: 10,
        },
      });
    }
    return () => {
      mounted = false;
    };
  }, [navigation]);
  // language translation
  React.useEffect(() => {
    let mounted: boolean = true;

    if (
      mounted &&
      content &&
      detectedLanguage &&
      seeTranslation &&
      selectedLanguage
    ) {
      (async () => {
        const from_: string =
          detectedLanguage.prediction.code !== "eng"
            ? String(detectedLanguage.prediction.code).slice(0, 2)
            : detectedLanguage.prediction.code;

        const to: string =
          selectedLanguage.code !== "eng"
            ? String(selectedLanguage.code).slice(0, 2)
            : selectedLanguage.code;
        await translate({
          fetchPolicy: "network-only",
          variables: {
            input: {
              from_,
              text: content,
              to,
            },
          },
        })
          .then((data) => {
            console.log(data.data);
            setTranslation(data.data?.translate.translation as string);
          })
          .catch((err) => console.log(err));
      })();
    }

    console.log(translation);
    return () => {
      mounted = false;
    };
  }, [content, detectedLanguage, seeTranslation, selectedLanguage]);

  // language detection
  React.useEffect(() => {
    let mounted: boolean = true;
    if (mounted && content) {
      (async () => {
        await identify({
          fetchPolicy: "network-only",
          variables: {
            input: {
              text: content,
            },
          },
        }).then((data) => {
          setDetectedLanguage(data.data?.identify);
        });
      })();
    }
    return () => {
      mounted = false;
    };
  }, [content]);
  const save = async () => {};
  const deleteNote = async () => {
    console.log("delete");
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Page
          page={pages[0]}
          seeTranslation={seeTranslation}
          setSeeTranslation={setSeeTranslation}
          setSelectedLanguage={setSelectedLanguage}
          selectedLanguage={selectedLanguage}
          content={content}
          setContent={setContent}
          translation={translation}
          save={save}
          deleteNote={deleteNote}
          setEdit={setEdit}
          detectedLanguage={detectedLanguage}
        />
        {seeTranslation && (
          <Page
            page={pages[1]}
            seeTranslation={seeTranslation}
            setSeeTranslation={setSeeTranslation}
            setSelectedLanguage={setSelectedLanguage}
            selectedLanguage={selectedLanguage}
            content={content}
            setContent={setContent}
            translation={translation}
            save={save}
            deleteNote={deleteNote}
            setEdit={setEdit}
            detectedLanguage={detectedLanguage}
          />
        )}
      </ScrollView>
    </View>
  );
};

export default Home;
