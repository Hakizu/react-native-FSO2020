import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
    SignIn: {
        backgroundColor: 'white',
        justifyContent: 'center',
        padding: 20,
        flexGrow: 1,
    },
    button: {
        margin: 5,
        padding: 5,
        textAlign: 'center',
    }
});

const SignInForm = ({ handleSubmit }) => {
    return (
        <View style={styles.SignIn}>
            <FormikTextInput
                name={'username'} placeholder="Username"
            />
            <FormikTextInput
                name='password' placeholder='Password' secure
            />
            <Pressable onPress={handleSubmit}>
                <Text backgroundPrimary='primary' style={styles.button}>
                    Sign In
                </Text>
            </Pressable>
        </View>
    );
};

export default SignInForm;
