import {Image, Text, View} from 'react-native';
import { isDarkMode, size } from "../../../constants";


const News = (props: any) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between',marginBottom:35}}>
      <Image
        style={{height:50,width:50,borderRadius:50,overflow:'hidden',marginRight:5}}
        source={{
          uri: props.item.urlToImage,
        }}
      />
      <View style={{width:'60%'}}>
        <Text numberOfLines={2} style={{fontSize:16,color:isDarkMode? "white": "black",fontWeight:'bold'}}>{props.item.title}</Text>
        <Text numberOfLines={2} style={{color:isDarkMode? "white": "black",fontSize:12}}>{props.item.description}</Text>
      </View>
      <Text>{new Date(props.item.publishedAt).getHours()}:{new Date(props.item.publishedAt).getMinutes()} </Text>
    </View>
  );
};

export default News;
