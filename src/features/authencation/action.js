import instance from "../../api/instance";



export const SET_ID = "auth/SET_ID";
export const SET_Profile_User = "auth/SET_Profile_User";





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
        type: SET_Profile_User,
        payload: res.data.content,
      });
    } catch (err) {}
  };
};