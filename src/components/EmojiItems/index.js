import './index.css'

const EmojiItems = props => {
  const {emojis, ifClicked} = props

  const clicked = () => {
    ifClicked()
  }

  return (
    <li className="li" onClick={clicked}>
      <img src={emojis.imageUrl} alt={emojis.name} className="emojis" />
      <h1 className="emojiName">{emojis.name}</h1>
    </li>
  )
}

export default EmojiItems
