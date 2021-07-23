import React from 'react';
import { View } from 'react-native';
import theme from '../theme';
import AppBarTab from './subComponents/AppBarTab';

const AppBar = () => {
    return (
        <View style={theme.appBar}>
            <AppBarTab text={'Sign In'}linkTo='/SignIn'/>
            <AppBarTab text={'Repositories'} linkTo='/'/>
        </View>
    );
};

export default AppBar;