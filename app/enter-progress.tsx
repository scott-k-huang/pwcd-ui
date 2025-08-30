import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 32,
                              fontWeight: 'bold',
                              lineHeight: 32,}}>Progress Entry</Text>
            <Text>This screen will allow a user to enter progress towards the week's goals</Text>
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
