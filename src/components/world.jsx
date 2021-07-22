import React from 'react';
import { Alert, Pressable, Text } from 'react-native';

const HelloWorld = () => {
    return (
        <Pressable
            onPress={() => Alert.alert('You pressed this text!')}
        >
            <Text>You can press me!</Text>
        </Pressable> 
    );
};

export default HelloWorld;