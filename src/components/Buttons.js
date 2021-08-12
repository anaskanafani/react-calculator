import React from "react";

class Calculator extends React.Component {
  render() {
    return (
      <div className="calc-btns">
        <button
          value="+"
          id="add"
          className="operations btn"
          onClick={this.props.onClick}
        >
          {" "}
          +
        </button>
        <button
          value="-"
          className="operations btn"
          onClick={this.props.onClick}
        >
          {" "}
          -
        </button>
        <button
          value="*"
          className="operations btn"
          onClick={this.props.onClick}
        >
          {" "}
          &times;
        </button>
        <button
          value="/"
          className="operations btn"
          onClick={this.props.onClick}
        >
          {" "}
          ÷
        </button>
        <button className="btn" value="7" onClick={this.props.onClick}>
          7
        </button>
        <button className="btn" value="8" onClick={this.props.onClick}>
          8
        </button>
        <button className="btn" value="9" onClick={this.props.onClick}>
          9
        </button>
        <button className="btn" value="4" onClick={this.props.onClick}>
          4
        </button>
        <button className="btn" value="5" onClick={this.props.onClick}>
          5
        </button>
        <button className="btn" value="6" onClick={this.props.onClick}>
          6
        </button>
        <button className="btn" value="1" onClick={this.props.onClick}>
          1
        </button>
        <button className="btn" value="2" onClick={this.props.onClick}>
          2
        </button>
        <button className="btn" value="3" onClick={this.props.onClick}>
          3
        </button>
        <button value="0" className="zero btn" onClick={this.props.onClick}>
          0
        </button>
        <button value="." className="decimal btn" onClick={this.props.onClick}>
          .
        </button>
        <button className="clear" onClick={this.props.clear}>
          AC
        </button>
        {this.props.button}
      </div>
    );
  }
}

export default Calculator;
