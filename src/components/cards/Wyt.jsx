import React from 'react'

function Wyt() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px]  rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Videos</h1>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/uULy2rc6YDc?si=a-JObPZyq4EY1I1z" target='blank'>Apna College</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/aVQJGr2J8io?si=kLvFiXGtkGdRitjU" target='blank'>Javascript Mastery</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/6aF6p2VUORE?si=xPweF1Zk0ifxFuNu" target='blank'>Code Eater</a></div>
        </div>
    </div>
  )
}

export default Wyt