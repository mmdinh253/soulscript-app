import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "../App.css";
import "./Login.css";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));

        if (userData && userData.password === data.password) {
            console.log(userData.name + " You are successfully logged in!");
            navigate("/home");
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };

    const navigate = useNavigate();

  return (
    <>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
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
                {errors.password && (
                    <span className="error">Password is required</span>
                )}

                <button type="submit">Login</button>

                <div className="remember">
                    <input type="checkbox" {...register("remember")} />
                    <label>Remember me</label>
                </div>
            </form>

            <p style={{ marginTop: "16px", textAlign: "center" }}>
                <Link to="/register">Create an account</Link>
            </p>

            <span className="psw">
                Forgot <a href="#">password?</a>
            </span>
        </div>
    </>
  );
}

export default Login;