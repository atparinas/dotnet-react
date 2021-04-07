import React from 'react';
import {useField} from "formik";
import {Form, Label, Select} from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    label?: string;
    options: any
}

const MySelectInput : React.FC<Props> = (props) => {

    const [field, meta, helpers] = useField(props.name)

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Select clearable
                    options={props.options}
                    value={field.value || null}
                    onChange={(event, data) => helpers.setValue(data.value)}
                    onBlur={() => helpers.setTouched(true)}
                    placeholder={props.placeholder}
            />
            {meta.touched && meta.error ? (
                <Label basic pointing color='red' style={{marginTop: 10}}>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}

export default MySelectInput;