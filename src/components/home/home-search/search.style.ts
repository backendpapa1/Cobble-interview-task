import {isDarkMode, size} from '../../../constants';

const headerText = {
  fontSize: size.H3,
  color: isDarkMode ? 'white' : 'black',
  fontWeight: '900',
  marginBottom: 20,
};

const searchInput = {
  height: 70,
  width: '100%',
  fontSize: size.H1,
  fontWeight: '500',
  color: isDarkMode ? 'white' : 'black',
};

export {headerText, searchInput};
