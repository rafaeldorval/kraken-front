export const Types = {
  LOGIN_REQUEST: "user/LOGIN_REQUEST",
  LOGIN_SUCCESS: "user/LOGIN_SUCCESS"
};

const INITIAL_STATE = {
  userName: localStorage.getItem("@kraken-User"),
  loading: false
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return { ...state, loading: true };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userName: action.payload.userName,
        user: null
      };
    default:
      return state;
  }
}

export const Creators = {
  getLoginRequest: user => ({
    type: Types.LOGIN_REQUEST,
    payload: { user }
  }),

  getLoginSuccess: userName => ({
    type: Types.LOGIN_SUCCESS,
    payload: { userName }
  })
};
