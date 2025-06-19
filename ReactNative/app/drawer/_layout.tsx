// app/layout.tsx
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Perfil from './index'; // Tela inicial
import settings from '../../screen/settings'; // Ota tela
import imc from '../tabs/_layout'

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={imc} />
      <Drawer.Screen name="Perfil" component={Perfil} />
      <Drawer.Screen name="Configuraçoes" component={settings} />
 
    </Drawer.Navigator>
  );
}