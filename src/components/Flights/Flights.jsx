import './Flights.scss'
import Slot from './Slot/Slot'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Autoplay, A11y } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import { connect } from 'react-redux'
import { switchFavoriteFlights } from '../../redux/flightsReducer.js'
// Import image
import logoutIMG from '../../assets/logout.png'
import greyArrowIMG from "../../assets/greyArrow.png"

// нужно для правильного стартового отображения календаря
function addZero(int) {
  if (int < 10) int = '0' + int
  return int
}

const Flights = (props) => {

  SwiperCore.use([Navigation, Autoplay, A11y])

  let counterFavorites = 0
  props.flights.forEach(item => item.favorite && counterFavorites++)
  let counterWord = String(counterFavorites)
  counterWord = ['1'].includes(counterWord[counterWord.length - 1])
    ? 'рейс'
    : ['2', '3', '4'].includes(counterWord[counterWord.length - 1])
      ? 'рейса'
      : 'рейсов'

  const time = new Date()
  const year = time.getFullYear()
  const month = addZero(time.getMonth() + 1)
  const date = addZero(time.getDate())
  const timeString = `${year}-${month}-${date}`

  const from = 'SVO'
  const to = 'JFK'
  let flights = props.flights.map(item => <Slot {...item} switchFavoriteFlights={props.switchFavoriteFlights} />)

  return (
    <div className='flights'>
      <div className="flights__body body">
        <div className="body__header">
          <div className="header__info">
            <span>Вылеты</span>
            <img src={greyArrowIMG} alt="" />
            <span>{from} - {to}</span>
          </div>
          <div className="header__date">
            <input type="date" min={timeString} defaultValue={timeString} />
          </div>
        </div>
        <div className="body__slaiderImages" >
          <Swiper
            spaceBetween={100}
            slidesPerView={4}
            autoplay
            navigation
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {props.sliderPhoto.map(item =>
              <SwiperSlide data-swiper-autoplay="2500" >
                <img src={item} alt="" />
              </SwiperSlide>
            )}
          </Swiper>
        </div>
        <div className="body__favoriteCounter">
          <span>
            Добавлено в Избранное:
            <span className="counter">
              {counterFavorites}
            </span>
            {counterWord}
          </span>
        </div>
        <div className="body__flightsItems">
          {flights}
        </div>
      </div>
      <div className="flights__exit">
        <a href="#">
          <span>Выйти</span>
          <img src={logoutIMG} alt="Logout" />
        </a>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  flights: state.flightsReducer.flights,
  sliderPhoto: state.flightsReducer.sliderPhoto,
})

export default connect(mapStateToProps, { switchFavoriteFlights })(Flights)