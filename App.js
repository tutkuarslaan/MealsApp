/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './src/screens/CategoriesScreen';
import MealsOverviewScreen from './src/screens/MealsOverviewScreen';
import MealDetailScreen from './src/screens/MealDetailScreen';
const Stack = createNativeStackNavigator();
const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
          contentStyle: {backgroundColor: '#2D2D2DDF'},
        }}>
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{
            title: 'Meal Categories',
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
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
