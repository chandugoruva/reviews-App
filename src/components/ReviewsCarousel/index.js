import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    button: 0,
  }

  onChangeIncrease = () => {
    const {reviewsList} = this.props
    const {button} = this.state
    if (button < reviewsList.length - 1) {
      this.setState(prevState => ({button: prevState.button + 1}))
    }
  }

  onChangeDecrease = () => {
    const {button} = this.state
    if (button > 0) {
      this.setState(prevState => ({button: prevState.button - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {button} = this.state
    return (
      <div className="bg-image">
        <h1 className="heading">Reviews</h1>
        <div className="for-display">
          <button
            className="button"
            type="button"
            data-testId="leftArrow"
            onClick={this.onChangeDecrease}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div>
            <ul>
              <li className="li">
                <div className="for-information">
                  <img
                    src={reviewsList[button].imgUrl}
                    alt={reviewsList[button].username}
                  />
                  <p className="paragraph">{reviewsList[button].username}</p>
                  <p>{reviewsList[button].companyName}</p>
                  <p className="paragraph1">
                    {reviewsList[button].description}
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <button
            className="button"
            type="button"
            data-testId="rightArrow"
            onClick={this.onChangeIncrease}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
