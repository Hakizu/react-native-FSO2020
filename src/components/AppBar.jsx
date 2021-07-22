import React from 'react';
import { View } from 'react-native';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const AppBar = () => {
    return (
        <View style={theme.Appbar}>
            <AppBarTab text={'Repositories'}/>
        </View>
    );
};

export default AppBar;