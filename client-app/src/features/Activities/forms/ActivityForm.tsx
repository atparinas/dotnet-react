import { observer } from 'mobx-react-lite';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {Button, FormField, Label, Segment} from 'semantic-ui-react';
import LoadingComponents from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../stores/store';
import { v4 as uuid } from 'uuid';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import MyTextInput from "../../../app/common/form/MyTextInput";
import MyTextArea from "../../../app/common/form/MyTextArea";
import MySelectInput from "../../../app/common/form/MySelectInput";
import {categoryOptions} from "../../../app/common/options/categoryOptions";
import MyDateInput from "../../../app/common/form/MyDateInput";


const ActivityForm : React.FC = () => {

    const {activityStore} = useStore();
    const {loadActivity, 
        loading, createActivity, updateActivity, loadingInitial} = activityStore

    const {id} = useParams<{id: string}>()
    const history = useHistory();

    const [activity, setActivity] = useState({
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    })

    const validationSchema = Yup.object({
        title: Yup.string().required('Activity Title is required'),
        description: Yup.string().required('Activity Title is required'),
        category: Yup.string().required(),
        date: Yup.string().required(),
        venue: Yup.string().required(),
        city: Yup.string().required()
    })

    useEffect(() => {
        if(id) loadActivity(id).then(activity => setActivity(activity!))
    }, [id, loadActivity])


    // const handleSubmit = () => {
    //     // activity.id ? updateActivity(activity) : createActivity(activity);
    //     if(activity.id.length === 0){
    //
    //         const newActivity = {
    //             ...activity,
    //             id: uuid()
    //         }
    //
    //         createActivity(newActivity).then(() => history.push(`/activities/${newActivity.id}`))
    //
    //     }else {
    //
    //         updateActivity(activity).then(() => history.push(`/activities/${activity.id}`))
    //     }
    // }
    //
    // const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const {name, value} = event.target;
    //
    //     setActivity({...activity, [name]: value})
    // }

    if(loadingInitial) return <LoadingComponents content='Loading Activity..' />

    return (
        <Segment clearing>
            <Formik
                validationSchema={validationSchema}
                enableReinitialize
                initialValues={activity}
                onSubmit={values => console.log(values)}>

                {({handleSubmit}) => (
                    <Form className='ui form' onSubmit={handleSubmit} autoComplete='off' >
                        <MyTextInput placeholder='Title' name='title' />

                        <MyTextArea rows={3} name='description' placeholder='Description' />

                        <MySelectInput options={categoryOptions} name='category' placeholder='Category' />

                        <MyDateInput name='date' placeholderText='Date'
                                     showTimeSelect
                                     timeCaption='Time'
                                     dateFormat='MMMM d, yyyy h:mm aa' />

                        <MyTextInput name='city' placeholder='City' />

                        <MyTextInput name='venue' placeholder='Venue' />

                        <Button
                            loading={loading}
                            floated='right' positive type='submit' content='Submit' />
                        <Button
                            as={Link} to={id ? `/activities/${id}` : '/activities'}
                            floated='right' content='Cancel' />
                    </Form>
                )}
            </Formik>

        </Segment>
    )
}

export default observer(ActivityForm);