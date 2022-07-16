import { View, Text, TextInput } from "react-native";

const PersonComponent = (props) => {
  //console.log(props);
  return (
    <View>
      <Text style={{ color: "black", fontWeight: "bold" }}>
        {props.playerName}
      </Text>
      <TextInput
        style={{ height: 25, width: 35, borderWidth: 1, fontWeight: "bold" }}
        defaultValue="0"
        onChangeText={(num) => {
          props.changePoints(props.index, num);
        }}
      />
    </View>
  );
};
export default PersonComponent;
