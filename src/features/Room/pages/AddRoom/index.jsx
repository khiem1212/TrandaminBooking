
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

import { useFormik } from "formik";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAddRoom
   
  
  
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

function AddRoom() {
  const history=useHistory();

  const comeBack = ()=>{
    history.push("/Rooms")
  }
  const [imgSrc, setImgSrc] = useState("");



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

  const goToMovieList = () => {
    history.push("/Rooms");
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
    
      tenPhong:"",
      
     
      moTa: "",
    
     
      giaTien:"",
      mayGiat:"",
      bep:"",
      dieuHoa: "",
      tivi: "",
      wifi: "",
      banLa:"",
      banUi: "",
      doXe: "",
      hoBoi: "",
    
      hinhAnh:"",
    },

   
    onSubmit: (values) => {
    
      
          
        
      
      // Gọi api gửi các giá trị formdata về backend xử lý
    
      // dispatch(fetchRoomUpdateAction(values.id, values));
      // dispatch(fetchRoomUpdateImageAction(values.id, values));
      // dispatch(fetchRoomUpdateAction(FormData));
     dispatch(fetchAddRoom(values))
   
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
 

  return (
    <div>
      
      <h2 style={{textAlign:'center',fontSize:"30px",fontWeight:'700',marginTop:'20px'}}>Add Room</h2>
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
          
          />
        </Form.Item>
      
        <Form.Item label="Mô tả">
          <TextArea
            name="moTa"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            
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
            src={imgSrc}
            alt=""
          />
        </Form.Item>
       
        <Form.Item label="Giá Tiền">
          <InputNumber
            name="giaTien"
            onChange={handleSwitch("giaTien")}
            min="1"
           
          />
        </Form.Item>
        <Form.Item label="Wifi" valuePropName="wifi">
          <Switch
            onChange={handleSwitch("wifi")}
           
          />
        </Form.Item>
        <Form.Item label="Tivi" valuePropName="tivi">
          <Switch
            onChange={handleSwitch("tivi")}
           
          />
        </Form.Item>
        <Form.Item label="Bàn Là" valuePropName="banLa">
          <Switch onChange={handleSwitch("banLa")}  />
        </Form.Item>
        <Form.Item label="Bàn ủi" valuePropName="banUi">
          <Switch onChange={handleSwitch("banUi")} />
        </Form.Item>
        <Form.Item label="Đỗ Xe" valuePropName="doXe">
          <Switch onChange={handleSwitch("doXe")} />
        </Form.Item>
        <Form.Item label="Bếp" valuePropName="bep">
          <Switch onChange={handleSwitch("bep")}  />
        </Form.Item>
        <Form.Item label="mayGiat" valuePropName="mayGiat">
          <Switch onChange={handleSwitch("mayGiat")}  />
        </Form.Item>
        <Form.Item label="Điều Hòa" valuePropName="dieuHoa">
          <Switch onChange={handleSwitch("dieuHoa")}  />
        </Form.Item>
        <Form.Item label="Hồ Bơi" valuePropName="hoBoi">
          <Switch onChange={handleSwitch("hoBoi")} />
        </Form.Item>
        
        <Form.Item label="Chức năng">
          <Button type="primary" htmlType="submit">
          Add Room
          </Button>
          <Button style={{marginLeft:"20px"}} onClick={()=>comeBack()} type="primary" htmlType="submit">
          Come back RoomList
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddRoom;
