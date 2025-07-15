import style from './style.module.css';
import { Form, Field, ErrorMessage } from 'formik';


export default function Login_Form_Entry_Page_UI({success, failed, setSuccess, setFailed}){
    return(<>
        <div className="formsWrapper bg-light px-3 d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className={`${style.formContainer} rounded bg-white p-5 shadow`}>
                {
                    success &&
                    <div className='alert alert-success alert-dismissible fade show' role='alert'>
                        <strong>{success}</strong>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss = 'alert'
                            aria-label='close'
                            onClick={()=> setSuccess(null)}
                        ></button>
                    </div>
                }

                {
                    failed &&
                    <div className='alert alert-danger alert-dismissible fade show' role='alert'>
                        <strong>{failed}</strong>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss = 'alert'
                            aria-label='close'
                            onClick={()=> setFailed(null)}
                        ></button>
                    </div>
                }

                <h1 className="text-center mb-3 text-uppercase">Login</h1>
                <Form action="">
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="fw-bold">Email</label>
                        <Field type="email" name="email" id="email" className="form-control" placeholder="enter your email id" />
                        <ErrorMessage name='email' component='p' className='text-danger'/>
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password" className="fw-bold">Password</label>
                        <Field type="password" name="password" id="password" className="form-control" placeholder="enter your password" />
                        <ErrorMessage name='password'component='p' className='text-danger'/>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <button type="sutmit" className="btn btn-primary text-uppercase">Login</button>
                        <button type="reset" className="btn btn-danger text-uppercase">Cancel</button>
                    </div>
                    <div className='mt-3'>
                        <p className='text-center fw-bold text-underline m-0'>DEMO:</p>
                        <p className='m-0'>
                            <strong>Email:</strong> <em>eve.holt@reqres.in</em> <strong>Password:</strong> <em>Any</em>  
                        </p>
                    </div>
                    
                </Form>
            </div>
        </div>
    </>)
}