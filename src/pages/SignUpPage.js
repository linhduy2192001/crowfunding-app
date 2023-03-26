import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";
import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import FormGroup from "../components/common/FormGroup";
import { Input } from "../components/Input";
import { Label } from "../components/label";
import LayoutAuthentication from "../layout/LayoutAuthentication";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { IconEyesToggle } from "../components/icon";
import useToggleValue from "../hooks/useToggleValue";

const schema = yup.object({
  name: yup.string().required("This field is required"),
  email: yup
    .string()
    .email("Invalid email address")
    .required("This field is required"),
  password: yup
    .string()
    .min(8, "Password must be 8 character ")
    .required("This field is required "),
});

const SignUpPage = () => {
  const { value: acceptTerm, handleToggleValue: handleToggleTerm } =
    useToggleValue();
  const { value: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });
  const handleSingUp = (values) => {
    console.log("values", values);
  };

  return (
    <LayoutAuthentication heading="Sign up">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{" "}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border dark:border-darkStroke dark:text-white border-strock rounded-xl text-text2 gap-x-3">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 text-text2 dark:text-white">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSingUp)}>
        <FormGroup>
          <Label htmlFor="name">Full name*</Label>
          <Input
            control={control}
            name="name"
            placeholder=" Jhon Doe"
            error={errors.name?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyesToggle open={showPassword} onClick={handleTogglePassword}>
              {" "}
            </IconEyesToggle>
          </Input>
        </FormGroup>
        <div className="flex items-start mb-5 gap-x-5">
          <Checkbox
            name="term "
            checked={acceptTerm}
            onClick={handleToggleTerm}
          >
            {" "}
            <p className="flex-1 text-xs lg:text-sm text-text2 dark:text-text3">
              I agree to the{" "}
              <span className="underline text-secondary">Tearms of Use</span>{" "}
              and have read and understand the{" "}
              <span className="underline text-secondary">Privacy policy.</span>
            </p>
          </Checkbox>
        </div>
        <Button className="w-full bg-primary " type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
