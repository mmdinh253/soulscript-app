import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../App.css"

function Register() {

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const existingUser = JSON.parse(localStorage.getItem(data.email));

        if (existingUser) {
            console.log("Email is already registered");
        } else {
            const userData = {
                name: data.name,
                email: data.email,
                password: data.password,
            };

            localStorage.setItem(data.email, JSON.stringify(userData));
            console.log(data.name + " has been suggessfully registered");
        
            navigate("/");
        }
    };

    return (
        <>
            <h2>Registration Form</h2>
            <h2 style={{ textAlign: "center" }}>Create an account</h2>

            <div className="container">
                <form className="App" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                        placeholder="Name"
                    />
                    {errors.email && <span className="error">Name is required</span>}

                    <input
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Email"
                    />
                    {errors.email && <span className="error">Email is required</span>}


                    <input
                        type="password"
                        {...register("password", { required: true })}
                        placeholder="Password"
                    />
                    {errors.email && <span className="error">Password is required</span>}
                    <button type="submit">
                        <Link to="/home">Submit</Link>
                    </button>
                </form>
            </div>
        </>
    )
}

export default Register;