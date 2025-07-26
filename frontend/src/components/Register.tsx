import {useForm, type SubmitHandler} from "react-hook-form";
import { Link } from "react-router-dom";
import { handleRegister } from "../services/auth";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

type RegisterFormType = {
  email: string;
  username: string;
  password: string;
};

function Register() {
  const auth = useAuth();
  const [message, setMessage] = useState("");
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterFormType>();
  
    const onSubmit: SubmitHandler<RegisterFormType> = (data) => {
      handleRegister(data, setMessage, auth?.login);
    }
  return (
    <div className='grow flex flex-col items-center gap-y-4 w-5/6 sm:w-2/5'>
      <h1 className='text-4xl font-semibold mb-6'>Register</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 w-full">
        <div className="flex flex-col gap-y-1">
          <input
            type="email"
            {...register("email", { required: "This field is required" })}
            className="outline-none border-primary border py-1 px-2 rounded-sm"
            placeholder="Email Address"
          />
          <span
            className={`text-xs ${
              errors.email ? "text-red-500" : "text-transparent"
            }`}
          >
            {errors.email?.message}.
          </span>
        </div>
        
        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            {...register("username", { required: "This field is required" })}
            className="outline-none border-primary border py-1 px-2 rounded-sm"
            placeholder="Username"
          />
          <span
            className={`text-xs ${
              errors.username ? "text-red-500" : "text-transparent"
            }`}
          >
            {errors.username?.message}.
          </span>
        </div>
        
        <div className="flex flex-col gap-y-1">
          <input
            type="password"
            {...register("password", { required: "This field is required" })}
            className="outline-none border-primary border py-1 px-2 rounded-sm"
            placeholder="Password"
          />
          <span
            className={`text-xs ${
              errors.password ? "text-red-500" : "text-transparent"
            }`}
          >
            {errors.password?.message}.
          </span>
        </div>

        <button
          type="submit"
          disabled={message=="Submitting.."}
          className="bg-ink hover:bg-ink/80 transition-colors duration-300 text-background py-1 px-2 rounded-sm"
        >
          Submit
        </button>
      </form>
      <div className="flex justify-between w-full">
            <p>Already have an account?</p>
            <Link to={"/login"} className="border-b border-b-ink hover:text-primary hover:border-b-primary transition-colors duration-150">Login</Link>
      </div>
      <h3 className="text-lg text-center">{message}</h3>
    </div>
  )
}

export default Register