import './Register.css'
import { Formik } from "formik"
import * as yup from 'yup'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Register({setPage, setData, data}) {
    const [come, setCome] = useState(false)
    const navigate = useNavigate()
    const validationSchema = yup.object().shape({
        name: yup.string().typeError('must be a string').required("can't be empty"),
        email: yup.string().email('please enter a valid email').required("can't be empty"),
        password: yup.string().typeError('must be a string').required("can't be empty"),
        confirmPassword: yup.string().typeError('must be a string').oneOf([yup.ref('password')], "passwords don't match").required("can't be empty"),
    })
    useEffect(() => {
        setCome(true)
       }, [])
    // console.log(data);
  return (
    <div className='login'>
        <div className='loginImage'></div>
        <div className='logg'>
            <div className='logg1'>
                <h2 className='log-h2'>Registration</h2>
                <p className='line5'></p>
                <Formik
                  initialValues={{
                      name: '',
                      email: '',
                      password: '',
                      confirmPassword: ''
                  }}

                  onSubmit={(values, {resetForm}) => {
                      setData(data =>[
                          ...data,
                          values
                      ])
                      console.log(values)
                      setPage('log')
                      resetForm()
                  }}

                  validateOnBlur

                  validationSchema={validationSchema}
                >
                   {
                   ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                       <form className="form" onSubmit={handleSubmit}>
   
                           <div className='main'>
                               
                               <input 
                                 className="inputLog" 
                                 type='text'
                                 name='name'
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.name}
                                 placeholder='name'
                               />
   
                               {touched.name && errors.name && <p className="errorLog">{errors.name}</p>}
   
                           </div>


                           <div>
                               
                               <input 
                                 className="inputLog" 
                                 type='text'
                                 name='email'
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.email}
                                 placeholder='email'
                               />
   
                               {touched.email && errors.email && <p className="errorLog">{errors.email}</p>}
   
                           </div>


                           <div>
   
                               <input 
                                 className="inputLog" 
                                 type='text'
                                 name='password'
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.password}
                                 placeholder='password'
                               />
   
                               {touched.password && errors.password && <p className="errorLog">{errors.password}</p>}
   
                           </div>


                           <div>
   
                               <input 
                                 className="inputLog" 
                                 type='text'
                                 name='confirmPassword'
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.confirmPassword}
                                 placeholder='confirm Password'
                               />
   
                               {touched.confirmPassword && errors.confirmPassword && <p className="errorLog">{errors.confirmPassword}</p>}
   
                           </div>
                           <button
                           onClick={() => navigate(-1)}
                           className="btn-11"
                           disabled={!isValid && !dirty}
                           type='submit'
                           >Sign up</button>
                        </form>
                    )
                    }
                </Formik>
            </div>
        </div>
    </div>
  )
}

export default Register
