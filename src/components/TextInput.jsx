import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        margin: 5,
        borderWidth: 2,
        borderColor: 'lightgrey',
        borderRadius: 3,
        padding: 5,
        textAlign: 'center',
    },
    error: {
        borderColor: '#d73a4a',
    }
});

//eslint-disable-next-line
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
        styles.input,
        error && styles.error,
        style
    ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;