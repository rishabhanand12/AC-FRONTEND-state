import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      count : 0
    }
  }
  handleIncreament = () => {
    this.setState({count:this.state.count+1});
  }
  handleReset = () =>  {
    this.setState({count:0});
  }
  handledecreament = () => {
    this.setState({count:this.state.count-1});
  }
  render() {
    return (
      <>
        <p>{this.state.count}</p>
        <button onClick={this.handleIncreament}>Increament</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handledecreament}>Decreament</button>
      </>
    )
  }
}
