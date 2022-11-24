import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { createUser, userUpdate } = useContext(AuthContext)
    const [signUpError, setSignUPError] = useState('')

    // const [createdUserEmail, setCreatedUserEmail] = useState('')
    // const [token] = useToken(createdUserEmail)
    // const navigate = useNavigate();
    // if (token) {
    //     navigate('/')
    // }

    const handleSignUp = (data) => {
        setSignUPError('');
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);

                const userInfo = {
                    displayName: data.name
                }
                userUpdate(userInfo)
                    .then(() => {
                        saveUser(data.email, data.name)
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
    }
    const saveUser = (email, name) => {
        const user = { email, name };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            })
    }


    return (

        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center my-6'>Sign-Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)} >


                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span> </label>
                        <input type='text'
                            className="input input-bordered w-full max-w-xs"
                            {...register("name", {
                                required: 'name is required'
                            })}
                        />
                        {errors.name && <p className='text-red-700'>{errors.name?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span> </label>
                        <input type='email'
                            className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: "Email is required"
                            })}
                        />
                        {errors.email && <p className='text-red-700'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span> </label>
                        <input type='password'
                            className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: 'Password is Required',
                                minLength: { value: 6, message: 'password must be 6 char and lobk' },
                                pattern: {
                                    value: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!#@$&*])/, message: 'Password Must Be Strong'
                                }
                            })}
                        />
                        {errors.password && <p className='text-red-700'>{errors.password?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Select If you are Seller!</span> </label>
                        <select className=' border p-4' {...register("purpose")}>
                            <option value="user">User</option>
                            <option value="seller">Seller</option>

                        </select>
                    </div>

                    <input className='btn w-full mt-4 bg-cyan-700' value='Please Sign Up' type="submit" />
                    {signUpError && <p className='text-red-700'>{signUpError}</p>}

                </form>
                <p>New to Doctors Portal <Link to='/login' className='text-cyan-500'>Already Have an Account</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <button className='btn btn-outline w-full'>Countinue With Google</button>
            </div>
        </div>
    );
};

export default SignUp;