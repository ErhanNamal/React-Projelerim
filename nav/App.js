import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AnaSayfa from './screens/AnaSayfa';
import ProfilSayfa from './screens/ProfilSayfa';
import AyarlarSayfa from './screens/AyarlarSayfa';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen
          name="AnaSayfa"
          component={AnaSayfa}
          options={{ title: 'Ana Sayfa' }}
        />

        <Tab.Screen
          name="Profil"
          component={ProfilSayfa}
          options={{ title: 'Profil' }}
        />

        <Tab.Screen
          name="Ayarlar"
          component={AyarlarSayfa}
          options={{ title: 'Ayarlar' }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
