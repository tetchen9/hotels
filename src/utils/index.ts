import { Hotel } from '../../types'

export const sortHotelsByPrice = (hotels: Hotel[]) => {
    return hotels.sort((a,b) => a.price - b.price)
}