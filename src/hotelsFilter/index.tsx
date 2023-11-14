import React from 'react'
import { Hotel } from '../../types'
import './styles.scss'

interface HotelsFilterProps {
  hotels: Hotel[]
}

function HotelsFilter({hotels} : HotelsFilterProps) {

  return (<div className='filter-wrapper'>
    some text here
  </div>)
}

export default HotelsFilter
