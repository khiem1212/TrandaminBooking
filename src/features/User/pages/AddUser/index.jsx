


import { Button, Form, Input, Select } from "antd";
import React from "react";
import styles from "./style.module.css";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAddUser, fetchUserDetailAction } from "../../action";
import instance from "../../../../api/instance";
import { fetchProfileAction } from "../../../authencation/action";
import { useParams } from "react-router";
import { useHistory, useRouteMatch } from "react-router-dom";
const { Option } = Select;

function AddUser() {
  const history = useHistory();
  const comeBack = () => {
    history.push("/Users");
  };
  
  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id:0,
      matKhau:"",
      email: "",
      phone: "",
      
      role:"",
      name: "",
    },
    onSubmit: (values) => {
    console.log(values)
    dispatch(fetchAddUser(values))
    },
  });

 
 

 

  return (
    <div>
      <h2
        className={styles.title}
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "700",
          marginTop: "20px",
        }}
      >
       Them người dùng
      </h2>
      <Form onSubmitCapture={formik.handleSubmit} className={styles.form}>
        <Input
          name="name"
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Ho ten"
         
        />
        <Input
          name="email"
          onChange={formik.handleChange}
          className={styles.input}
          type="email"
          placeholder="Email"
          
        />
        <Input
          name="matKhau"
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Password"
         
        />
       
        <Input
          name="phone"
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Number"
         
        />
       
        <Input
          name="role"
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Loại người dùng"
          
        />
      
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button
            style={{ marginLeft: "20px" }}
            onClick={() => comeBack()}
            type="primary"
            htmlType="submit"
          >
            Come back ListUser
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddUser;
