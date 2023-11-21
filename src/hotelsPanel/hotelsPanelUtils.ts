import { Hotel, Rating } from '../../types'

/**
 * Returns an array that contains all items of arrayA 
 * that alse exist in arrayB. It is assumes that the name of the hotel 
 * is a unique property and identifies a hotel.
 *
 * @param {Hotel[]} hotelsA an array of hotels
 * @param {Hotel[]} hotelsB an array of hotels
 * @return {Hotel[]} an array of hotels
 */
export const intersectionOfHotels = (hotelsA: Hotel[], hotelsB: Hotel[]) => {
    return hotelsA.filter(hotel => {
        return hotelsB.some(h => h.name === hotel.name)
    })
}

/**
 * Filters hotels by ratings. Returns an array of hotels
 * that have a rating that (when rounded down )exists in the set of ratings.
 * So when the filter has value 4 hotels with raing 4 and 4.5
 * will be included in the resulted array.
 * If the array of ratings is empty, the whole array is returned.
 *
 * @param {Hotel[]} hotels an array of hotels to filter
 * @param {Rating[]} ratings an array of ratings to filter by
 * @return {Hotel[]} a filtered array of hotels
 */
export const filterHotelsByRating = (hotels: Hotel[], ratings: Rating[]) => {
    return ratings?.length
      ? hotels.filter(({ rating }) => {
        return ratings.some(r => r === Math.floor(rating))
      })
      : hotels
  }

/**
 * Filters hotels by a query string. Returns an array of hotels
 * whose name contain a query string. The function is not case-sensitive.
 * If the string is falsy, the whole array of hotels is returned.
 *
 * @param {Hotel[]} hotels an array of hotels to filter
 * @param {string} queryString a string to filter by
 * @return {Hotel[]} a filtered array of hotels
 */
export const filterHotelsByName = (hotels: Hotel[], queryString: string ) => {
    return queryString
      ? hotels.filter(({ name }) => {
        return name.toLowerCase()
          .includes(queryString.toLowerCase())
      })
      : hotels
  }