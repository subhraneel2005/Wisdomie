import React from 'react'

function Bpl() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px] rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Playlists</h1>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLbtI3_MArDOk7J-8hR6CeB5U6bvgRKNNr&si=ghADOUcCxUu9Be" target='blank'>Sheriyans Coding School</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&si=pZFDBGC6pb_miW4c" target='blank'>Chai aur Code</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLQnljOFTspQUNnO4p00ua_C5mKTfldiYT&si=pl2jjYVyPj8uVatL" target='blank'>Hussain Naseer</a></div>
        </div>
    </div>
  )
}

export default Bpl