import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderProfil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Pengguna</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FF69B4', // Pink
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default HeaderProfil;
