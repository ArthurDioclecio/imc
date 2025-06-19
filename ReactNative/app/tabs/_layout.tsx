import React, { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
<<<<<<< HEAD
import Index from './index'; 
import Settings from '../../screen/settings'; 
import pesq from '../../screen/pesquisa'; 
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(1);

  const [routes] = useState([
    { key: 'pesq', title: 'sobre imc' },
     { key: 'home', title: 'Imc' },
   
   
     
  ]);

  const renderScene = SceneMap({
   
     pesq: pesq,
      home: Index,
    settings: Settings,
=======
import IndexScreen from './index'; 
import Settings from './settings'; 
import user from './user'; 

export default function TabsLayout() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Home' },
    { key: 'user', title: 'user' },
    
  ]);

  const renderScene = SceneMap({
    home: IndexScreen,
    user: user,
>>>>>>> 46bc3991539b1f146dc262b546dccfe623b344f1
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={(props) => (
        <TabBar
          {...props}
          indicatorStyle={{ backgroundColor: 'white' }}
          style={{ backgroundColor: '#2196f3' }}
        />
      )}
    />
  );
}