import axios, {AxiosError, AxiosResponse} from 'axios';
import { Activity } from '../../models/activity';
import {toast} from "react-toastify";
import {history} from "../../index";
import {store} from "../../stores/store";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.response.use(async response => {
    console.log('On Fulfill');
    return response;
}, (error: AxiosError) => {

    const response = error.response;

    switch (response?.status) {
        case 400:
            if (response?.data.errors){
                const modalStateErrors = [];
                for(const key in response.data.errors){
                    if(response.data.errors[key]){
                        modalStateErrors.push(response.data.errors[key])
                    }
                }

                throw modalStateErrors.flat();
            }else {
                toast.error(response?.data);
            }
            break;
        case 401:
            toast.error('Unautorized');
            break;
        case 404:
            history.push('/not-found')
            break;
        case 500:
            store.commonStore.setServerError(response?.data)
            history.push('/server-error')
            break;
    }

    return Promise.reject(error)
})

const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const request = {
    get:  <T>  (url: string) => axios.get<T>(url).then(responseBody),
    post: <T> (url: string, body: {}) => axios.post<T>(url, body).then(responseBody),
    put:  <T> (url: string, body: {}) => axios.put<T>(url, url).then(responseBody),
    del:  <T> (url: string) => axios.delete<T>(url).then(responseBody),

}

const Activities = {
    list: () => request.get<Activity[]>('/activities'),
    details: (id: string) => request.get<Activity>('/activities/' + id),
    create: (activity: Activity) => request.post<void>('/activities', activity),
    update: (activity: Activity) => axios.put(`/activities/${activity.id}`, activity),
    delete: (id: string) => axios.delete(`/activities/${id}`)

}

const agent = {
    Activities
}

export default agent;