import React from 'react'
import useStringHook from '../hooks/useStringHook'

function Example() {
    const {stringHookState, reverseString, doubleString} = useStringHook();
  return (
    <div>
        <h2>Example</h2>
        <h4>{stringHookState}</h4>
        <button onClick={reverseString}> Reverse string </button>
        <button onClick={doubleString}> Double string </button>
        </div>
  )
}

export default Example