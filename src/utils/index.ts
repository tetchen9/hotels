import { Hotel } from '../../types'

export const sortHotelsByPrice = (hotels: Hotel[]) => {
    return hotels.sort((a,b) => a.price - b.price)
}

export const intersectionOfHotels = (hotelsA: Hotel[], hotelsB: Hotel[]) => {
    return hotelsA.filter(hotel => {
        return hotelsB.some(h => h.name === hotel.name)
    })
}