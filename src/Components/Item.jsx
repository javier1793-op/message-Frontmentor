import List from '../img/icon-list.svg'


const Item = ({text}) => {
  return (
    <span>
        <img src={List} alt="iconList" />
        <p>{text}</p>
    </span>
  )
}

export default Item