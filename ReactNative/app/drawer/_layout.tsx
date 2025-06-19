// app/layout.tsx
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './index'; // Tela inicial
import settings from '../../screen/user'; // Ota tela
import imc from '../tabs'

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Configuraçoes" component={settings} />
      <Drawer.Screen name="Imc" component={imc} />
    </Drawer.Navigator>
  );
}