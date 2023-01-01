import { StyleSheet, View, Text, TextInput } from "react-native";
import { headerText, searchInput } from "./search.style";
import { isDarkMode } from "../../../constants";

const Search = () => {
  return <View style={{overflow:'hidden'}}>
      <Text style={searchStyle.headerText}>Search</Text>
      <TextInput  placeholder={'Search by title'} style={searchStyle.searchInput} />
  </View>;
};

export default Search;


const searchStyle = StyleSheet.create({
  headerText: headerText,
  searchInput: searchInput
})
