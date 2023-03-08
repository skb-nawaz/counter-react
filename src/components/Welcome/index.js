import {Component} from 'react'

class Welcome extends Component {
  render() {
    const {hero, age} = this.props
    return (
      <h1>
        Bahubali, {hero} age is {age}
      </h1>
    )
  }
}

export default Welcome
