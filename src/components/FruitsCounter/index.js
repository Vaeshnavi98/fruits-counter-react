import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0}

  state2 = {add: 0}

  mango = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  banana = () => {
    this.setState2(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    const {add} = this.state2

    return (
      <div className="main-div">
        <div className="inside-div">
          <h1>
            Bob ate <span>{count}</span> mangoes <span>{add}</span> bananas
          </h1>
          <div className="inside-div2">
            <div className="inside-div3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img-deco"
              />
              <button onClick={this.mango} type="button">
                Eat Mango
              </button>
            </div>
            <div className="inside-div3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img-deco"
              />
              <button onClick={this.banana} type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
