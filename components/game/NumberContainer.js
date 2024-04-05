import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import Colours from "../../constants/colours";

function NumberContainer ({children}) {
    return (
        <View style={styles.container}> 
            <Text style={styles.numberText}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colours.primaryDarkBlue,
        padding: 24, 
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center', 
        backgroundColor: '#ffffff'
    },
    numberText: {
        color: Colours.primaryDarkBlue,
        fontSize: 36,
        fontFamily: 'open-sans-bold'
    }
})

export default NumberContainer;