import React from 'react'

function Wpl() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px] rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Playlists</h1>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLR0uCBk15bq96j_R_cS1Rwg96rfDAfCmM&si=Ne7LRyhlNpV3qRfF" target='blank'>Web3Mantra</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLxtDHyXvDm2MLgVfXQGlNzW5iXA8CuRBE&si=BhGQEvRyNYNvFkNy" target='blank'>Yannick Thomas</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLS5SEs8ZftgXlCGXNfzKdq7nGBcIaVOdN&si=LZ69s01YWH6pRc0X" target='blank'>Dapp University</a></div>
        </div>
    </div>
  )
}

export default Wpl