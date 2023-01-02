import './index.css'

import {Component} from 'react'

import EmojiItems from '../EmojiItems'

class Feedback extends Component {
  state = {home: true, clicked: false}

  ifClicked = () => {
    this.setState({home: false, clicked: true})
  }

  render() {
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources
    const {home, clicked} = this.state

    return (
      <div className="mainContainer">
        <div className="card">
          {home === true && (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojiContainer">
                {emojis.map(each => (
                  <EmojiItems
                    emojis={each}
                    ifClicked={this.ifClicked}
                    key={each.id}
                  />
                ))}
              </ul>
            </>
          )}
          {clicked === true && (
            <>
              <img className="loveemoji" alt="love emoji" src={loveEmojiUrl} />
              <h1 className="heading">Thank You!</h1>
              <p className="para">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
