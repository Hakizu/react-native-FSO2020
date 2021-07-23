import SignInForm from './subComponents/SignInForm';
import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';

const initialValues= {
    username: '',
    password: '',
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
});

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };
    return (
        <Formik initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ handleSubmit }) => <SignInForm handleSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;