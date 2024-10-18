import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {useFact} from '../hooks/useFact'
import './App.css'

function App() {

  const {fact, factArray, getFact} = useFact()


  return (
    <main>
      <h1>Front End Tech Interview</h1>
      <section>
        <div>
          <p> Random fact: <span> "{fact}" </span> </p>
          <button onClick={getFact}>New Fact</button>
        </div>
       <div className='container' >
          <img src={reactLogo} alt="" />
          <div className='text-container'>

            {
              factArray.length > 0 ? factArray.map((item) => {
                return <p key={item.key} > {item.text} </p>
              }) : <p>No request made yet</p>
            }
          </div>
        </div> 
      </section>
    </main>
  )
}

export default App
