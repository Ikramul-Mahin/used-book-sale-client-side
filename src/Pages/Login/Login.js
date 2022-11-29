import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hook/useToken';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { loginUser, forgetUser, user } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'


    const handleLogin = data => {
        console.log(data)
        setLoginError('')
        loginUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                setLoginUserEmail(data.email)
                navigate(from, { replace: true })
                toast.success('Successfully Loged In')

            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message)
            })

    }
    const handleForget = (data) => {
        console.log(data)
        forgetUser(data.email)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.error(err))
    }
    if (user) {
        navigate(from, { replace: true })
    }
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true })
        }
    }, [from, navigate, token])
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center my-6'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='email'
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: "Email Address is required"
                            })} />
                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type='password'
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: "Password is Required",
                                minLength: { value: 5, message: 'Password must 5 char or Longer.' }
                            })} />
                        {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
                        <label className="label"> <span onClick={handleForget} className="label-text">Forget Password!</span> </label>
                    </div>

                    {/* <p>{data}</p> */}
                    <input className='btn w-full mt-4 bg-cyan-700' value='LogIn' type="submit" />
                    <div>
                        {loginError && <p>{loginError}</p>}
                    </div>
                </form>
                <p>New to Used Book Shop <Link to='/signup' className='text-cyan-500'>Create New Account</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <button className='btn btn-outline w-full'>Countinue With Google</button>
            </div>
        </div>
    );
};

export default Login;