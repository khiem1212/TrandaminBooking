
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
import { fetchLocationAction, fetchLocationDeleteAction, fetchLocationFindAction } from "../../action";

function Locations() {
  const dispatch = useDispatch();
  const onSearch = (value) => {
    dispatch(fetchLocationFindAction(value));
  };
  const deleted = (value) => {
    dispatch(fetchLocationDeleteAction(value));
    dispatch(fetchLocationAction);
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
     
    },
    {
      title: "TÊN VỊ TRÍ",
      dataIndex: "tenViTri",
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
             
              {users.tenViTri}
            </p>
          </Fragment>
        );
      },
    },
    {
      title: "HÌNH ẢNH",
      dataIndex: "hinhAnh",
      render: (text, room) => {
        return (
          <Fragment>
            <img
              key={3}
              src={room.hinhAnh}
              
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
            ></img>
          </Fragment>
        );
      },
    },
    {
      title: "Tỉnh Thành",
      dataIndex: "tinhThanh",
      render: (text, users) => {
        return (
          <Fragment>
            <p
              style={{
                margin: "auto",
                fontSize: "17px",
               
              }}
            >
             
              {users.tinhThanh}
            </p>
          </Fragment>
        );
      },
    },
    {
      title: "QUỐC GIA",
      dataIndex: "quocGia",
      render: (text, users) => {
        return (
          <Fragment>
            <p
              style={{
                margin: "auto",
                fontSize: "17px",
               
              }}
            >
             
              {users.quocGia}
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
                to={`/EditLocation/${users.id}`}
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
  const data = useSelector((state) => state.location.location);

  let dataFind="";

  dataFind = useSelector((state) => state.location.findlocation);


  useEffect(() => {
    dispatch(fetchLocationAction);
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
        dataSource={dataFind===null ? data : dataFind.data}
        onChange={onChange}
        key={1}
      />
    </div>
  );
}

export default Locations;
