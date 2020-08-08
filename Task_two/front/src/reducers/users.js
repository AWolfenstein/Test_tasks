import axios from "axios";
export const USERS_REQUESTED = "reducers/USERS_REQUESTED";

const initialState = {
  user: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_REQUESTED:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export const load = () => {
  return (dispatch) => {
    axios
      .get(`https://reqres.in/api/users?per_page=12`)
      .then((response) => {
        dispatch({ type: USERS_REQUESTED, user: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
