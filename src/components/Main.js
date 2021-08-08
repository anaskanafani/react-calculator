import React from "react";
import Calculator from "./Buttons";
import Display from "./Display";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      history:""
    };
  }

  render() {
    return (
      <>
        <Display value={this.state.value} history={this.state.history}/>
        <Calculator
          onClick={(number) => {
            this.setState({ value: this.state.value + number.target.value});
          }}
          value={this.state.value}
          button={
            <button
              value="="
              className="equal"
              onClick={() => {
                this.setState({ value: eval(this.state.value) , history: this.state.value + ' = ' + eval(this.state.value)});
              }}
            >
              =
            </button>
          }
        />
      </>
    );
  }
}

export default Main;
