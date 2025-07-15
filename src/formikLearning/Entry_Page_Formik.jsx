import UI_Formik from "./UI_Formik";
import { Formik } from "formik";

export default function Entry_Page_Formik(){
    return(<>

        <Formik
            initialValues={{email:'', password:''}}
            validate={values =>{
                const errors = {};
                if(!values.email){
                    errors.email = 'required'
                }
                else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                    errors.email='Invalid email'
                }
                return errors;
            }}
            onSubmit={(values,{isSubmitting})=>{
                setTimeout(()=>{
                    alert(JSON.stringify(values, null, 2))
                },2000)
            }}
        >

            {({
                // values,
                // errors,
                // touched,
                // handleChange,
                // handleBlur,
                // handleSubmit,
                isSubmitting
            }) => (
                <UI_Formik 
                    // values={values}
                    // errors = {errors}
                    // touched = {touched}
                    // handleSubmit = {handleSubmit}
                    // handleChange = {handleChange}
                    isSubmitting = {isSubmitting}
                    // handleBlur = {handleBlur}
                />
            )
            }

        </Formik>
    </>)
}