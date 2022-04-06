import React from 'react'
import { useState } from 'react'
//or 
//import React, { useState } from 'react'
//this does the same thing but in one line of code

function App(){
  let [ counter, changeCounter ] = useState(1)
  window.changeCounter = changeCounter
  return (
      <div>
          <h1>{counter}</h1>
          <h4>{counter}</h4>
      </div>
  )
}






export default App





