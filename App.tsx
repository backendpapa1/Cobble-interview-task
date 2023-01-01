import React from 'react';
import { useColorScheme, Text, TouchableOpacity } from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Home} from './src/screens';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerTransparent:true,
        tabBarStyle: {

          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: isDarkMode?'rgba(34,36,40,1)': 'white',
          borderTopWidth: 0,
        },
        headerStyle: {
          backgroundColor: 'transparent',
          elevation:0
        },
        headerTitle: () => {
          return <TouchableOpacity activeOpacity={0.6} style={{flexDirection:'row'}}>
            <Icon name="chevron-left" size={20} color={isDarkMode?"white":"black"}  />
            <Text style={{marginLeft:5,color:isDarkMode?"white":"black",fontWeight:'bold'}}>Back</Text>
          </TouchableOpacity>
        }
      }}>
        <Tab.Screen
          name="News"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="newspaper" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Audio"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="assistive-listening-systems" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Blog"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="blog" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Watch"
          component={Home}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="cloud" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
