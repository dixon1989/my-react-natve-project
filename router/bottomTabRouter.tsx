import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import DefaultMain from '../screens/RNDefaultHome';

const BOTTOM_TAB_MODULES = [
  {
    name: 'main',
    icon: ({focused, color, size}: any) => {
      return focused ? (
        <MaterialCommunityIcons name="home-circle" size={size} color={color} />
      ) : (
        <MaterialCommunityIcons
          name="home-circle-outline"
          size={size}
          color={color}
        />
      );
    },
    component: DefaultMain,
  },
  {
    name: 'contacts',
    icon: ({focused, color, size}: any) => {
      return focused ? (
        <MaterialCommunityIcons name="contacts" size={size} color={color} />
      ) : (
        <MaterialCommunityIcons
          name="contacts-outline"
          size={size}
          color={color}
        />
      );
    },
    component: DefaultMain,
  },
];

export {BOTTOM_TAB_MODULES};
