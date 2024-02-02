import React from 'react'

function Cyt() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px]  rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Videos</h1>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/inWWhr5tnEA?si=9vE63z7smAIyZALu" target='blank'>Simplilearn</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/WMSsTGg8KWE?si=cfcirk1Tx7X550Oj" target='blank'>WsCube Cyber Security</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/Rgvzt0D8bR4?si=-hUimwqwwnVwb4Hn" target='blank'>WsCube Tech</a></div>
        </div>
    </div>
  )
}

export default Cyt