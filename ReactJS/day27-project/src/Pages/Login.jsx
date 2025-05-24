import React from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import FormInput from "../Components/FormInput";
import SubmitBtn from "../Components/SubmitBtn";
import { customFetch } from "../utils.js";
import { toast } from "react-toastify";
import { logInUser } from "../features/User/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(logInUser(response.data));
      toast.success("LoggedIn successfully");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please enter valid credentials";
      toast.error(errorMessage);
    }
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guestUserLogin = () => {
    try {
      const data = {
        user: {
          username: "Guest Golu",
          email: "test@test.com",
        },
        jwt: Date.now(),
      };

      dispatch(logInUser(data));
      toast.success("LoggedIn successfully");
      return navigate("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "Please enter valid credentials";
      toast.error(errorMessage);
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          label="Password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="Login" />
          <button
            onClick={guestUserLogin}
            type="button"
            className="btn btn-secondary btn-block"
          >
            Guest User
          </button>
        </div>
        <p className="text-center">
          Not a member yet?{" "}
          <Link
            className="ml-2 link link-hover link-primary capitalize"
            to="/register"
          >
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Login;
