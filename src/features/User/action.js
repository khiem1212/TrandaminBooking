import instance from "../../api/instance";

export const SET_User = "User/SET_User";
export const SET_DELETED_User = "User/SET_DELETED_User";
export const SET_SELECTED_User = "User/SET_SELECTED_User";
export const SET_ADD_User = "User/SET_ADD_User";
export const SET_Update_User = "User/SET_Update_User";
export const SET_Find_User = "User/ SET_Find_User";

export const fetchUserAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: "/api/users",
      method: "GET",
    });

    dispatch({
      type: SET_User,
      payload: res.data.content,
    });
  } catch (err) {}
};
export const fetchUserDeleteAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/users/${id}`,
        method: "DELETE",
        params: {
          id: id,
        },
      });

      dispatch({
        type: SET_DELETED_User,
        payload: res.data.content,
      });
      alert("xoa phong thanh cong");
    } catch (err) {}
  };
};
export const fetchUserFindAction = (key) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/users/search/${key}`,
        method: "GET",
        params: {
          TenNguoiDung: key,
        },
      });

      dispatch({
        type: SET_Find_User,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
export const fetchUserUpdateAction = (id,data) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/users/${id}`,
        method: "PUT",
        params: {
          id: id,
        },
        data:data
      });
      alert("Action success")
      dispatch({
        type: SET_Update_User,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};

export const fetchUserDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/users/${id}`,
        method: "GET",
        params: {
          id: id,
        },
      });

      dispatch({
        type: SET_SELECTED_User,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
export const fetchAddUser = (data) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/users",
        method: "POST",
        data: data,
      });
      alert("Action success")
      dispatch({
        type: SET_ADD_User,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
