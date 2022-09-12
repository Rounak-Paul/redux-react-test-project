import "./App.css"
import {useSelector, useDispatch} from "react-redux"
import {incNumber, decNumber} from "./actions"

function App() {
  const myState = useSelector((state) => state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <>
      <div className='container'>
        <h1>Redux</h1>
        <a title='Decrement' onClick={() => dispatch(decNumber())}><span>-</span></a>
        <input name='quantity' type='text' value={myState}/>  
        <a title='Increment' onClick={() => dispatch(incNumber())}><span>+</span></a>
      </div>
    </>
  );
}

export default App;
