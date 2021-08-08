import './Slot.scss'
import greyArrowIMG from '../../../assets/slot/greyArrow.png'
import dashIMG from '../../../assets/slot/dash.png'
import favoriteTrueIMG from '../../../assets/slot/favorite1.png'
import favoriteFalseIMG from '../../../assets/slot/favorite0.png'

const Slot = (props) => {
  return (
    <div className='slot'>
      <div className="slot__logo logo">
        <div className="logo__body">
        </div>
      </div>
      <div className="slot__info info">
        <div className="info__route">
          <span>{props.from}</span>
          <img src={greyArrowIMG} alt="to" />
          <span>{props.to}</span>
        </div>
        <div className="info__date">
          <span>{props.date}</span>
          <img src={dashIMG} alt="" />
          <span>{props.time}</span>
        </div>
        <div className="info__company">
          <span>{props.company}</span>
        </div>
      </div>
      <div className="slot__price price">
        <div className="price__favorite" onClick={() => props.switchFavoriteFlights(props.id)}>
          {
            props.favorite
              ? <img src={favoriteTrueIMG} alt="" />
              : <img src={favoriteFalseIMG} alt="" />
          }
        </div>
        <div className="price__value">
          Price:
          <span>{props.priсe} &#8381;</span>
        </div>
      </div>
    </div>
  )
}

export default Slot