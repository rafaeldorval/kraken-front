export const Types = {
  CREATE_REQUEST: "ativo/CREATE_REQUEST",
  CREATE_SUCCESS: "ativo/CREATE_SUCCESS"
};

const INITIAL_STATE = {
  data: [],
  loading: false,
  ativo: {}
};

export default function ativo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CREATE_REQUEST:
      return { ...state, loading: true };
    case Types.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data]
      };
    default:
      return state;
  }
}

export const Creators = {
  createAtivoRequest: ativo => ({
    type: Types.CREATE_REQUEST,
    payload: { ativo }
  }),
  createAtivoSuccess: data => ({
    type: Types.CREATE_SUCCESS,
    payload: { data }
  })
};
