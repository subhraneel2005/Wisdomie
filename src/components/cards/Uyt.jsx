import React from 'react'

function Uyt() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px]  rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Videos</h1>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/55NvZjUZIO8?si=RE_ptlNMAbdatRIw" target='blank'>Simplilearn</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/195RY7jCuZg?si=Tle_17DvXNWta2_I" target='blank'>DesignSense</a></div>
            <div><a className=' decoration-neutral-400' href="https://www.youtube.com/live/Qmhv1_Z7MIA?si=Zx2446AYPKpQ68zp" target='blank'>Intelipaat</a></div>
        </div>
    </div>
  )
}

export default Uyt