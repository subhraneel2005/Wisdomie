import React from 'react'

function WebsiteCards() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px] rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Documentations</h1>
            <div>Link 1</div>
            <div>Link 1</div>
            <div>Link 1</div>
        </div>
    </div>
  )
}

export default WebsiteCards