import './Login.css'
import { Formik } from "formik"
import * as yup from 'yup'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Register from '../Register/Register'
import axios from 'axios'

function Login({setData, data, setCurrentUser}) {
    const [come, setCome] = useState(false)
    const [logToReg, setLogToReg] = useState(true)
    const [logToUniqGood, setLogToUniqGood] = useState(false)
    const navigate = useNavigate()


    const validationSchema = yup.object().shape({
        email: yup.string().email('please enter a valid email').required("can't be empty"),
        password: yup.string().typeError('must be a string').required("can't be empty")
    })
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          const data = response.data.map(e => ({
            id: e.id.toString(),
            name: e.name,
            email: e.email.toLowerCase(),
            password: e.address.city.toLowerCase()
           }))
            setData([...data])
          })
        .catch(() => {
          navigate('/error')
        })
    }, [])
    useEffect(() => {
     setCome(true)
    }, [])
    console.log(data)
  return (
    <div className='login'>
        <div className='loginImage' style={{display: `${logToReg ? '' : 'none'}`}}></div>
        <div className='log' style={{display: `${logToReg ? '' : 'none'}`}}>
            <div className='log1'  style={{marginLeft: `${come ? '0' : '-400px'}`}}>
                <h1 className='h1-2'>Hi, welcome back!</h1>
                <p className='line5'></p>
                <h2 className='log-h2'>Sign in to your account</h2>
                <Formik
                   initialValues={{
                       email: '',
                       password: ''
                    }}

                    onSubmit={(values, {resetForm}) => {
                        if(data.some(user => user.email === values.email && user.password === values.password)) {
                           setCurrentUser(data.find(e => e.email === values.email && e.password === values.password))
                           setLogToUniqGood(true)
                        }
                        resetForm()
                    }}

                    validateOnBlur

                    validationSchema={validationSchema}
                    >
                    {
                      ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty}) => (
                          <form className="form" onSubmit={handleSubmit}>
                              <div>
                                  
                                  <input 
                                    className="inputLog" 
                                    type='text'
                                    name='email'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    placeholder='email address'
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

                              <button
                              onClick={logToUniqGood ? () => navigate('/shop') : () => navigate('/login')}
                              className="btn-1"
                              disabled={!isValid && !dirty}
                              type='submit'
                              >Log in</button>
                            </form>
                        )
                    }
                </Formik>
                <button className='btn-11' onClick={() => setLogToReg(false)}>Don't have an account? Sign up</button>
            </div>
            <div className='log2' style={{marginRight: `${come ? '0' : '-400px'}`}}>
              <div className='log21'></div>
            </div>
        </div>
        <div style={{display: `${logToReg ? 'none' : ''}`}}>
          <Register setData={setData} data={data}/>
        </div>
        <div className='loginImage2'></div>
    </div>
  )
}

export default Login