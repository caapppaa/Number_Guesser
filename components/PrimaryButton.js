import { View, Text } from "react-native";

// If you use {} you can use object destructuring,
// Instead of writing props.children you can just write children
function PrimaryButton({children}) {
    return (
    <View>
        <Text>{children}</Text>
    </View>
    );
}



export default PrimaryButton;