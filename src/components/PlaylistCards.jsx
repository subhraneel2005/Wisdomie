import React from 'react'

function PlaylistCards() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px] rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Playlists</h1>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLwGdqUZWnOp2Z3eFOgtOGvOWIk4e8Bsr_&si=xN6pnFPSREO-DGsP" target='blank'>Thapa Technical</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLDzeHZWIZsTo0wSBcg4-NMIbC0L8evLrD&si=JpeD7Bbb6sV_ZBlv" target='blank'>Love Babbar</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLt5mNkGuWcuXc26LBe_5mBfVoN-12q_ns&si=eOKooxDdZbsqhJjH" target='blank'>6 Pack Programmer</a></div>
        </div>
    </div>
  )
}

export default PlaylistCards