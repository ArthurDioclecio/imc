import React, { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
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