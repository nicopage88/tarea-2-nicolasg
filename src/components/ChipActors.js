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

const ChipActors = ({ value, pressable, onPress }) => (
  <TouchableOpacity
    disabled={!pressable}
    style={styles.container}
    onPress={() => onPress(value)}
  >
    <Text style={styles.text}>{value}</Text>
  </TouchableOpacity>
);

export default ChipActors;
