import {INCREMENT, DECREMENT, DECREMENT_FIVE} from './actions';

const initialState = {
  count: 0
}


function reducer(state = initialState, action){
  switch(action.type){
    case INCREMENT: //this meathod is more easilly duplicated in the rest of an app pass a value not a hardcoded number
    return {
      count: state.count + action.value
    }
    break;
    case DECREMENT: //this meathod and the one below is not as easilly duplicated you are passing a hardcoded number
    return {
      count: state.count - 1
    }
    break;
    case DECREMENT_FIVE: 
    return {
      count: state.count -5
    }
    break;
    default:
    return state;
    }



}

export default reducer