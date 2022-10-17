

import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import {
   fetchRoomDetailAction, fetchRoomUpdateAction, fetchRoomUpdateImageAction,
  
  
  
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

function EditRoom() {
  const history=useHistory();
  const match = useRouteMatch();
  const comeBack = ()=>{
    history.push("/Rooms")
  }
  const [imgSrc, setImgSrc] = useState("");


  const id = match.params.id;
  const [componentSize, setComponentSize] = useState("default");

  const dispatch = useDispatch();
  // const handleChangDate=(value)=>{
  //   let ngayKhoiChieu=moment(value).format('DD/MM/YYYY')
  //   formik.setFieldValue(ngayKhoiChieu);
  // }
  const handleChangeFile = async(e) => {

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
  const data = useSelector((state) => state.room.roomsecleted);

  useEffect(() => {
    dispatch(fetchRoomDetailAction(id));
  }, []);
  const goToMovieList = () => {
    history.push("/Moviemanger");
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id:data?.id,
      tenPhong: data?.tenPhong,
     
     
      moTa: data?.moTa,
    
     
      giaTien: data?.giaTien,
      mayGiat: data?.mayGiat,
      bep: data?.bep,
      dieuHoa: data?.dieuHoa,
      tivi: data?.tivi,
      wifi: data?.wifi,
      banLa: data?.banLa,
      banUi: data?.banUi,
      doXe: data?.doXe,
      hoBoi: data?.hoBoi,
    
      hinhAnh:"",
    },

   
    onSubmit: (values) => {
     console.log(values)
      
        
      
      // Gọi api gửi các giá trị formdata về backend xử lý
    
      dispatch(fetchRoomUpdateAction(values.id, values));
      
      // dispatch(fetchRoomUpdateAction(FormData));
     
   
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
 

  return (
    <div>
      
      <h2 style={{textAlign:'center',fontSize:"30px",fontWeight:'700',marginTop:'20px'}}>EDit Room</h2>
      <Form style={{marginTop:"20px"}}
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
            name="tenPhong"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tenPhong}
          />
        </Form.Item>
      
        <Form.Item label="Mô tả">
          <TextArea
            name="moTa"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.moTa}
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
       
        <Form.Item label="Giá Tiền">
          <InputNumber
            name="giaTien"
            onChange={handleSwitch("giaTien")}
            min="1"
            value={formik.values.giaTien}
          />
        </Form.Item>
        <Form.Item label="Wifi" valuePropName="wifi">
          <Switch
            onChange={handleSwitch("wifi")}
            checked={formik.values.wifi}
          />
        </Form.Item>
        <Form.Item label="Tivi" valuePropName="tivi">
          <Switch
            onChange={handleSwitch("tivi")}
            checked={formik.values.tivi}
          />
        </Form.Item>
        <Form.Item label="Bàn Là" valuePropName="banLa">
          <Switch onChange={handleSwitch("banLa")} checked={formik.values.banLa} />
        </Form.Item>
        <Form.Item label="Bàn ủi" valuePropName="banUi">
          <Switch onChange={handleSwitch("banUi")} checked={formik.values.banUi} />
        </Form.Item>
        <Form.Item label="Đỗ Xe" valuePropName="doXe">
          <Switch onChange={handleSwitch("doXe")} checked={formik.values.doXe} />
        </Form.Item>
        <Form.Item label="Bếp" valuePropName="bep">
          <Switch onChange={handleSwitch("bep")} checked={formik.values.bep} />
        </Form.Item>
        <Form.Item label="Điều Hòa" valuePropName="dieuHoa">
          <Switch onChange={handleSwitch("dieuHoa")} checked={formik.values.dieuHoa} />
        </Form.Item>
        <Form.Item label="Hồ Bơi" valuePropName="hoBoi">
          <Switch onChange={handleSwitch("hoBoi")} checked={formik.values.hoBoi} />
        </Form.Item>
        
        <Form.Item label="Chức năng">
          <Button type="primary" htmlType="submit">
        Edit Room
          </Button>
          <Button style={{marginLeft:"20px"}} onClick={()=>comeBack()} type="primary" htmlType="submit">
          Come back RoomList
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default EditRoom;
