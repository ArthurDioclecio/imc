import React, { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import IndexScreen from './index'; // Sua primeira aba (ex: Home)
import Settings from './settings'; // Sua segunda aba (ex: Configurações)
import user from './user'; // Sua terceira aba (ex: Perfil)

export default function TabsLayout() {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'home', title: 'Home' },
    { key: 'user', title: 'user' },
     // exemplo de outra aba
  ]);

  const renderScene = SceneMap({
    home: IndexScreen,
    user: user,
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