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
import {
  fetchRoomAction,
  fetchRoomDeleteAction,
  fetchRoomFindAction,
} from "../../action";

function Rooms() {
  const dispatch = useDispatch();
  const onSearch = (value) => {
    dispatch(fetchRoomFindAction(value));
  };
  const deleted = (value) => {
    dispatch(fetchRoomDeleteAction(value));
    dispatch(fetchRoomAction);
  };
  const columns = [
    {
      title: "MÃ PHÒNG",
      dataIndex: "id",
     
    },
    {
      title: "TÊN PHÒNG",
      dataIndex: "tenPhong",
      defaultSortOrder: "descend",
      render: (text, room) => {
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
              {" "}
              {room.tenPhong}{" "}
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
              alt={room.tenPhim}
              width={60}
              height={60}
              style={{ borderRadius: "50%" }}
            ></img>
          </Fragment>
        );
      },
    },
    {
      title: "MÔ TẢ",
      dataIndex: "moTa",
      defaultSortOrder: "descend",
      render: (text, room) => {
        return (
          <Fragment>
            {room.moTa.length > 50
              ? room.moTa.substr(0, 90) + "..."
              : room.moTa}
          </Fragment>
        );
      },
    },
    {
      title: "HÀNH ĐỘNG",
      dataIndex: "tenPhim",
      defaultSortOrder: "descend",
      render: (text, room) => {
        return (
          <Fragment>
            <div>
              <NavLink
                style={{ marginRight: "20px", fontSize: "25px" }}
                key={2}
                to={`/EditRoom/${room.id}`}
              >
                <EditOutlined />
              </NavLink>
              
              <DeleteOutlined
                style={{ fontSize: "25px" }}
                onClick={() => {
                  deleted(room.id);
                }}
              />
            </div>
          </Fragment>
        );
      },
    },

    ,
  ];
  const data = useSelector((state) => state.room.rooms);
  let dataFind="";

  dataFind = useSelector((state) => state.room.findroom);
 

  //

  useEffect(() => {
    dispatch(fetchRoomAction);
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
     ROOM LIST
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

export default Rooms;
