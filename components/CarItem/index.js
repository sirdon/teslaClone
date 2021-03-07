import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from '../StyledButton';
import styles from './styles';
const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/images/ModelX.jpeg')}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>
      <StyledButton
        type="primary"
        content={'Custom Order'}
        onPress={() => {
          console.warn('custom order pressed');
        }}
      />
      <StyledButton
        type="Secondary"
        content={'Existing Inventory'}
        onPress={() => {
          console.warn('Existing Inventory pressed');
        }}
      />
    </View>
  );
};
export default CarItem;
