import React from "react";
import { connect } from "react-redux";
import { increment } from "../store/AC";
import { dicrement } from "../store/AC";
function Counter(props) {
  console.log(props);
  return (
    <div>
      <h3>{props.count}</h3>
      <button onClick={props.handleIncrement}>increment</button>
      <button onClick={props.handleDicrement}>increment</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { count: state.count };
};

const mapDispatchToProps = {
  handleIncrement: increment,
  handleDicrement: dicrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
