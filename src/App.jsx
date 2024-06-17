import React from 'react'
import RandomGif from './Components/RandomGif'
import Tag from './Components/Tag'

const App = () => {
  return (
    <div className='flex flex-col  items-center h-screen w-screen'>
          <h1 className="bg-black text-white text-center font-bold p-2 w-screen">
            RANDOM GIF
          </h1>
        <RandomGif/>
        <Tag/>
    </div>
  )
}

export default App
