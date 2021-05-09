import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import movieColors from './Movies/movieColors';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: '#bdc3c7',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const Chip = ({ value, pressable, onPress }) => (
  <TouchableOpacity
    disabled={!pressable}
    style={{
      backgroundColor:movieColors[value], 
      padding: 5,
      paddingHorizontal: 10,
      margin: 5,
      borderRadius: 20,
    }}
    onPress={() => onPress(value)}
  >
    <Text style={styles.text}>{value}</Text>
  </TouchableOpacity>
);

export default Chip;
