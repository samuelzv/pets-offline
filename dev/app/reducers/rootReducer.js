import * as NetworkStatusActions from  '../actions/networkStatusActions';
import * as ShapeActions from '../actions/shapeActions';


const initialState = {
  todos: [],
  shapes: [],
  networkStatus: 'online'
};

export function rootReducer(state = initialState, action) {

  switch (action.type) {

    case NetworkStatusActions.SET_STATUS:
      return {
        todos: state.todos,
        networkStatus: action.status
      };

    case ShapeActions.ADD_SHAPE:

      return {
        shapes: state.shapes.concat({
          shape: action.shape
        }),
        todos: state.todos,
        networkStatus: state.networkStatus
      };


    default:
      return state;

  }

}
