import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
function Subtitle({children}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  subTitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    borderBottomColor: '#ABAAAADF',
    borderBottomWidth: 2,
  },
  subTitle: {
    color: '#ABAAAADF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Subtitle;
