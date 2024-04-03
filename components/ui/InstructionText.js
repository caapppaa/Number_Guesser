import { Text } from "react-native";
import { StyleSheet } from "react-native";
import Colours from "../../constants/colours";

function InstructionText({children}) {
  return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colours.primaryButtonBlue,
    fontSize: 24,
  },
});

export default InstructionText;
