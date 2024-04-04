import { Text } from "react-native";
import { StyleSheet } from "react-native";
import Colours from "../../constants/colours";

function InstructionText({children, style }) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: 'open-sans',
    color: Colours.primaryButtonBlue,
    fontSize: 24,
  },
});

export default InstructionText;
