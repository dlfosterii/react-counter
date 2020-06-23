export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const DECREMENT_FIVE = 'DECREMENT_FIVE';


export function increment(value){ //this meathod is more easilly created within you app: value is passed throughout the app
  return {
  type: INCREMENT,
  value,
  }
}

export function decrement() { //this meathod and the one below is not as easilly duplicated within you app
  return {
    type: DECREMENT
  }
}

export function decrementFive(){
  return {
    type: DECREMENT_FIVE
  }
}