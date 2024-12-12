import {FC, useEffect, useState} from 'react';
import axios from 'axios';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const url = 'https://jsonplaceholder.typicode.com/posts';

const HomeScreen: FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={{fontSize: 30, color: 'white'}}>Loading...</Text>
      ) : (
        <ScrollView contentContainerStyle={{padding: 20}}>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  height: 'auto',
                  width: 'auto',
                  marginBottom: 20,
                  borderWidth: 1,
                  borderColor: 'white',
                }}>
                <View style={{padding: 10}}>
                  <Text style={{fontSize: 10, color: 'white'}}>{item.id}</Text>
                  <Text style={{fontSize: 15, color: 'white'}}>
                    {item.title}
                  </Text>
                  <Text style={{fontSize: 10, color: 'white'}}>
                    {item.body}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default HomeScreen;
