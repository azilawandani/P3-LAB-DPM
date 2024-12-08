import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavBarProfil = ({ onButtonPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress('Home')}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress('Profile')}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => onButtonPress('Settings')}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    backgroundColor: '#FF69B4', // Pink
  },
  button: {
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default NavBarProfil;
