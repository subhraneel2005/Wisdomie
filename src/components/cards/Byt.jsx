import React from 'react'

function Byt() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px]  rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Videos</h1>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/Uc3Iq41npyI?si=q3Q551Wh1C8fWJKE" target='blank'>Chai aur Code</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/H9M02of22z4?si=WLnnfXnxfuL9wPa_" target='blank'>Dipesh Malvia</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtu.be/cGAdC4A5fF4?si=4LVxG8hxMeSyarNo" target='blank'>6 Pack Programmer</a></div>
        </div>
    </div>
  )
}

export default Byt