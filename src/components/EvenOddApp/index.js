import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onClickIncrement = () => {
    this.setState(prevstate => ({
      count: prevstate.count + Math.floor(Math.random() * 101),
    }))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="count-container">
          <h1 className="count">Count {count}</h1>
          <p>Count is {text}</p>
          <button
            type="button"
            onClick={this.onClickIncrement}
            className="increment-button"
          >
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
