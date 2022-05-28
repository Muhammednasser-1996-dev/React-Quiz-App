import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@mui/material/IconButton'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useDispatch } from "react-redux";
import { storeUserData } from './service/redux/actions'



const Login = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false)
    const [UserName, setUserName] = useState('')
    const [RequiredNameError, setRequiredNameError] = useState(false)
    const [Email, setEmail] = useState('')
    const [EmailError, setEmailError] = useState(false)
    const [RequirdEmailError, setRequirdEmailError] = useState(false)
    const [Password, setPassword] = useState('')
    const [RequiredPassowrdError, setRequiredPassowrdError] = useState(false)
    const [ShowPassword, setShowPassword] = useState(false)


    const handleEmailChange = (e) => {
        const regex =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (regex.test(e.target.value) === false) {
            setEmailError(true)
            setEmail(e.target.value)
            setRequirdEmailError(false)
        } else {
            setRequirdEmailError(false)
            setEmailError(false)
            setEmail(e.target.value)
        }
    }


    const handleEmailBlure = (e) => {
        if (!(e.target.value === '')) {
            setEmail(e.target.value)
            setRequirdEmailError(false)
        } else {
            setRequirdEmailError(true)
        }
    }



    const handleNameBlure = (e) => {
        if (!(e.target.value === '')) {
            setUserName(e.target.value)
            setRequiredNameError(false)
        } else {
            setRequiredNameError(true)
        }
    }

    const handlePasswordBlure = (e) => {
        if (!(e.target.value === '')) {
            setPassword(e.target.value)
            setRequiredPassowrdError(false)
        } else {
            setRequiredPassowrdError(true)
        }
    }


    const isDisabled = () => {
        if (UserName && Email && Password) return false
        return true
    }


    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const Login = () => {
        setLoading(true)
        setTimeout(() => {
            let virtualToken = "dsf546sd4f654sdf1s65df465sdf.sdf8sd97fs6d5f45dfs64"
            dispatch(storeUserData({ UserName, accessToken: virtualToken }));
            setLoading(false)
        }, 3000);
    }


    return (
        <div className='login-form  shadow rounded border-left border-primary p-5'>
            <form className='form' >
                {/* begin::Heading */}
                <div className='text-center mb-10 '>
                    <h1 className='text-dark mb-3'> <FontAwesomeIcon icon={faSignInAlt} className="text-primary" /> <span className='me-2'> Sign in to start your quiz </span> </h1>
                </div>
                {/* begin::Heading */}
                <hr />
                {/* begin::Form group */}

                <div className="row">


                    {/* Name */}
                    <div className='col-sm-12'>
                        <div className='form-group'>
                            <input
                                type='text'
                                value={UserName}
                                className='form-control'
                                placeholder='User Name...'
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                }}
                                onBlur={(e) => {
                                    handleNameBlure(e)
                                }}
                            />
                        </div>
                        {RequiredNameError ? (
                            <div className='alert alert-danger mt-2' role='alert'>
                                Name is Required
                            </div>
                        ) : null}
                    </div>
                    {/* Name */}


                    {/* Email */}
                    <div className='col-sm-12 my-4'>
                        <div className='form-group'>
                            <input
                                type='text'
                                value={Email}
                                className='form-control'
                                placeholder='Email...'
                                onChange={(e) => {
                                    handleEmailChange(e)
                                }}
                                onBlur={(e) => handleEmailBlure(e)}
                            />
                        </div>
                        {EmailError ? (
                            <div className='alert alert-danger mt-2' role='alert'>
                                Email is not Valid
                            </div>
                        ) : null}
                        {RequirdEmailError ? (
                            <div className='alert alert-danger mt-2' role='alert'>
                                Email is Required
                            </div>
                        ) : null}
                    </div>
                    {/* Email */}


                    {/* password */}
                    <div className='col-md-12'>
                        <div className='form-group'>
                            <FormControl sx={{ width: '100%' }} variant='outlined'>
                                <InputLabel htmlFor='outlined-adornment-password'>Password</InputLabel>
                                <OutlinedInput
                                    id='outlined-adornment-password'
                                    type={ShowPassword ? 'text' : 'password'}
                                    value={Password}
                                    onChange={(e) => {
                                        setPassword(e.target.event)
                                    }}
                                    onBlur={(e) => handlePasswordBlure(e)}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label='toggle password visibility'
                                                onClick={() => {
                                                    setShowPassword(!ShowPassword)
                                                }}
                                                onMouseDown={handleMouseDownPassword}
                                                edge='end'
                                            >
                                                {ShowPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label='Password'
                                />
                            </FormControl>
                        </div>
                        {RequiredPassowrdError ? (
                            <div className='alert alert-danger mt-2' role='alert'>
                                Password is Required
                            </div>
                        ) : null}
                    </div>
                    {/* password */}


                    {/* begin::Action */}
                    <div className='text-center mt-3'>
                        <button type='button' id='kt_sign_in_submit' className='btn btn-lg btn-primary w-100 mb-5' onClick={Login}
                            disabled={isDisabled()}>
                            {!loading && <span className='indicator-label'>Continue</span>}
                            {loading && (
                                <span className='indicator-progress' style={{ display: 'block' }}>
                                    Please wait...
                                    <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
                                </span>
                            )}
                        </button>
                    </div>
                    {/* end::Action */}

                </div>
            </form>
        </div>

    );
}

export default Login;
