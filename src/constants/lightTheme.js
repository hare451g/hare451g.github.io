const lightTheme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    brand: '#adf4cf',
    background: '#fbfbfb',
    text: '#1c1c1e',
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
    small:
      '0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)',
    medium:
      '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)',
    large:
      '0 8px 10px 1px rgba(0,0,0,0.14), 0 3px 14px 2px rgba(0,0,0,0.12), 0 5px 5px -3px rgba(0,0,0,0.20)',
    xl:
      '0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.20)',
  },
  variants: {
    navbar: {
      backgroundColor: '#fdfdfd',
      borderBottom: '1px solid #eee',
      py: 2,
      px: 2,
    },
    activeTab: {
      fontWeight: 'bold',
      borderBottom: '4px solid #adf4cf',
    },
    link: {
      color: '#1c1c1e',
      textDecoration: 'none',
      fontWeight: 'bold',
      borderBottom: '4px solid #adf4cf',
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

export default lightTheme;
