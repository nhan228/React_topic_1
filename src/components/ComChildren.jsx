// import React from 'react'
import ComBrother from './ComBrother'

// eslint-disable-next-line react/prop-types
export default function ComChildren({count, e}) {

  return (
    <>
      <button onClick={()=>{e('Hello man')}}>Click me!</button>
      {/* <button onClick={function a(){
        alert('Ok u have clicked')
      }}>Click me!</button> */}

        <div> ComChildren {count} </div>
        <ComBrother countaaa={count} />
    </>
  )
}
