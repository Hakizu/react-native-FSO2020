import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#e1e4e8',
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar/>
            <View style={styles.container}>
                <RepositoryList/>
            </View>
        </View>
    );
};

export default Main;