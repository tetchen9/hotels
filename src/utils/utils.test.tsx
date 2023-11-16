import { Hotel } from '../../types'
import { sortHotelsByPrice, intersectionOfHotels } from '.'

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
  rating: 1,
  image: 'string'
}, {
  price: 2,
  name: 'string3',
  roomType: 'string',
  rating: 1,
  image: 'string'
}]

describe('sortHotelsByPrice', () => {
  test('sorts hotels by prices correctly', () => {
    const sorted = sortHotelsByPrice(hotels)
    expect(sorted[0].price).toBe(1)
    expect(sorted[1].price).toBe(2)
    expect(sorted[2].price).toBe(3)
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