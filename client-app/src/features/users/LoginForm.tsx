import React from "react";
import {Form, Formik} from 'formik';
import MyTextInput from "../../app/common/form/MyTextInput";
import {Button} from "semantic-ui-react";

const LoginForm : React.FC = () => {

    return (
        <Formik
            initialValues={{email: '', password: ''}}
            onSubmit={values => console.log(values)}
        >
            {({handleSubmit}) => (
                <Form className='ui form' onSubmit={handleSubmit} autoComplete='off'>
                    <MyTextInput placeholder='Email' name='email' />
                    <MyTextInput placeholder='Password' name='password' type='password' />
                    <Button positive content='Login' type='submit' fluid />
                </Form>
            )}
        </Formik>
    )
}

export default LoginForm;