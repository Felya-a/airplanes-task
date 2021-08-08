import slidePhoto1 from '../assets/sliderPhoto/Rectangle 23.png'
import slidePhoto2 from '../assets/sliderPhoto/Rectangle 24.png'
import slidePhoto3 from '../assets/sliderPhoto/Rectangle 28.png'

const SWITCH_FAVORITE_FLIGHTS = "SWITCH_FAVORITE_FLIGHTS"

export const switchFavoriteFlights = (id) => ({ type: SWITCH_FAVORITE_FLIGHTS, id })

const initialState = {
  flights: [
    {
      id: 1,
      from: 'Moscow (SVO)',
      to: 'New York City (JFK)',
      date: '28 June, 2020',
      time: '14:50',
      company: 'Aeroflot',
      priсe: 23924,
      favorite: false
    },
    {
      id: 2,
      from: 'Moscow (SVO)',
      to: 'New York City (JFK)',
      date: '28 June, 2020',
      time: '14:50',
      company: 'Aeroflot',
      priсe: 23924,
      favorite: false
    },
    {
      id: 3,
      from: 'Moscow (SVO)',
      to: 'New York City (JFK)',
      date: '28 June, 2020',
      time: '14:50',
      company: 'Aeroflot',
      priсe: 23924,
      favorite: false
    },
    {
      id: 4,
      from: 'Moscow (SVO)',
      to: 'New York City (JFK)',
      date: '28 June, 2020',
      time: '14:50',
      company: 'Aeroflot',
      priсe: 23924,
      favorite: false
    },
    {
      id: 5,
      from: 'Moscow (SVO)',
      to: 'New York City (JFK)',
      date: '28 June, 2020',
      time: '14:50',
      company: 'Aeroflot',
      priсe: 23924,
      favorite: false
    },
    {
      id: 6,
      from: 'Moscow (SVO)',
      to: 'New York City (JFK)',
      date: '28 June, 2020',
      time: '14:50',
      company: 'Aeroflot',
      priсe: 23924,
      favorite: false
    },
    {
      id: 7,
      from: 'Moscow (SVO)',
      to: 'New York City (JFK)',
      date: '28 June, 2020',
      time: '14:50',
      company: 'Aeroflot',
      priсe: 23924,
      favorite: false
    },
  ],
  sliderPhoto: [
    slidePhoto1,
    slidePhoto2,
    slidePhoto3,
    slidePhoto1,
    slidePhoto2,
    slidePhoto3,
    slidePhoto1,
    slidePhoto2,
    slidePhoto3,
  ]
}

const flightsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_FAVORITE_FLIGHTS:
      return {
        ...state,
        flights: [...state.flights.map(item => item.id === action.id ? { ...item, favorite: !item.favorite } : item)]
      }
    default:
      return state
  }
}

export default flightsReducer