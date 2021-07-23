import React from 'react';
import { Pressable } from 'react-native';
import { Link } from 'react-router-native';
import Text from '../Text';


const AppBarTab = ({text, linkTo}) =>
    <Pressable>
        <Link to={linkTo}>
            <Text>
                {text}
            </Text>
        </Link>
    </Pressable>;

export default AppBarTab;