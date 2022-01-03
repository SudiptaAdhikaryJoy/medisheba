import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const RequestService = () => {
    const { id } = useParams()
    // const { user } = useAuth()
    const [order, setOrder] = useState([])
    const find = order.find(item => item._id === id)
    console.log(find)
    console.log(id)

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        // const userEmail = user?.email
        const orderId = id
        const date = new Date()
        const information = { ...data, find, date, orderId }
        axios.post('https://medi-sheba-backend.herokuapp.com/addOrder', information)
            .then(res => {
                console.log(res)
                alert('sure to add?');
                reset();
            })
    };

    useEffect(() => {
        fetch('https://medi-sheba-backend.herokuapp.com/services?fbclid=IwAR3Eu13S7AEHpqDK5LGGwROc8wfX6F83yv2cOLfq4m4gYibjUDZoEVarNkg')
            .then(response => response.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap md:text-left text-center order-first">
                <div class="lg:w-1/2 md:w-1/2 w-full px-4">
                    <div class="mb-10 px-4">
                        <div class="rounded-lg h-64 overflow-hidden">
                            <img
                                alt="content"
                                class="object-cover object-center h-full w-full"
                                src={find?.image}
                            />
                        </div>
                        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                            {find?.name}
                        </h2>
                        <p class="leading-relaxed text-base">
                            {find?.description}
                        </p>
                    </div>

                </div>
                <div class="lg:w-1/2 md:w-1/2 w-full px-4">
                    <form onSubmit={handleSubmit(onSubmit)} style={{ paddingLeft: '25%' }}>
                        <input style={{ width: '60%', padding: '7px', fontSize: 15 }} placeholder="Your Name"  {...register("name")} required />
                        <br /><br />


                        <input style={{ width: '60%', padding: '7px', fontSize: 15 }} placeholder="Address"  {...register("address")} required />
                        <br /><br />

                        <input style={{ width: '60%', padding: '7px', fontSize: 15 }} placeholder="Contact Number" type="number"  {...register("contact")} required />
                        <br /><br />

                        <select style={{ width: '50%', padding: '3px', fontSize: 15 }} {...register("gender")}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="others">Others</option>
                        </select>
                        <br /><br />

                        <button type="submit" variant="outlined" sx={{ color: 'black', borderColor: 'text.primary' }}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RequestService;