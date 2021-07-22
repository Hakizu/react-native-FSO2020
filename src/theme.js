import Constants from "expo-constants";

const theme = {
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
    },
      fontSizes: {
        body: 18,
        subheading: 16,
    },
      fonts: {
        main: 'System',
    },
      fontWeights: {
        normal: '400',
        bold: '700',
    },
    appBar: {
      padding: 15,
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#D3D3D3',
    },
    image: {
      width: 50,
      height: 50,
      margin: 15,
      marginTop: 0,
    }
};

export default theme;