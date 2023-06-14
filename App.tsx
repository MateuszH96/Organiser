
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text } from 'react-native';
import { Component } from 'react';
import Home from './src/Home';
import Kosci from './src/Kosci';
import Terraformacja from './src/Terraformacja';
import Sen from './src/Sen';
const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Drawer.Screen name='Home' component={Home} />
          <Drawer.Screen name='Terraformacja Marsa' component={Terraformacja} />
          <Drawer.Screen name='Kosci' component={Kosci} />
          <Drawer.Screen name='Sen' component={Sen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}


//   return (
//     <NavigationContainer>
//     <Drawer.Navigator initialRouteName='Kosci'>
//       <Drawer.Screen name='Kosci' component={Kosci} />
//       <Drawer.Screen name='Article' component={Article} />
//     </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

//export default App;