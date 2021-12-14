import { Dimensions } from "react-native";

// Fonts for the app
export const FONTS = {
  regular: "NunitoRegular",
  italic: "NunitoItalic",
  italicBold: "NunitoBoldItalic",
  italicExtraBold: "NunitoExtraBoldItalic",
  regularBold: "NunitoBold",
  regularExtraBold: "NunitoExtraBold",
};

// Dimensions
const { width, height } = Dimensions.get("screen");

export const WIDTH: number = width;
export const HEIGHT: number = height;

// Colors

export const COLORS = {
  main: "#4a4e4d",
  secondary: "#0e9aa7",
  primary: "#4b86b4",
};

interface LanguageType {
  name: string;
  id: number;
  code: string;
}
export const LANGUAGES: LanguageType[] = [
  {
    name: "germany",
    id: 3,
    code: "deu",
  },
  {
    name: "english",
    id: 0,
    code: "eng",
  },
  {
    name: "swedish",
    id: 1,
    code: "swe",
  },
  {
    name: "french",
    id: 2,
    code: "fra",
  },
  {
    name: "italian",
    id: 4,
    code: "ita",
  },
  {
    name: "portuguese",
    id: 5,
    code: "por",
  },
  {
    name: "afrikaans",
    id: 6,
    code: "afr",
  },
].sort((a, b) => a.name.localeCompare(b.name));
