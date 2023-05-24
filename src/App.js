import './App.css';
import useStringHook from './hooks/useStringHook'
import Example from './components/Example'

function App() {

  const {
    stringHookState,
    reverseString
  } = useStringHook();

  return (
    <div className="App App-header">
      <h1>Custom hooks</h1>
      <h4>StringHook</h4>
      <h3>
        {stringHookState}
      </h3>
      <button onClick={reverseString}> Reverse string </button>
      <Example />
    </div>
  );
}

export default App;
