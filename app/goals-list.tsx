import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 32,
                              fontWeight: 'bold',
                              lineHeight: 32,}}>Goals List</Text>
            <Text>This screen will list all weekly goals and allow a user to select a goal to enter progress towards</Text>
            <Text><Link href="/enter-progress">Click here to enter progress</Link></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
