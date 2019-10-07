import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';
import {
  View,
  Image,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import api from '../services/api';

const SpotList = ({ deity, navigation }) => {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('/spots', {
        params: { deity }
      });

      setSpots(response.data);
    })();
  }, []);

  const handleNavigate = id => {
    navigation.navigate('Book', { id });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Cults that worship <Text style={styles.bold}>{deity}</Text>
      </Text>

      <FlatList
        style={styles.list}
        data={spots}
        keyExtractor={spot => spot._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image
              style={styles.thumbnail}
              source={{ uri: item.thumbnail_url }}
            />
            <Text style={styles.cult}>{item.cult}</Text>
            <Text style={styles.price}>
              {item.price ? `R$${item.price}/day` : 'FREE'}
            </Text>
            <TouchableOpacity
              onPress={() => handleNavigate(item._id)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Request reservation</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },

  title: {
    fontSize: 20,
    color: '#444',
    paddingHorizontal: 20,
    marginBottom: 15
  },

  bold: {
    fontWeight: 'bold'
  },

  list: {
    paddingHorizontal: 20
  },

  listItem: {
    marginRight: 15
  },

  thumbnail: {
    width: 200,
    height: 120,
    resizeMode: 'cover',
    borderRadius: 2
  },

  cult: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10
  },

  price: {
    fontSize: 15,
    color: '#999',
    marginTop: 5
  },

  button: {
    height: 32,
    backgroundColor: '#338855',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 15
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15
  }
});

export default withNavigation(SpotList);
