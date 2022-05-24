/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import type {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
import FavoritesScreen from './src/screens/FavoritesScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Provider} from 'react-redux';
import {store} from './src/store/redux/store';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: '#fff',
        sceneContainerStyle: {backgroundColor: '#2D2D2DDF'},
        drawerActiveBackgroundColor: 'black',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
        drawerStyle: {backgroundColor: '#2D2D2DDF'},
      }}>
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Icon name="list" color="#fff" size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          title: 'Favorite Screen',
          drawerIcon: ({color, size}) => (
            <Icon name="star" color="#fff" size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: 'black'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#2D2D2DDF'},
          }}>
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
              title: 'All Categories',
            }}
          />
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen} /*options={({route,navigation})=> {
          const catId=route.params.categoryId;
          return{
            title:catId,
          };}} */
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: 'About the meal',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
