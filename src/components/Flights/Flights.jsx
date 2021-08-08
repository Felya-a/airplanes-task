import './Flights.scss'
import Slot from './Slot/Slot'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay, A11y } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
// Import image
import logoutIMG from '../../assets/logout.png'
import greyArrowIMG from "../../assets/greyArrow.png"
import slidePhoto1 from '../../assets/sliderPhoto/Rectangle 23.png'
import slidePhoto2 from '../../assets/sliderPhoto/Rectangle 24.png'
import slidePhoto3 from '../../assets/sliderPhoto/Rectangle 28.png'

const Flights = (props) => {
  SwiperCore.use([Autoplay, A11y])
  const time = new Date()
  const timeString = `${time.getFullYear()}-${time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1}-${time.getDate() < 10 ? '0' + time.getDate() : time.getDate()}`
  const from = 'SVO'
  const to = 'JFK'
  let slidePhoto = [slidePhoto1, slidePhoto2, slidePhoto3]
  slidePhoto = [...slidePhoto, ...slidePhoto, ...slidePhoto, ...slidePhoto]
  const month = {
    0: 'января',
    1: 'февраля',
    2: 'марта',
    3: 'апреля',
    4: 'мая',
    5: 'июня',
    6: 'июля',
    7: 'августа',
    8: 'сентября',
    9: 'октября',
    10: 'ноября',
    11: 'декабря',
  }
  const mainFligths = [
    {
      from: 'Moscow (SVO)',
      to: 'New York City (JFK)',
      date: '28 June, 2020',
      time: '14:50',
      company: 'Aeroflot',
      priсe: 23924,
      favorite: false
    }
  ]
  let flights = mainFligths.map(item => <Slot {...item} />)
  flights = [...flights, ...flights, ...flights, ...flights, ...flights, ...flights, ...flights, ...flights, ...flights, ...flights]

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
            navigation
            autoplay
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {slidePhoto.map(item => <SwiperSlide data-swiper-autoplay="2500"><img src={item} alt="" /></SwiperSlide>)}
          </Swiper>
        </div>
        <div className="body__favoriteCounter">
          <span>Добавлено в Избранное: <span className="counter">{123}</span> рейсов</span>
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

export default Flights