import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../App.js";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isLogged, setAuth } = useContext(UserContext);
  function onSubmit(data) {
    console.log(data);
    setAuth();
  }
  console.log(isLogged);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Your username"
        {...register("username", {
          required: "omae wa mou shindeiru!",
          minLength: 6,
        })}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Your password"
        {...register("password", { required: "nani !", maxLength: 15 })}
      />
      <p style={{ color: "red" }}>
        {errors.username && errors.username.message}
      </p>
      <p style={{ color: "red" }}>
        {errors.password && errors.password.message}
      </p>

      {isLogged ? (
        <span className="btn btn-danger" onClick={onSubmit}>
          Logout
        </span>
      ) : (
        <button type="submit">Login</button>
      )}
    </form>
  );
}
