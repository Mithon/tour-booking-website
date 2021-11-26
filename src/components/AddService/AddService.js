import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://ghastly-coffin-90373.herokuapp.com/offers', data)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div className="add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("image")} placeholder="image url" />
                <input {...register("docName", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("text")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;