import React from 'react';
import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = ({text}) =>
    <Pressable onPress={() => {}}>
        <Text>
            {text}
        </Text>
    </Pressable>;

export default AppBarTab;