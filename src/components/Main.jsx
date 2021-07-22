import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import HelloWorld from './world';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <>
            <AppBar/>
            <View style={styles.container}>
                <Text>Rate Repository Application</Text>
                <HelloWorld/>
                <RepositoryList/>
            </View>
        </>
    );
};

export default Main;