const LOAD = 'redux-example/rating/LOADING';
export const LOAD_SUCCESS = 'redux-example/rating/LOADED';
const LOAD_FAIL = 'redux-example/rating/LOAD_ERROR';

const initialState = {
  loading: false,
  loaded: false,
  data: {
    version: 0,
    records: [],
  },
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result,
        error: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: action.error
      };

    default:
      return state;
  }
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('http://rating.smartjs.academy/rating'),
  };
}
