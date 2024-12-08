import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

class Lifecycle extends Component {
  state = {
    users: [],
    isLoading: true,
  };

  componentDidMount() {
    // Simulasi pengambilan data
    setTimeout(() => {
      this.setState({
        users: ['Azila Wandani 223510275', 'Bima', 'Caca', 'Siska', 'Mawar'],
        isLoading: false,
      });
    }, 2000);
  }

  render() {
    const { users, isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#FF69B4" />
        ) : (
          <FlatList
            data={users}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Text style={styles.userItem}>{item}</Text>
            )}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1', // Light Pink
    padding: 16,
  },
  userItem: {
    padding: 16,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FFB6C1', // Lighter Pink
  },
});

export default Lifecycle;
