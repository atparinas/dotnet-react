import React from 'react';
import {useField} from "formik";
import {Form, Label} from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    label?: string;
}

const MyTextInput : React.FC<Props> = (props) => {

    const [field, meta] = useField(props.name)

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic pointing color='red' style={{marginTop: 10}}>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}

export default MyTextInput;