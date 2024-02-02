import React from 'react'

function Cpl() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px] rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Playlists</h1>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLYwpaL_SFmcArHtWmbs_vXX6soTK3WEJw&si=rOTCEorN4YoCvBDg" target='blank'>5 minutes Programming</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLEiEAq2VkUUJfPOj5nRounXvf3n17PCft&si=djLIz7c9M-w4sQ86" target='blank'>Smiplilearn</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PL9ooVrP1hQOGPQVeapGsJCktzIO4DtI4_&si=Lzp40gGnSU_llr65" target='blank'>Edureka</a></div>
        </div>
    </div>
  )
}

export default Cpl