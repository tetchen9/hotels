import { Rating } from "../../types"

export type Option = { 
  isChecked: boolean
  label: string | Rating 
}

/**
 * Returns an array of Rating, one for each
 * checked ratings ckeckboxes
 * If 'All' is checked, returns an empty array
 *
 * @param {Option[]} options checkbox values
 * @return {Rating[]} an array of Rating
 */
export const getSelectedRatings = (options: Option[]): Rating[] => {
  const allIsChecked = options
    .filter(({label, isChecked}) => label === 'All' && isChecked)
    .length

  const getRatings = () => {
    return options.reduce((ratings, option) => {
      if (option.isChecked) {
        ratings.push((typeof option.label === 'number' ? option.label : 0) as Rating)
      }
      return ratings
    }, [] as Rating[])
  }

  return allIsChecked ? [] : getRatings()
}