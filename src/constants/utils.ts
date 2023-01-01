import {useColorScheme} from 'react-native';

const isDarkMode = useColorScheme() == 'dark';
const baseStyle = {
  flex: 1,
  backgroundColor: isDarkMode ? 'black' : 'white',
  paddingTop: '15%',
  padding:'5%'
};

export {isDarkMode,baseStyle};
