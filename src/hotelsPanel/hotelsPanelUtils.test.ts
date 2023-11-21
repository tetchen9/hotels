import { Hotel } from '../../types'
import { 
  intersectionOfHotels, 
  filterHotelsByRating, 
  filterHotelsByName,
} from './hotelsPanelUtils'

const hotels: Hotel[] = [{
  price: 1,
  name: 'string1',
  roomType: 'string',
  rating: 1,
  image: 'string'
}, {
  price: 3,
  name: 'string2',
  roomType: 'string',
  rating: 1.5,
  image: 'string'
}, {
  price: 5,
  name: 'string5',
  roomType: 'string',
  rating: 3,
  image: 'string'
}, {
  price: 2,
  name: 'string3',
  roomType: 'string',
  rating: 2.5,
  image: 'string'
}, {
  price: 8,
  name: 'string5',
  roomType: 'string',
  rating: 2,
  image: 'string'
}]

describe('filterHotelsByRating', () => {
  test('filters hotels by rating correctly', () => {
    const filtered = filterHotelsByRating(hotels, [1, 2, 5])
    expect(filtered.length).toBe(4)
    expect(filtered[0].rating).toBe(1)
    expect(filtered[1].rating).toBe(1.5)
    expect(filtered[2].rating).toBe(2.5)
    expect(filtered[3].rating).toBe(2)
  })

  test('returns the whole list when there is no query', () => {
    const filtered = filterHotelsByRating(hotels, [])
    expect(filtered.length).toBe(5)
  })
})

describe('filterHotelsByName', () => {
  test('filters hotels by name correctly', () => {
    const filtered = filterHotelsByName(hotels, 'string2')
    expect(filtered.length).toBe(1)
    expect(filtered[0].name).toBe('string2')
  })

  test('returns the whole list when there is no query', () => {
    const filtered = filterHotelsByName(hotels, '')
    expect(filtered.length).toBe(5)
  })
})

describe('intersectionOfHotels', () => {
  const hotelsB: Hotel[] = [{
    price: 1,
    name: 'string1',
    roomType: 'string',
    rating: 1,
    image: 'string'
  }, {
    price: 3,
    name: 'string2',
    roomType: 'string',
    rating: 1,
    image: 'string'
  }, {
    price: 2,
    name: 'string4',
    roomType: 'string',
    rating: 1,
    image: 'string'
  }]

  test('returns an intersection of two arrays', () => {
    const intersection = intersectionOfHotels(hotels, hotelsB)
    expect(intersection.length).toBe(2)
    expect(intersection[0].name).toBe('string1')
    expect(intersection[1].name).toBe('string2')
  })
})