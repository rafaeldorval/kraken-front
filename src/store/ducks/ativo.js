export const Types = {
  CREATE_REQUEST: "ativo/CREATE_REQUEST",
  CREATE_SUCCESS: "ativo/CREATE_SUCCESS",
  UPDATE: "ativo/UPDATE",
  DESTROY: "ativo/DESTROY"
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
    case Types.UPDATE:
      return { ...state, ativo: action.payload.ativo };
    case Types.DESTROY:
      return { ...state, loading: false };
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
  }),
  deleteAtivo: id => ({
    type: Types.DESTROY,
    payload: { id }
  }),
  updateAtivo: (id, ativo) => ({
    type: Types.UPDATE,
    payload: { id, ativo }
  })
};
