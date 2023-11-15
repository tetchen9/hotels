import React, { useState } from 'react'
import './styles.scss'

interface InputSearchProps {
  setQueryString: (query: string) => void
}

function InputSearch({setQueryString}: InputSearchProps) {
  const [query, setQuery] = useState('')
  const title = 'Go'

  return (
    <div className='input-with-button'>
      <input type="text" value={query} 
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setQueryString(query)}>
        {title}
      </button>
    </div>
  )
}

export default InputSearch
