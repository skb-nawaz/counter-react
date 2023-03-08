import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState(preNumber => {
      console.log(preNumber.count)
      return {count: preNumber.count + 1}
    })
  }
  onDecrement = () => {
    this.setState(preNumber => {
      console.log(preNumber.count)
      return {count: preNumber.count - 1}
    })
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <span className="count">{count}</span>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrement
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
