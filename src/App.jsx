import { useState } from 'react'
import Canvas from './Components/Canvas';
import Input from './Components/Input';



function App() {
  const [values, setValues] = useState([]);

  function submitValues(input) {
    let element = '';
    let output = [];
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      if (!["[", "]", " "].includes(char)) {
        if (char == ',') {
          output.push(element);
          element = '';
          continue;
        } 
        element += char;
      }
    }
    console.log(output);
    setValues(output);
    setSeed(seed + 1);
  }

  return <div className='app'>
          <h1>BinarySearchTree vizualizer</h1>
          <div className='main'>
            <Canvas values={values} />
            <Input submit={submitValues} />
          </div>
        </div>
}

export default App;
