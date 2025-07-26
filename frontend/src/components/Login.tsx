import { useAuth } from "../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { handleLogin } from "../services/auth";
import { useEffect, useState } from "react";

type LoginFormType = {
  email: string;
  password: string;
};

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (auth && auth.isAuthenticated && (auth.role === "ADMIN" || auth.slug)) {
      if (auth.role === "ADMIN") navigate("/admin");
      else navigate(`/manage/${auth.slug}`);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormType>();

  const onSubmit: SubmitHandler<LoginFormType> = (data) => {
    handleLogin(data, setMessage, auth?.login);
  };

  return (
    <div className="grow flex flex-col items-center gap-y-4 w-5/6 sm:w-2/5">
      <h1 className="text-4xl font-semibold mb-6">Login</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-2 w-full"
      >
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
          className="bg-ink hover:bg-ink/80 transition-colors duration-300 text-background py-1 px-2 rounded-sm"
          disabled={message === "Submitting.."}
        >
          Submit
        </button>
      </form>
      <div className="flex justify-between w-full">
        <p>Don&apos;t have an account?</p>
        <Link
          to={"/register"}
          className="border-b border-b-ink hover:text-primary hover:border-b-primary transition-colors duration-150"
        >
          Register
        </Link>
      </div>
      <h3 className="text-lg text-center">{message}</h3>
    </div>
  );
}

export default Login;
