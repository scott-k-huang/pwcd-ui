import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from "react-native";
import { Link } from 'expo-router';
import axios from 'axios';

//following link shows how to do api call
//https://medium.com/@yildizfatma/making-api-requests-in-react-native-expo-a-simple-example-project-using-axios-9a6c75076a52

const API_URL = 'http://localhost:8080/progress/10/15';

export default function Index() {
    const [data, setData] = useState([]);

      useEffect(() => {
        fetchData();
      }, []);

    const fetchData = async () => {
        try {
          const response = await axios.get(API_URL);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{fontSize: 32,
                        fontWeight: 'bold',
                        lineHeight: 32,}}>Procrastinator's Wellness Countdown</Text>
      <Text>This screen will show status of the week's goals</Text>
      <Text><Link href="/goals-list">Click here to show list of weekly goals</Link></Text>
      <Text>Return data from API request here:</Text>
      <Text>Category id: {data.catId}</Text>
      <Text>Week of year: {data.weekOfYear}</Text>
      <FlatList
        data={data.itemProgressList}
        keyExtractor={(item) => String(item.itemId)}
        renderItem={({ item }) => (
          <View>
            <Text>{item.itemId}</Text>
            <Text>{item.itemName}</Text>
            <Text>{item.weekGoalAmount}</Text>
            <Text>{item.weekCount}</Text>
            <Text>{item.weekGoalCompletionPercentage}</Text>
          </View>
        )}
      />
    </View>
  );
}
