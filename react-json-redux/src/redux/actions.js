import * as types from "./actionType";
import axios from "axios";

const getUsers = (users) => ({
  type: types.GET_USERS,
  payload: users,
});
const deleteUser = () => ({
  type: types.DELETE_USER,
});

const userAdded = () => ({
  type: types.ADD_USER,
});
const userUpdated = () => ({
  type: types.UPDATE_USER,
});
const singleUser = (user) => ({
  type: types.GET_SINGLE_ADD_USER,
  payload: user,
});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}`)
      .then((res) => {
        dispatch(getUsers(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const DeletedUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(deleteUser());
        dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const userAdd = (user) => {
  return function (dispatch) {
    axios
      .post(`${process.env.REACT_APP_API}`, user)
      .then((res) => {
        dispatch(userAdded(res));
        dispatch(loadUsers());
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const userUpdate = (user, id) => {
  return function (dispatch) {
    axios
      .put(`${process.env.REACT_APP_API}/${id}`, user)
      .then((res) => {
        dispatch(userUpdated(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const singleUserData = (id) => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        dispatch(singleUser(res.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
