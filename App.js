import React from 'react';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';
import HeaderProfil from './src/components/headerProfil';
import NavBarProfil from './src/components/navBarProfil';
import Lifecycle from './src/components/lifecycle';

const App = () => {
  const handleNavPress = (screen) => {
    Alert.alert('Navigasi', `Menuju halaman ${screen}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <HeaderProfil />
      <Lifecycle />
      <NavBarProfil onButtonPress={handleNavPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5', // LavenderBlush for background
  },
});

export default App;
