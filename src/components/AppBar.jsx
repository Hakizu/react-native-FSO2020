import React from 'react';
import { View } from 'react-native';
import theme from '../theme';
import AppBarTab from './subComponents/AppBarTab';

const AppBar = () => {
    return (
        <View style={theme.appBar}>
            <AppBarTab text={'Repositories'}/>
        </View>
    );
};

export default AppBar;