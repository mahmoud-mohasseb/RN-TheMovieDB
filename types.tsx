/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  MovieDetails: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Mainpage: undefined;
  TabTwo: undefined;
  TabThree: undefined;
  MovieDetails:
    | Readonly<{
        id: number | any;
        title: string | any;
        overview: string | any;
        origin: string | any;
        poster_path: string;
        params: undefined;
      }>
    | undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type ScreenoneComponent = {
  MovieVideo: any;
};

export type Navtypes = {
  id: any;
  name: string;
  navigate: any;
};
export type Flag = {
  Flag: undefined;
};
