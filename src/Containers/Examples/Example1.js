import React, { Component } from 'react';

class Example1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 1000,
      label: 'hello world',
    };
  }

  changeText = (label) => {
    this.setState({
      label,
    });
  };

  changeNumer = (number) => {
    this.setState({
      number,
    });
  };

  render() {
    // console.log("I'm rendering!! again");
    // console.log(this.props);

    const [sharedText, setSharedText] = this.props.shared;

    return (
      <div className="example">
        I'm a class
        <br />
        <span>I can have state!!!</span>
        <br />
        {this.state.number * 10}
        <input
          type="number"
          value={this.state.number}
          onChange={(event) => this.changeNumer(event.target.value)}
        />
        <br />
        {this.state.label.replace('hello', 'good day')}
        <input
          type="text"
          value={this.state.label}
          onChange={(event) => this.changeText(event.target.value)}
        />
        <div className="App-shared">
          {sharedText}
          <input type="text" onChange={(e) => setSharedText(e.target.value)} />
        </div>
      </div>
    );
  }
}

export default Example1;
