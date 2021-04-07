import React from 'react';
import {useField} from "formik";
import {Form, Label} from "semantic-ui-react";
import DatePicker, {ReactDatePickerProps} from "react-datepicker";

interface Props {
    placeholder: string;
    name: string;
    label?: string;
}

/**
 * Set the ReactDatePickerProps as Partial to make all the properties optional
 *
 */
const MyDateInput : React.FC<Partial<ReactDatePickerProps>> = (props) => {

    const [field, meta, helpers] = useField(props.name!)

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <DatePicker
                {...field}
                {...props}
                selected={(field.value && new Date(field.value)) || null}
                onChange={value => helpers.setValue(value)}
            />
            {meta.touched && meta.error ? (
                <Label basic pointing color='red' style={{marginTop: 10}}>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}

export default MyDateInput;