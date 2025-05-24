import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import FormInput from "../Components/FormInput";
import SubmitBtn from "../Components/SubmitBtn";
import { toast } from "react-toastify";
import { customFetch } from "../utils.js";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post("/auth/local/register", data);
    console.log(response);
    toast.success("Account created successfully");
    redirect("/");
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message || "Please enter valid credentials";
    toast.error(errorMessage);
  }
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="name" label="UserName" name="username" />
        <FormInput type="email" label="Email" name="email" />
        <FormInput type="password" label="Password" name="password" />

        <div className="mt-4">
          <SubmitBtn text="Register" />
          <button type="button" className="btn btn-secondary btn-block ">
            Guest User
          </button>
        </div>

        <p className="text-center">
          Already a member ?{" "}
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};

export default Register;
