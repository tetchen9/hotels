import { Hotel } from '../../types'
import { sortHotelsByPrice } from './hotelsListUtils'

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

describe('sortHotelsByPrice', () => {
  test('sorts hotels by prices correctly', () => {
    const sorted = sortHotelsByPrice(hotels)
    expect(sorted[0].price).toBe(1)
    expect(sorted[1].price).toBe(2)
    expect(sorted[2].price).toBe(3)
    expect(sorted[3].price).toBe(5)
    expect(sorted[4].price).toBe(8)
  })
})
