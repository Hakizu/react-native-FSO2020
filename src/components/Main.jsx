import React from 'react';
import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import HelloWorld from './world';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <Text>Rate Repository Application</Text>
            <HelloWorld/>
            <RepositoryList/>
        </View>
    );
};

export default Main;