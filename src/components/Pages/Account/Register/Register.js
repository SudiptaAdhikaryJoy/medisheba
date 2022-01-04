import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Alert from '../../../Shared/Alert/Alert';

import Preloader from '../../../Shared/Preloader/Preloader';


const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading } = useAuth();

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        e.preventDefault();
        if(loginData.password !== loginData.password2){
            alert('did not match');
            return;
        }
        registerUser(loginData.email, loginData.password);
    }
    return (
        <>
            <div className="min-h-screen pt-12 md:pt-20 pb-6 px-2">
                <section className="bg-white dark:bg-gray-100 mx-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
                    <div className="">
                    <h2 className="text-center hover:text-center font-bold text-2xl animate__animated animate__bounce animate__faster">Welcome To MediSheba</h2>
                    <p className="text-center hover:text-center text-gray-500 pt-2">Register Here</p>
                </div>
                {/* form part */}
                <div className="mt-10">
                    {!isLoading && <form className="flex flex-col mx-auto w-fit" action="" onSubmit={handleLoginSubmit}>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 w-fit" htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                                onChange={handleOnChange}
                                />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 w-fit" htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email"
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                                name='email'
                                onChange={handleOnChange}
                                />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 w-fit" htmlFor="password">Password</label>
                            <input
                                type="password" 
                                id="password" 
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                                name='password'
                                onChange={handleOnChange}
                                />
                        </div>
                        <div className="mb-6 pt-3 rounded bg-gray-200">
                            <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 w-fit" htmlFor="password">Confirm Password</label>
                            <input
                                type="password" 
                                id="password" 
                                className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3" 
                                name='password2'
                                onChange={handleOnChange}
                                />
                        </div>
                        {/* <div className="flex justify-end">
                            <a href="" className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot your passcode?</a>
                        </div> */}
                        <button className="mt-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-1 px-3 rounded shadow-lg hover:shadow-xl transition ease-in-out duration-200 hover:-translate-y-1 hover:scale-110" type='submit'>Register</button>
                    <NavLink to="/login"><button className="mt-3 text-sky-700">Already an User? Please Login</button></NavLink>
                    </form>}
                    {isLoading && <Preloader></Preloader>}
                    {/* {user?.email && <Alert/>} */}
                </div>
                </section>
            </div>
        </>
    );
};

export default Register;