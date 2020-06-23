export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const INCREMENT_FIVE = 'INCREMENT_FIVE';
export const DECREMENT_FIVE = 'DECREMENT_FIVE';


export function increment(value){
  return {
  type: INCREMENT,
  value,
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function incrementFive(){
  return {
    type: INCREMENT_FIVE
  }
}

export function decrementFive(){
  return {
    type: DECREMENT_FIVE
  }
}