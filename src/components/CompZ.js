import React, { useContext } from 'react'
import { myContext } from '../App'

const CompZ = () => {
    const contextData = useContext(myContext)
  return (
    <div className='compz'>
        <h3>This is Component Z </h3>
        <h4>{contextData}</h4>
    </div>
    
  )
}

export default CompZ