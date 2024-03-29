import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput}/>
      <PrimaryButton>RESET</PrimaryButton>
      <PrimaryButton>CONFIRM</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#daf5ff",
    borderRadius: 8,
    shadowColor: "#071c23",
    shadowOffset: { width: 0, height: 5},
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#000000",
    borderBottomWidth: 2,
    color: "#000000",
    marginVertical: 8,
    
  }
});

export default StartGameScreen;
