import { View, Text, Pressable, StyleSheet } from "react-native";
import Colours from "../../constants/colours";

// If you use {} you can use object destructuring,
// Instead of writing props.children you can just write children
function PrimaryButton({ children, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? [styles.pressed] : styles.notPressed)
    }
    >
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colours.primaryButtonBlue,
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 2,
    shadowOpacity: 0.25,
    margin: 4,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
  notPressed: {
    opacity: 1,
  },
});

export default PrimaryButton;
