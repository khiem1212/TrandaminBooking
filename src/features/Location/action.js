import instance from "../../api/instance";

export const SET_Location = "Location/SET_Location";
export const SET_DELETED_Location = "Location/SET_DELETED_Location";
export const SET_SELECTED_Location = "Location/SET_SELECTED_Location";
export const SET_ADD_Location = "Location/SET_ADD_Location";
export const SET_Update_Location = "Location/SET_Update_Location";
export const SET_Find_Location = "Location/ SET_Find_Location";

export const fetchLocationAction = async (dispatch) => {
  try {
    const res = await instance.request({
      url: "/api/vi-tri",
      method: "GET",
    });

    dispatch({
      type: SET_Location,
      payload: res.data.content,
    });
  } catch (err) {}
};
export const fetchLocationDeleteAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/vi-tri/${id}`,
        method: "DELETE",
        params: {
          id: id,
        },
      });

      dispatch({
        type: SET_DELETED_Location,
        payload: res.data.content,
      });
      alert("xoa phong thanh cong");
    } catch (err) {}
  };
};
export const fetchLocationFindAction = (key) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url:"/api/vi-tri/phan-trang-tim-kiem",
        method: "GET",
        params: {
            keyword: key,
            pageIndex:"1",
            pageSize:"1"

        },
      });

      dispatch({
        type: SET_Find_Location,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
export const fetchLocationUpdateAction = (id,data) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/vi-tri${id}`,
        method: "PUT",
        params: {
          id: id,
        },
        data:data
      });

      dispatch({
        type: SET_Update_Location,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};

export const fetchLocationDetailAction = (id) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: `/api/vi-tri/${id}`,
        method: "GET",
        params: {
          id: id,
        },
      });

      dispatch({
        type: SET_SELECTED_Location,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
export const fetchAddLocation = (data) => {
  return async (dispatch) => {
    try {
      const res = await instance.request({
        url: "/api/vi-tri",
        method: "POST",
        data: data,
      });

      dispatch({
        type: SET_ADD_Location,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};
