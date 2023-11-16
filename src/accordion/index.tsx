import React, { useState } from 'react'
import clsx from 'clsx'
import './styles.scss'

interface AccordionProps {
  title: string
  children: JSX.Element
}

function Accordion({ title, children } : AccordionProps) {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => setIsOpen((isOpen) => !isOpen)

  const style = clsx('accordion', {
    'open': isOpen,
    'closed': !isOpen,
  })

  return (
    <div className={style}>
      <hr/>
      <header onClick={toggle} >
        {title}
      </header>
      <div className='accordion-body'>
        {children}
      </div>
    </div>
  )
}

export default Accordion
