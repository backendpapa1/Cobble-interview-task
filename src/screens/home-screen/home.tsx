import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { isDarkMode, size } from "../../constants";
import {base} from './home.style';
import { News, Search } from "../../components/home";

import {HttpBaseBuilder} from '../../networks';
import {useEffect, useState} from 'react';

const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    const network = new HttpBaseBuilder()
      .setUrl(
        'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a17882d1d81e439cb71d22ff6d2e39d7',
      )
      .build()
      .get()
      .then(su => {

        setNews(su.articles);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <View style={homeStyles.base}>
      <Search />
      <Text style={{fontSize: size.H3,
        color: isDarkMode ? 'white' : 'black',
        fontWeight: '900',
        marginBottom: 20}}>News</Text>
      <View style={{flex: 1}}>
        <ScrollView style={{height: '100%'}} >
          {news.map((item:any,i: any) => {
            return <News item={item} key={i}/>
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const homeStyles = StyleSheet.create({
  base: base,
});
