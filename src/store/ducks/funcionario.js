export const Types = {
  FUNC_REQUEST: "funcionarios/FUNC_REQUEST",
  FUNC_SUCCESS: "funcionarios/FUNC_SUCCESS"
};

const INITIAL_STATE = {
  funcionario: {},
  loading: false
};

export default function funcionarios(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FUNC_REQUEST:
      return {
        ...state,
        loading: true,
        funcionario: action.payload.funcionario
      };
    case Types.FUNC_SUCCESS:
      return { ...state, loading: false, funcionario: {} };
    default:
      return state;
  }
}

export const Creators = {
  createFuncionarioRequest: funcionario => ({
    type: Types.FUNC_REQUEST,
    payload: { funcionario }
  }),

  createFuncionarioSuccess: () => ({
    type: Types.FUNC_SUCCESS
  })
};
