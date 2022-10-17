import { Button, Input } from "antd";
import { useFormik } from "formik";
import React from "react";
import { useState } from "react";
import styles from "./style.module.css";
import * as yup from "yup";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import instance from "../../../../api/instance";
import { fetchUserDetailAction, SET_ID, SET_PROFILE, SET_Profile_User } from "../../action";

const schema = yup.object({
  email: yup.string().required("*Trường này bắt buộc nhập"),
  password: yup.string().required("*Trường này bắt buộc nhập"),
});


function Signin() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signIn(values);
     
    },
    validationSchema: schema,
  });

  const signIn = async (user) => {
    try {
      setIsLoading(true);
      const res = await instance.request({
        url: "/api/auth/signin",
        method: "POST",
        data: user,
      });

      const profile = { ...res.data.content };
      delete profile.accessToken;
 
      localStorage.setItem("id", res.data.content.user.id);
      localStorage.setItem("token", res.data.content.token);
    
      dispatch(fetchUserDetailAction(profile.user.id ));
      history.push("/Rooms");
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className={styles.title}>Sign In</h2>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <Input
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
          type="text"
          placeholder="Username"
        />
        {formik.touched.email && formik.errors.email && (
          <p className={styles.errorText}>{formik.errors.email}</p>
        )}

        <Input
          name="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={styles.input}
          type="password"
          placeholder="Password"
        />
        {formik.touched.password && formik.errors.password && (
          <p className={styles.errorText}>{formik.errors.password}</p>
        )}

        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Signin;
