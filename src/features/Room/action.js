
import instance from "../../api/instance";

export const SET_Room = "Room/SET_Room";
export const SET_DELETED_Room = "Room/SET_DELETED_Room";
export const SET_SELECTED_Room = "Room/SET_SELECTED_Room";
export const SET_ADD_Room = "Room/SET_ADD_Room";
export const SET_Update_Room = "Room/SET_Update_Room";
export const  SET_Find_Room = "Room/ SET_Find_Room";
export const  SET_Coment_Room = "Room/ SET_Coment_Room";
export const  SET_DeletedComment_Room = "Room/ SET_DeletedComment_Room";
export const  SET_EditComment_Room = "Room/ SET_EditComment_Room";
export const  SET_AddComment_Room = "Room/ SET_AddComment_Room";
export const   SET_Update_Image_Room = "Room/  SET_Update_Image_Room";

export const fetchRoomAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: "/api/phong-thue",
      method: "GET",
    });

    dispatch({
      type: SET_Room,
      payload: res.data.content,
    });
  } catch (err) {}
};
export const fetchRoomDeleteAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/phong-thue/${id}`,
        method: "DELETE",
        params: {
          id: id,
        },
      });

      dispatch({
        type: SET_DELETED_Room,
        payload: res.data.content,
      });
      alert("xoa phong thanh cong");
    } catch (err) {}
  };
};
export const fetchRoomFindAction = (key) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/phong-thue/phan-trang-tim-kiem",
        method: "GET",
        params: {
          keyword: key,
          pageIndex:"1",
          pageSize:"1",
        },
      });

      dispatch({
        type: SET_Find_Room,
        payload: res.data.content,
      });
     
    } catch (err) {}
  };
};
export const fetchRoomUpdateAction = (id,data) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/phong-thue/${id}`,
        method: "PUT",
        params: {
          id: id,
        },
        data:data
      });
      alert("Action success")
      dispatch({
        type: SET_Update_Room,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
export const fetchRoomUpdateImageAction = (id,data) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url:"/api/phong-thue/upload-hinh-phong",
        method: "POST",
        params: {
          maPhong: id,
        },
        data:data
      });
    
      dispatch({
        type: SET_Update_Image_Room,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};

export const fetchRoomDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/phong-thue/${id}`,
        method: "GET",
        params: {
          id: id,
        },
      });

      dispatch({
        type: SET_SELECTED_Room,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
export const fetchAddRoom = (data) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/phong-thue",
        method: "POST",
        data: data,
      });
      alert("Add success")
      dispatch({
        type: SET_ADD_Room,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};


export const fetchComentAction = (idRoom) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/binh-luan/lay-binh-luan-theo-phong/${idRoom}`,
        method: "GET",
        params: {
          MaPhong: idRoom,
        },
      });

      dispatch({
        type: SET_Coment_Room,
        payload: res.data.content,
      });
      alert("xoa phong thanh cong");
    } catch (err) {}
  };
};
export const fetchDeletedComentAction = (idComment) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/binh-luan/${idComment}`,
        method: "DELETE",
        params: {
          id: idComment,
        },
      });

      dispatch({
        type: SET_DeletedComment_Room,
        payload: res.data.content,
      });
      alert("xoa phong thanh cong");
    } catch (err) {}
  };
};
export const fetchEditComentAction = (idComment,data) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/binh-luan/${idComment}`,
        method: "PUT",
        params: {
          id: idComment,
        },
        data:data
      });

      dispatch({
        type: SET_EditComment_Room,
        payload: res.data.content,
      });
    
    } catch (err) {}
  };
};
export const fetchAddComentAction = (data) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/binh-luan",
        method: "POST",
        
        data:data
      });

      dispatch({
        type: SET_AddComment_Room,
        payload: res.data.content,
      });
    
    } catch (err) {}
  };
};