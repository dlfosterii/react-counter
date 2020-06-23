import {INCREMENT, DECREMENT, INCREMENT_FIVE, DECREMENT_FIVE} from './actions';

const initialState = {
  count: 0
}


function reducer(state = initialState, action){
  switch(action.type){
    case INCREMENT:
    return {
      count: state.count + action.value
    }
    break;
    case DECREMENT:
    return {
      count: state.count - 1
    }
    break;
    case INCREMENT_FIVE:
    return {
      count: state.count + 5
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