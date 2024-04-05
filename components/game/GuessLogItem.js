import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colours from "../../constants/colours";


function GuessLogItem({roundNumber, guess}) {
    return ( <View style={styles.listItem}>
        <Text style={styles.itemText}>#{roundNumber}</Text>
        <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colours.primaryButtonBlue,
        borderWidth: 1,
        borderRadius: 40,
        padding: 12,
        marginVertical: 8,
        backgroundColor: Colours.primaryLightBlue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        shadowColor: Colours.primaryBlack,
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.25,
        shadowRadius: 6
    },
    itemText: {
        fontFamily: 'open-sans'
    }
});

export default GuessLogItem;