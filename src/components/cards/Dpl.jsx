import React from 'react'

function Dpl() {
  return (
    <div className='md:w-[200px] md:h-[300px] w-[150px] h-[200px] rounded-[20px] bg-zinc-800/80 flex justify-center items-center select-none cursor-pointer px-3 py-2'>
        <div className='block text-zinc-400 md:text-2xl text-xl'>
        <h1 className='md:text-4xl text-2xl text-zinc-300'>Free Playlists</h1>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak&si=k-eGgE_PEt_eSE14" target='blank'>Kunal Kushwaha</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLdpzxOOAlwvIKMhk8WhzN1pYoJ1YU8Csa&si=FFCQk1K7_VUvdhPE" target='blank'>Abhisek Veeramalla</a></div>
            <div><a className=' decoration-neutral-400' href="https://youtube.com/playlist?list=PLWKjhJtqVAbkzvvpY12KkfiIGso9A_Ixs&si=u0wrbdDqbKPvVM92" target='blank'>Free Code Camp</a></div>
        </div>
    </div>
  )
}

export default Dpl