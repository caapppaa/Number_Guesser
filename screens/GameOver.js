import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colours from "../constants/colours";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View>
        <Image
          style={styles.imageContainer}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the number
        <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignContent: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colours.primaryBlack,
    overflow: "hidden",
    margin: 25,
  },
  summaryText: {
    fontSize: 24,
    fontFamily: "open-sans",
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colours.primaryButtonBlue,
  },
});

export default GameOver;
