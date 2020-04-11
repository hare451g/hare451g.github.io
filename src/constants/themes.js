import {
  COLOR_CHARCOAL,
  COLOR_IVORY,
  COLOR_PURPLE,
  COLOR_PINK,
} from './colors';

const lightTheme = {
  colors: {
    background: COLOR_IVORY,
    cardBackground: '#E5E9F0',
    border: COLOR_CHARCOAL,
    text: COLOR_CHARCOAL,
    link: COLOR_PURPLE,
  },
};

const darkTheme = {
  colors: {
    background: COLOR_CHARCOAL,
    cardBackground: COLOR_CHARCOAL,
    border: COLOR_IVORY,
    text: COLOR_IVORY,
    link: COLOR_PINK,
  },
};

export { lightTheme, darkTheme };
