import axios from "axios";
import Login_Form_Entry_Page_UI from "./Login_Form_Entry_Page_UI";
import { Formik, validateYupSchema } from "formik";
import { useState } from "react";
import * as Yup from 'yup'

export default function Login_Form(){

    const [success, setSuccess] = useState();
    const [failed, setFailed] = useState();

    const url = 'https://reqres.in/api/login'
    const header = {
        'x-api-key': 'reqres-free-v1'
    }

    const initialValues = {
        email: '',
        password: ''
    }

    const onSubmit = async (values) => {
        console.log(values)
        const payload = {
            email:values.email,
            password: values.password
        }

        axios.post(url, payload, {
            headers: header
        })
        .then(res => res.data)
        .then(data => setSuccess(`Login Successful`))
        .catch(error => setFailed(`Please checked your credentials`))
    }



    const validationSchema = Yup.object({
        email: Yup.string().required("required").email("Invalid email"),
        password: Yup.string().required("required")
    })

    return(<>
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <Login_Form_Entry_Page_UI 
                success = {success}
                failed = {failed}
                setSuccess = {setSuccess}
                setFailed = {setFailed}
            />
        </Formik> 
    </>)
}