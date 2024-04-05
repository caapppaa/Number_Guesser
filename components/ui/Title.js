import { StyleSheet } from "react-native";
import { Text } from "react-native";
import Colours from "../../constants/colours";

function Title({children}) {
    return <Text style={styles.title}>{children}</Text>
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colours.primaryDarkBlue,
        textAlign: "center",
        borderWidth: 2,
        borderColor: Colours.primaryDarkBlue,
        padding: 12,
        backgroundColor: Colours.primaryWhite
    }
});

export default Title;