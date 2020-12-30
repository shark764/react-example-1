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
    const { shared } = this.props;
    const { label, number } = this.state;

    const [sharedText, setSharedText] = shared;

    return (
      <div className="example">
        I&#39;m a class
        <br />
        <span>I can have state!!!</span>
        <br />
        {number * 10}
        <input
          type="number"
          value={number}
          onChange={(event) => this.changeNumer(event.target.value)}
        />
        <br />
        {label.replace('hello', 'good day')}
        <input
          type="text"
          value={label}
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
