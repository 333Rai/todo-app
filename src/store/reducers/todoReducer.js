import { todoActionTypes } from '../../helpers/constants';

const initialState = {
   todos: [],
   isLoading: false,
   error: '',
   success: '',
};
const todoReducer = (state = initialState, action) => {
   switch (action.type) {
      case todoActionTypes.TODO_STARTED:
         return {
            ...state,
            isLoading: true,
         };
      case todoActionTypes.ADD_TODO_SUCCESS:
         return {
            ...state,
            todos: [...state.todos, action.payload],
         };
      case todoActionTypes.ADD_TODO_SUCCESS_MESSAGE:
         return {
            ...state,
            success: action.payload,
         };
      case todoActionTypes.TODO_FAILED:
         return {
            ...state,
            error: action.payload,
         };
      default:
         return state;
   }
};
export { todoReducer };
