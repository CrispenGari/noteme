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
