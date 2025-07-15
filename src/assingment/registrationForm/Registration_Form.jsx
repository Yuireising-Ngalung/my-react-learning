import { Formik, useFormik } from "formik";
import Registration_Form_UI from "./Registration_Form_UI";
import * as Yup from 'yup';
import axios from "axios";
import { useEffect, useState } from "react";

export default function Registration_Form(){

    const [success, setSuccess] = useState(null);
    const [failed, setFailed] = useState(null);

    // useEffect(()=> {
    // }, success, failed)

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/;
    
    const url = "https://reqres.in/api/register";

    const headers = {
        'x-api-key': 'reqres-free-v1'
    }

    const initialValues = {
        email:'',
        password: '',
        confirmPassword: ''
    }

    const onSubmit = (values) => {
        console.log(values);
        const payload = {
            'email' : values.email,
            'password': values.password
        }
        axios.post(url,payload,{headers: headers})
        .then(res => res.data)
        .then(data => setSuccess(`Register Successful.`))
        .catch(error => setFailed("Failed to register."))

    }



    const validationSchema = Yup.object({
        email: Yup.string()
                .required("Required")
                .email("Invalid Email"),
        password: Yup.string()
                .required("Required"),
                // .min(8, 'Password must be at least 8 characters')
                // .matches(passwordPattern, "Password must contain at least one uppercase letter, lowercase letter,  one number, one special character"),
        confirmPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref('password'),null], "Password and Confirm Password does not match")
    })


    // const validation = values => {
    //     let errors = {}

    //     const emailPattern = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email);

    //     if(!values.email){
    //         errors.email = "Required";
    //     }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
    //         errors.email = 'Invalid Email'
    //     }

    //     if(!values.password){
    //         errors.password = "Required"
    //     }

    //     if(!values.confirmPassword){
    //         errors.confirmPassword = "Required"
    //     }

    //     return errors;
    // }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })


    return(<>
        <Registration_Form_UI 
            formik = {formik}
            success = {success}
            failed = {failed}
            setSuccess = {setSuccess}
            setFailed = {setFailed}
        />
    </>)
}