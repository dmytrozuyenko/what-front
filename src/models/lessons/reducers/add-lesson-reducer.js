import * as actionsTypes from '../action-types.js';

const INITIAL_STATE = {
  data: {},
  isLoading: false,
  isLoaded: false,
  error: '',
};

export const addLessonReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.ADDING_STARTED:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case actionsTypes.ADDING_FINISHED:
      return {
        ...state,
        isLoading: false,
        loaded: true,
        data: action.payload.data,
        error: '',
      };
    case actionsTypes.ADDING_FAILED:
      return {
        ...state,
        isLoading: false,
        loaded: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};