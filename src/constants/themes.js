const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    white: '#fDfDfD',
    brand: '#adf4cf',
    background: '#fdfdfd',
    cardBackground: '#e5e9f0',
    border: '#eee',
    text: '#111815',
    link: '#8ac3a6',
    blue: '#07c',
    lightgray: '#f6f6ff',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    body: "'Karla', sans-serif",
    heading: "'Inter', sans-serif",
    monospace: "'IBM Plex Mono', monospace",
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {
    navbar: {
      borderBottom: '1px solid #eee',
      color: 'text',
      alignItems: 'center',
      justifyContent: 'space-between',
      py: 3,
      px: 2,
    },
    articleCard: {
      borderLeft: '4px solid #adf4cf',
      backgroundColor: '#fdfdfd',
      boxShadow: '0 0 4px rgba(0, 0, 0, .125)',
    },
  },
  text: {},
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
  },
};

export default theme;
