import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import PersonComponent from "./person.component";

const AddComponent = () => {
  const [players, setPlayers] = useState([]);
  const [name, setName] = useState("");

  const addJuwade = () => {
    if (name.length !== 5) {
      return;
    }
    setPlayers((previous) => {
      const newPlayers = [...previous, { name, points: 0}];
      setName("");
      return newPlayers;
    });
  };
  const changePoints = (userIndex, newPoints = 0) => {
    const chosenPalyer = players[userIndex];
    chosenPalyer.points = !!newPoints ? newPoints : 0;

    const newPlayers = [...players];
    newPlayers[userIndex] = chosenPalyer;
    setPlayers(newPlayers);
  };
  const sendpoints = () => {
    console.log(players);
  };
  return (
    <View>
      <View style={styles.topbar}>
        <Button title="ADDJUWADE" onPress={addJuwade} />
        <TextInput
          placeholder="5 letter only"
          style={styles.toptextinput}
          onChangeText={setName}
          value={name}
        />
        <Button title="sendPoints" onPress={sendpoints} />
      </View>
      <View style={styles.personcomponent}>
        {players.map((eachPlayer, index) => (
          <PersonComponent
            key={index}
            index={index}
            playerName={eachPlayer.name}
            changePoints={changePoints}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  topbar: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  toptextinput: {
    height: 40,
    width: "25%",
    borderWidth: 1,
    padding: 10,
  },
  personcomponent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
export default AddComponent;
