import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0); // returns an array i.e [ state, setState ]
    
    function addUp() {
        setCount(count + 1); // state is always modified using its respective setter
    }

  return (
    <div>
          <h1>{ count }</h1>
          <button onClick={ addUp }>Count Up</button>
    </div>
  )
}

export default Counter
