import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    appBar: {
        width: '100%',
        backgroundColor: 'black',
        paddingVertical: 15,
        alignItems: 'center',
        marginBottom: 7.5,
    },
    appBarTitle: {
        width: '100%',
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        alignItems: 'center'
    },
    appBarLeadingIcon: {
        position: 'absolute',
        left: 16,
        top: 15,
        padding: 10,
        borderRadius: 50,
        backgroundColor: '#ff3333'
    },
    rating: {
        backgroundColor: 'orange',
        borderRadius: 50,
        paddingVertical: 5,
        width: 70,
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    ratingContainer: {
        flexDirection: 'row',
        paddingLeft: 20,
    },
    tag: {
        backgroundColor: '#ff3333',
        borderRadius: 50,
        paddingVertical: 5,
        marginLeft: 5,
        width: 70,
        alignItems: 'center',
    },
});