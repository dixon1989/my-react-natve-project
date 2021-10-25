/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import {ROOT_MODULES} from './router/rootRouter';
 
 const Stack = createStackNavigator();
 const App = () => {
   console.log('APPLICATION INITIATED');
   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName={'home'}>
         {ROOT_MODULES.map(({name, component}: any) => (
           <Stack.Screen key={name} name={name} component={component} />
         ))}
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 export default App;
 