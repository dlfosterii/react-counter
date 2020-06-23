import React from 'react';
import { connect } from 'react-redux';
import {increment,decrement,incrementFive,decrementFive} from './redux/actions';

//the meathod for increment passes a function for the value insead of a hardcoded number from the actions.jsx file
class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrementFive}>-5</button>
          <button onClick={this.props.decrement}>-</button><span> </span>
          <span>{this.props.counterValue}</span>
          <span> </span><button onClick={()=> {this.props.increment(1)}}>+</button> 
          <button onClick={()=>{this.props.increment(5)}}>+5</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counterValue: state.count
  }
}

const mapDispatchToProps  = {
  increment,
  decrement,
  incrementFive,
  decrementFive
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
