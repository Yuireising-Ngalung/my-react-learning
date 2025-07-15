import style from './style.module.css'

export default function RegistrationFormUI({formik, success, failed, setSuccess, setFailed}){
    return(<>
        <div className="formsWrapper bg-light px-3 d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            
            <div className={`${style.formContainer} rounded bg-white p-5 shadow`}>
                {
                    success &&
                        <div className='alert alert-success alert-dismissible fade show'  role='alert'>
                        <strong className='text-center'>{success}</strong>
                        <button 
                            type='button' 
                            className='btn-close' 
                            data-bs-dismiss='alert' 
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
                            data-bs-dismiss='alert' 
                            aria-label='close'
                            onClick={()=> setFailed(null)}
                        ></button>
                    </div>
                }
                
                <h1 className="text-center mb-3 text-uppercase">Signup</h1>
                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="email" className="fw-bold">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="example@test.com"
                            // onChange={formik.handleChange}
                            // value={formik.values.email} 
                            // onBlur={formik.handleBlur}

                            {...formik.getFieldProps('email')}
                        />
                        {(formik.errors.email && formik.touched.email) ? <p className='text-danger'>{formik.errors.email}</p>: null}
                        
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="password" className="fw-bold">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                            className="form-control" 
                            placeholder="password" 
                            // onChange={formik.handleChange}
                            // value={formik.values.password}
                            // onBlur={formik.handleBlur}
                            {...formik.getFieldProps('password')}
                        />
                        {(formik.errors.password && formik.touched.password) ? <p className='text-danger'>{formik.errors.password}</p>: null}
                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="confirmpassword" className="fw-bold">Confirm Password</label>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            id="confirmpassword" 
                            className="form-control" 
                            placeholder=" repeat password" 
                            {...formik.getFieldProps('confirmPassword')}
                            // onChange={formik.handleChange}
                            // value={formik.values.confirmPassword}
                            // onBlur={formik.handleBlur}
                        />
                        {(formik.errors.confirmPassword && formik.touched.confirmPassword) ? <p className='text-danger'>{formik.errors.confirmPassword}</p>: null}
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <button type="sutmit" className="btn btn-primary text-uppercase">submit</button>
                        <button type="button" onClick={()=> {formik.resetForm()}} className="btn btn-danger text-uppercase">Cancel</button>
                    </div>
                    <div className='mt-3'>
                        <p className='text-center fw-bold text-underline m-0'>DEMO:</p>
                        <p className='m-0'>
                            <strong>Email:</strong> <em>eve.holt@reqres.in</em> <strong>Password:</strong> <em>Any</em>  
                        </p>
                    </div>
                </form>
            </div>
        </div>
    </>)
}