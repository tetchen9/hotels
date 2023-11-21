import { Option, RATING_ALL, getSelectedRatings } from './ratingUtils'

describe('getSelectedRatings', () => {
  test('makes an array of ratings from a list of checked options', () => {
    const options: Option[] = [{
      label: 1,
      isChecked: true,
    }, {
      label: 2,
      isChecked: false,
    }, {
      label: 'Unrated',
      isChecked: true,
    }]

    const ratings = getSelectedRatings(options)
    expect(ratings.length).toBe(2)
    expect(ratings[0]).toBe(1)
    expect(ratings[1]).toBe(0)
  })

  test('makes an array of ratings from a list of checked options with All checked', () => {
    const options: Option[] = [{
      label: RATING_ALL,
      isChecked: true,
    }, {
      label: 2,
      isChecked: false,
    }, {
      label: 3,
      isChecked: true,
    }]
    
    const ratings = getSelectedRatings(options)
    expect(ratings.length).toBe(0)
  })

  test('returns an empty array when none are cheked', () => {
    const options: Option[] = [{
      label: RATING_ALL,
      isChecked: false,
    }, {
      label: 2,
      isChecked: false,
    }, {
      label: 'Unrated',
      isChecked: false,
    }]
    
    const ratings = getSelectedRatings(options)
    expect(ratings.length).toBe(0)
  })

  test('retruns an empty array from an empty array', () => {
    const options: Option[] = []
    const ratings = getSelectedRatings(options)
    expect(ratings.length).toBe(0)
  })
})
