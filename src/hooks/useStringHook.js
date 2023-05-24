import {useState} from 'react'

const useStringHook = () => {
    const [stringHookState, setStringHookState] = useState("This is a string");
    const someWords = "Hello World"
    const reverseString = () => {
        setStringHookState(stringHookState.split('').reverse().join(''))
    }
    const doubleString = () => {
        setStringHookState(`${stringHookState}${stringHookState}`);
    }
    
  return {
    stringHookState: stringHookState,
    HelloWorld: someWords,
    reverseString: reverseString,
    doubleString: doubleString,
  }
}

export default useStringHook