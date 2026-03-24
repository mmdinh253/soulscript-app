import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      Hello!
      <button class="button">Logout</button>
      <Navbar/>
    </div>
  )
}

export default Home;
