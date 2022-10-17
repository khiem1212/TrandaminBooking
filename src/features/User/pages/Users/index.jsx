
import React, { Fragment, useEffect } from "react";
import { Table } from "antd";
import {
  EditOutlined,
  CreditCardOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Search from "antd/lib/input/Search";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { fetchUserAction, fetchUserDeleteAction, fetchUserFindAction } from "../../action";

function Users() {
  const dispatch = useDispatch();
  const onSearch = (value) => {
    dispatch(fetchUserFindAction(value));
  };
  const deleted = (value) => {
    dispatch(fetchUserDeleteAction(value));
    dispatch(fetchUserAction);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
     
    },
    {
      title: "TÊN USER",
      dataIndex: "name",
      defaultSortOrder: "descend",
      render: (text, users) => {
        return (
          <Fragment>
            <p
              style={{
                margin: "auto",
                fontSize: "17px",
                fontWeight: "600",
                color: "blueviolet",
              }}
            >
             
              {users.name}
            </p>
          </Fragment>
        );
      },
    },
    {
      title: "NGAY SINH",
      dataIndex: "birthday",
      render: (text, users) => {
        return (
          <Fragment>
            <p
              style={{
                margin: "auto",
                fontSize: "17px",
               
              }}
            >
             
              {users.birthday}
            </p>
          </Fragment>
        );
      },
    },
    {
      title: "EMAil",
      dataIndex: "email",
      render: (text, users) => {
        return (
          <Fragment>
            <p
              style={{
                margin: "auto",
                fontSize: "17px",
               
              }}
            >
             
              {users.email}
            </p>
          </Fragment>
        );
      },
    },
    {
      title: "LOAi NGUOI DUNG",
      dataIndex: "role",
      defaultSortOrder: "descend",
      render: (text, users) => {
        return (
          <Fragment>
            <p
              style={{
                margin: "auto",
                fontSize: "17px",
               
              }}
            >
             
              {users.role}
            </p>
          </Fragment>
        );
      },
    },
    {
      title: "HÀNH ĐỘNG",
      dataIndex: "id",
      defaultSortOrder: "descend",
      render: (text, users) => {
        return (
          <Fragment>
            <div>
              <NavLink
                style={{ marginRight: "20px", fontSize: "25px" }}
                key={2}
                to={`/EditUser/${users.id}`}
              >
                <EditOutlined />
              </NavLink>
           
              <DeleteOutlined
                style={{ fontSize: "25px" }}
                onClick={() => {
                  deleted(users.id);
                }}
              />
            </div>
          </Fragment>
        );
      },
    },

    ,
  ];
  const data = useSelector((state) => state.user.users);
  let dataFind="";

  dataFind = useSelector((state) => state.user.findusers);

  //

  useEffect(() => {
    dispatch(fetchUserAction);
  }, []);

  const onChange = (pagination, filters, sorter, extra) => {};

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "700",
          marginTop: "20px",
        }}
      >
        DANH SÁCH PHIM
      </h2>
      <Search
        style={{ margin: "20px", width: "800px" }}
        placeholder="input search text"
        onSearch={onSearch}
        key={4}
        enterButton
      />
      <Table
        style={{ margin: "20px" }}
        columns={columns}
        dataSource={dataFind===null ? data : dataFind}
        onChange={onChange}
        key={1}
      />
    </div>
  );
}

export default Users;
