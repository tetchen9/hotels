import { Rating } from '../../types'

export const RATING_ALL = 'All'

export type Option = { 
  isChecked: boolean
  label: string | Rating 
}

/**
 * Returns an array of Rating, one for each
 * checked ratings ckeckboxes
 * If checkbox with label 'All' is checked, returns an empty array
 *
 * @param {Option[]} options checkbox values
 * @return {Rating[]} an array of Rating
 */
export const getSelectedRatings = (options: Option[]): Rating[] => {
  const allIsChecked = options
    .filter(({label, isChecked}) => label === RATING_ALL && isChecked)
    .length

  const getRatings = () => {
    return options.reduce((ratings, option) => {
      if (option.isChecked) {
        const rating: Rating = typeof option.label === 'number' ? option.label : 0
        ratings.push(rating)
      }
      return ratings
    }, [] as Rating[])
  }

  return allIsChecked ? [] : getRatings()
}