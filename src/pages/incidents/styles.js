import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Constants.statusBarHeight + 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    headerText: {
        fontSize: 15,
        color: '#737380'
    },
    headerTextBold: {
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        marginBottom: 16,
        marginTop: 10,
        color: '#13131a',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        lineHeight: 24,
        color: '#737380'
    },
    incidentList: {
        marginTop: 32,
    },
    incident: {
        paddingTop: 10,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom:  16
    },
    incidenProperty: {
        fontSize: 9,
        color: '#41414D',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }

})