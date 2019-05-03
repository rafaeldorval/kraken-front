export const Types = {
  DATA_REQUEST: "relatorios/DATA_REQUEST",
  DATA_SUCCESS: "relatorios/DATA_SUCCESS",
  DATA_FUNCIONARIOS: "relatorios/DATA_FUNCIONARIOS"
};

const INITIAL_STATE = {
  data: [],
  funcionarios: [],
  url: "",
  loading: false
};

export default function relatorios(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.DATA_REQUEST:
      return { ...state, loading: true, url: action.payload.url };
    case Types.DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    case Types.DATA_FUNCIONARIOS:
      return {
        ...state,
        loading: false,
        funcionarios: action.payload.funcionarios
      };
    default:
      return state;
  }
}

export const Creators = {
  getDataRequest: url => ({
    type: Types.DATA_REQUEST,
    payload: { url }
  }),

  getDataSuccess: data => ({
    type: Types.DATA_SUCCESS,
    payload: { data }
  }),

  getFuncionarios: funcionarios => ({
    type: Types.DATA_FUNCIONARIOS,
    payload: { funcionarios }
  })
};
