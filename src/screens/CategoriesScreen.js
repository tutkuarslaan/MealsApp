import React from 'react';
import {FlatList} from 'react-native';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {
    //flatlist in render ını daha yalın hale getirmek için bu fonksiyonu yazdım.
    //bu fonksiyon screen her geldiğinde yeniden üretilmesin diye screen fonksiyonunun dışında olmalı.
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
