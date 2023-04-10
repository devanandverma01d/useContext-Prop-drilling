import React from 'react'
import CompB from './CompB'

const CompA = () => {
  return (
    <div className='compa'>
    <h3>This is Component A</h3>
    <CompB />
    </div>
  )
}

export default CompA