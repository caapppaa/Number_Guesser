import { StyleSheet, Platform, Text } from "react-native";
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
        borderWidth: Platform.OS === 'ios' ? 2 : 0,
        borderColor: Colours.primaryDarkBlue,
        padding: 12,
        backgroundColor: Colours.primaryWhite,
        maxWidth: '80%',
        width: 300
    }
});

export default Title;