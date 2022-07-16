import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddComponent from "./component/add.component";

export default function App() {
  return (
    <View style={styles.container}>
      <AddComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
    marginTop:40
  },
});
