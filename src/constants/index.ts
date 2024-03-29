/* eslint-disable global-require */
import { Dimensions } from "react-native";

export const COLORS = {
  light: '#FCFCFC',
  grey: '#d9d9d9',
  lightblue: '#AFD3E2',
  blue: '#19A7CE',
  brightBlue: '#47d7ff',
  darkblue: '#146C94',
  gradient: '#093142',
  ripple: 'rgba(227, 227, 227, 0.3)'
};

export const AVATARS: { [x: string]: any } = {
  bear: require('../../assets/avatar-bear.png'),
  bee: require('../../assets/avatar-bee.png'),
  deer: require('../../assets/avatar-deer.png'),
  duck: require('../../assets/avatar-duck.png'),
  fox: require('../../assets/avatar-fox.png'),
  monkey: require('../../assets/avatar-monkey.png'),
  owl: require('../../assets/avatar-owl.png'),
  panda: require('../../assets/avatar-panda.png'),
  squirrel: require('../../assets/avatar-squirrel.png'),
};

export const SYMBOLS: { [x: string]: any } = {
  x: require('../../assets/x.png'),
  circle: require('../../assets/circle.png'),
}

export const BOARD_SIZE = Dimensions.get('window').width - 32
