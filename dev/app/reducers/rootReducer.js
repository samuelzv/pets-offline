import * as NetworkStatusActions from  '../actions/networkStatusActions';
import * as PetActions from '../actions/petActions';


const initialState = {
  pets: [],
  networkStatus: 'online'
};

export function rootReducer(state = initialState, action) {

  switch (action.type) {

    case NetworkStatusActions.SET_STATUS:
      return {
        pets: state.pets,
        networkStatus: action.status
      };

    case PetActions.LOAD_PETS:
      return {
        pets : action.pets,
        networkStatus: state.networkStatus
      };


    default:
      return state;

  }

}
