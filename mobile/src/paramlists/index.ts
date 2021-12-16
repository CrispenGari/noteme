import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Authentication Param Lists
export type AppParamList = {
  Home: {
    ipAddress: string;
  };
  Editor: {
    ipAddress: string;
  };
};

export type AppNavProps<T extends keyof AppParamList> = {
  navigation: StackNavigationProp<AppParamList, T>;
  route: RouteProp<AppParamList, T>;
};
