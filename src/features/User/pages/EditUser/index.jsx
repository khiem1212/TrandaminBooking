import { Button, Form, Input, Select } from "antd";
import React from "react";
import styles from "./style.module.css";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserDetailAction, fetchUserUpdateAction } from "../../action";
import instance from "../../../../api/instance";
import { fetchProfileAction } from "../../../authencation/action";
import { useParams } from "react-router";
import { useHistory, useRouteMatch } from "react-router-dom";
const { Option } = Select;

function EditUser() {
  const history = useHistory();
  const comeBack = () => {
    history.push("/Users");
  };
  const match = useRouteMatch();

  const id = match.params.id;
  const data = useSelector((state) => state.user.usersecleted);
  const dispatch = useDispatch();
 
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id:id,
      matKhau: data?.matKhau,
      email: data?.email,
      phone: data?.phone,
      maNhom: data?.maNhom,
      role: data?.role,
      name: data?.name,
    },
    onSubmit: (values) => {
      dispatch(fetchUserUpdateAction(values.id, values));
    },
  });

 
  const handleChange = (value) => {
    formik.setFieldValue("role", value);
  };
console.log(formik.values.role)
  useEffect(() => {
    dispatch(fetchUserDetailAction(id));
  }, []);

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
        Chỉnh sửa người dùng
      </h2>
      <Form onSubmitCapture={formik.handleSubmit} className={styles.form}>
        <Input
          name="name"
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Ho ten"
          value={formik.values.name}
        />
        <Input
          name="email"
          onChange={formik.handleChange}
          className={styles.input}
          type="email"
          placeholder="Email"
          value={formik.values.email}
        />
        <Input
          name="matKhau"
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Password"
          value={formik.values.matKhau}
        />
       
        <Input
          name="phone"
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Number"
          value={formik.values.phone}
        />
        
         
        <Input
          name="role"
          onChange={formik.handleChange}
          className={styles.input}
          type="text"
          placeholder="Loại người dùng"
          value={formik.values.role}
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

export default EditUser;
