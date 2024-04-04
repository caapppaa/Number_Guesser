import { Text, View } from "react-native";
import Title from "../components/ui/Title";

function GameOver() {
  return (
    <View>
      <Title>Game Is Over</Title>
      <Image source={require('../assets/images/success.png')} />
    </View>
  );
}

export default GameOver;
