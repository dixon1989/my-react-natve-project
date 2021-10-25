import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {BOTTOM_TAB_MODULES} from '../../router/bottomTabRouter';

const Tab = createMaterialBottomTabNavigator();

const getHeaderKey = (route: any) => {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'home';
  return routeName;
};

const getHeaderLabel = (route: any) => {
  return getHeaderKey(route);
};

export default function Widget({navigation, route}: any) {
  React.useLayoutEffect(() => {
    const headerKey = getHeaderKey(route);
    const headerLabel = getHeaderLabel(route);
    navigation.setOptions({
      headerTitle: headerLabel,
      headerRight:
        headerKey === 'me'
          ? () => (
              <TouchableOpacity onPress={() => navigation.navigate('settings')}>
                <Ionicons name="settings-outline" size={24} color="#fff" />
              </TouchableOpacity>
            )
          : null,
      headerStyle: {
        elevation: 0,
        backgroundColor: '#FF0000',
        borderBottomColor: '#FF0000',
        shadowOpacity: 0,
        borderBottomWidth: 1,
      },
      headerTitleStyle: {
        color: '#fff',
      },
      headerTitleAlign: 'center',
      headerShown: headerKey !== 'home' && headerKey !== 'marketplace',
    });
  }, [navigation, route]);

  return (
    <Tab.Navigator
      initialRouteName={'main'}
      backBehavior={'initialRoute'}
      activeColor={'#000000'}
      inactiveColor={'#dddddd'}>
      {BOTTOM_TAB_MODULES.map((module: any) => {
        const {name, icon, component} = module;
        return (
          <Tab.Screen
            key={name}
            name={name}
            component={component}
            options={{
              tabBarLabel: name,
              tabBarIcon: ({focused, color}) => {
                return icon({focused, color, size: 24});
              },
              tabBarColor: '#FF0000',
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}
