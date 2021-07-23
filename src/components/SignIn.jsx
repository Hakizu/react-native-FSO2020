import SignInForm from './subComponents/SignInForm';
import { Formik } from 'formik';
import React from 'react';

const initialValues= {
    username: '',
    password: '',
};

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm handleSubmit={handleSubmit} />}
        </Formik>
    );
};

export default SignIn;