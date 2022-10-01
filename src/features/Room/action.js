import { useHistory } from "react-router-dom";
import instance from "../../api/instance";

export const SET_Room = "Room/SET_Room";
export const SET_DELETED_Room = "Room/SET_DELETED_Room";
export const SET_SELECTED_Room = "Room/SET_SELECTED_Room";
export const SET_CINEMAS = "Room/SET_CINEMAS";
export const SET_SCHEDULE = "Room/SET_SCHEDULE";
export const SET_Room_SHOWTIME = "Room/SET_Room_SHOWTIME";



export const fetchRoomAction =async (dispatch) => {
    
        try {

          const res = await instance.request({
            url: "/api/QuanLyPhim/LayDanhSachPhim",
            method: "GET",
           
          });
    
          dispatch({
            type: SET_Room,
            payload: res.data.content,
          });
        } catch (err) {}
     
    };
  ;
  export const fetchRoomDeleteAction = (id) => {
    return async (dispatch) => {
      try {
        const res = await instance.request({
          url: "/api/QuanLyPhim/XoaPhim",
          method: "DELETE",
          params: {
            MaPhim: id,
          },
        });
  
        dispatch({
          type: SET_DELETED_Room,
          payload: res.data.content,
        });
        alert("xoa phim thanh cong")
      } catch (err) {}
    };
  };
  export const fetchRoomDetailAction = (id) => {
    return async (dispatch) => {
      try {
        const res = await instance.request({
          url: "/api/QuanLyPhim/LayThongTinPhim",
          method: "GET",
          params: {
            MaPhim: id,
          },
        });
  
        dispatch({
          type: SET_SELECTED_Room,
          payload: res.data.content,
        });
      } catch (err) {}
    };
  };
  
  export const fetchCinemasAction = async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/QuanLyRap/LayThongTinHeThongRap",
        method: "GET",
      });
  
      dispatch({
        type: SET_CINEMAS,
        payload: res.data.content,
      });
      
      return res.data.content;
    } catch (err) {}
  };
  export const fetchAddRoom = async(formData) => {
  
    
      try {
        const res = await instance.request({
          url: "/api/QuanLyPhim/ThemPhimUploadHinh",
          method: "POST",
          data: formData,
         
         
        });

        alert("cap nhat phim thanh cong")
   
      } catch (err) {
    
      }
    };
  ;
  export const featchUpdateRoom = async(formData) => {
  
  
    
      try {
        const res = await instance.request({
          url: "/api/QuanLyPhim/CapNhatPhimUpload",
          method: "POST",
          data: formData,
         
         
        });

        alert("cap nhat thanh cong")
        
      } catch (err) {
      
      }
    };
  ;
  
  export const fetchRoomcheduleAction = (id) => {
    return async (dispatch) => {
      try {
        const res = await instance.request({
          url: "/api/QuanLyRap/LayThongTinLichChieuHeThongRap",
          method: "GET",
          params: {
            maHeThongRap: id,
            maNhom: "GP02",
          },
        });
  
        dispatch({
          type: SET_SCHEDULE,
          payload: res.data.content,
        });
      } catch (err) {}
    };
  };
  export const fetchRoomcheduleActionn = (id) => {
    return async (dispatch) => {
      try {
        const res = await instance.request({
          url: "/api/QuanLyRap/LayThongTinCumRapTheoHeThong",
          method: "GET",
          params: {
            maHeThongRap: id,
            maNhom: "GP02",
          },
        });
  
        dispatch({
          type: SET_SCHEDULE,
          payload: res.data.content,
        });
      } catch (err) {}
    };
  };
 
