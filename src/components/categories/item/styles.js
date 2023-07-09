import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        height: 100,
        justifyContent: 'flex-end',
        borderRadius: 10,
    },
    categoryName: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 6,
    }
})