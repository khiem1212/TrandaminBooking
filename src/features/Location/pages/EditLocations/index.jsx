import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchLocationDetailAction,
  fetchLocationUpdateAction,
  fetchRoomDetailAction,
  fetchRoomUpdateAction,
} from "../../action";
import moment from "moment";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";

import { useHistory, useRouteMatch } from "react-router-dom";
import TextArea from "antd/lib/input/TextArea";

function EditLocation() {
  const history = useHistory();
  const match = useRouteMatch();
  const comeBack = () => {
    history.push("/Locations");
  };
  const [imgSrc, setImgSrc] = useState("");

  const id = match.params.id;
  const [componentSize, setComponentSize] = useState("default");

  const dispatch = useDispatch();
  // const handleChangDate=(value)=>{
  //   let ngayKhoiChieu=moment(value).format('DD/MM/YYYY')
  //   formik.setFieldValue(ngayKhoiChieu);
  // }
  const handleChangeFile = async (e) => {
    let file = e.target.files[0];

    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/png"
    ) {
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (e) => {
        setImgSrc(e.target.result);
        formik.setFieldValue("hinhAnh", e.target.result);
      };
    }
  };

  const handleSwitch = (name) => {
    return (value) => {
      formik.setFieldValue(name, value);
    };
  };
  const data = useSelector((state) => state.location.locationecleted);

  useEffect(() => {
    dispatch(fetchLocationDetailAction(id));
  }, []);
  const goToMovieList = () => {
    history.push("/Moviemanger");
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id:0 ,
      tenViTri: data?.tenViTri,
      tinhThanh: data?.tinhThanh,

      quocGia: data?.quocGia,

      hinhAnh: "",
    },

    onSubmit: (values) => {
      console.log(values.id);

      // Gọi api gửi các giá trị formdata về backend xử lý

      dispatch(fetchLocationUpdateAction(data?.id, values));
      // dispatch(fetchRoomUpdateAction(FormData));
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

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
         Edit Location
      </h2>
      <Form
        style={{ marginTop: "20px" }}
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên Phim">
          <Input
            name="tenViTri"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tenViTri}
          />
        </Form.Item>
        <Form.Item
          label="tinhThanh"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <Input name="tinhThanh" value={formik.values.tinhThanh} />
        </Form.Item>
        <Form.Item label="Mô tả">
          <TextArea
            name="quocGia"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.quocGia}
          />
        </Form.Item>

        <Form.Item
          rules={[
            {
              required: "white",
            },
          ]}
          style={{ color: "white" }}
          label="Hình ảnh"
        >
          <input type="file" onChange={handleChangeFile} />
          <br />
          <img
            style={{ width: 150, height: 150 }}
            src={imgSrc === "" ? data?.hinhAnh : imgSrc}
            alt=""
          />
        </Form.Item>

        <Form.Item label="Chức năng">
          <Button type="primary" htmlType="submit">
           Edit Location
          </Button>
          <Button
            style={{ marginLeft: "20px" }}
            onClick={() => comeBack()}
            type="primary"
            htmlType="submit"
          >
            Come back LocationList
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditLocation;
