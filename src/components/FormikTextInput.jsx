import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
    erorrText: {
        marginTop: 5,
    },
});

const FormikTextInput = ({ name, secure, ...props }) => {
    const [field, meta, helpers] = useField(name);
    const showError = meta.touched && meta.error;

    return (
        <>
            <TextInput
                onChangeText={value => helpers.setValue(value)}
                onBlur={() => helpers.setTouched(true)}
                value={field.value}
                error={showError}
                secureTextEntry={secure}
                {...props}
            />
            {showError &&
                <Text style={styles.erorrText}>
                    {meta.error}
                </Text>}
        </>
    );
};

export default FormikTextInput;