import { ErrorMessage, Field, Form } from "formik";


export default function UIFormik({
    isSubmitting
}){
    return(<>
        <div className="formContainer">
            <h1 className="formHeader">Registration Form</h1>
            
            <Form>
                <div className="form-group">
                    <Field type="text" name="email" className='form-control' placeholder="enter you email id" />
                    <ErrorMessage name="email"  />
                </div>
                
                <div className="form-group">
                    <Field type="text" name="password" className='form-control' placeholder='enter you password' />
                    <ErrorMessage name="password" />
                </div>
                

                <button type="submit" disabled={isSubmitting} className="btn btn-primary">Submit</button>
            </Form>
            
        </div>
    </>)
}