import { Text, View, Image, StyleSheet, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import Colours from "../constants/colours";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOver({roundsNumber, userNumber, onStartNewGame}) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to
        guess the number
        <Text style={styles.highlight}> {userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: deviceWidth < 380 ? 230 : 300,
    height: deviceWidth < 380 ? 230 : 300,
    borderRadius: deviceWidth < 380 ? 115 : 150,
    borderWidth: 3,
    borderColor: Colours.primaryBlack,
    overflow: "hidden",
    margin: 25,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontSize: 24,
    fontFamily: "open-sans",
    textAlign: 'center',
    marginBottom: 24,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 3,
    borderColor: Colours.primaryDarkBlue
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colours.primaryButtonBlue,
  },
});

export default GameOver;
