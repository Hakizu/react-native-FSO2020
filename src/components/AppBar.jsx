import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import theme from '../theme';
import AppBarTab from './subComponents/AppBarTab';

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        justifyContent: 'space-evenly'
    },
});

const AppBar = () => {
    return (
        <View style={theme.appBar}>
            <ScrollView contentContainerStyle={styles.scrollView} horizontal centerContent>
                <AppBarTab text={'Sign In'}linkTo='/SignIn'/>
                <AppBarTab text={'Repositories'} linkTo='/'/>
            </ScrollView>
        </View>
    );
};

export default AppBar;