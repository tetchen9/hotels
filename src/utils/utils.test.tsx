import { Hotel } from '../../types'
import { sortHotelsByPrice } from '.'

const hotels: Hotel[] = [{
  price: 1,
  name: 'string',
  roomType: 'string',
  rating: 1,
  image: 'string'
}, {
  price: 3,
  name: 'string',
  roomType: 'string',
  rating: 1,
  image: 'string'
}, {
  price: 2,
  name: 'string',
  roomType: 'string',
  rating: 1,
  image: 'string'
}]

test('sorts hotels by prices correctly', () => {
  const sorted = sortHotelsByPrice(hotels)
  expect(sorted[0].price).toBe(1)
  expect(sorted[1].price).toBe(2)
  expect(sorted[2].price).toBe(3)
})
