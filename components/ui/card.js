import { View } from "react-native";
import { StyleSheet } from "react-native";
import Colours from "../../constants/colours";

function Card({children}) {
    return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: Colours.primaryWhite,
        borderRadius: 8,
        shadowColor: "#071c23",
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
});

export default Card;