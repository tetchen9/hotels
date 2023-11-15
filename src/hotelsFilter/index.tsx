import React from 'react'
import './styles.scss'
import InputSearch from '../inputSearch'

interface HotelsFilterProps {
  setQueryString: (query: string) => void
}

function HotelsFilter({ setQueryString } : HotelsFilterProps) {
  const title = 'Filter Results'

  return (<div className='filter-wrapper'>
    <strong>{title}</strong>
    <br/>
    <InputSearch setQueryString={setQueryString}></InputSearch>

  </div>)
}

export default HotelsFilter
