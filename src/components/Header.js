import React from 'react'

export default function Header({toggleInfo,Toggler}) {
    const toggleHandler=()=>{
        Toggler(toggleInfo);
    }
  return (
    <div className='head'>
        <h1 style={{color:"gray"}}>Notes</h1>
        <div className='toggler' onClick={toggleHandler}>Toggle Mode</div>
    </div>
  )
}
