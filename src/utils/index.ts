import { Hotel, Rating } from '../../types'

export const sortHotelsByPrice = (hotels: Hotel[]) => {
    return hotels.sort((a,b) => a.price - b.price)
}

export const intersectionOfHotels = (hotelsA: Hotel[], hotelsB: Hotel[]) => {
    return hotelsA.filter(hotel => {
        return hotelsB.some(h => h.name === hotel.name)
    })
}

export const filterHotelsByRating = (hotels: Hotel[], ratings: Rating[]) => {
    return ratings?.length
      ? hotels.filter(({ rating }) => {
        return ratings.some(r => r === Math.floor(rating))
      })
      : hotels
  }

export const filterHotelsByName = (hotels: Hotel[], queryString: string ) => {
    return queryString
      ? hotels.filter(({ name }) => {
        return name.toLowerCase()
          .includes(queryString.toLowerCase())
      })
      : hotels
  }