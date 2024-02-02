import React, { useRef } from 'react'
import { motion } from  'framer-motion'
import Dyt from './cards/Dyt'
import Dpl from './cards/Dpl'

function Devops() {
  const constraintsRef = useRef(null)
  return (
    <motion.div ref={constraintsRef} className='h-screen w-full bg-fuchsia-500 flex justify-center items-center'>
      <div className='block md:flex'>
      <motion.div drag
      dragConstraints={constraintsRef}><Dyt/>
      </motion.div>
      <div className='text-[10vw] font-bold text-fuchsia-800 select-none'>Devops</div>
      <motion.div drag
      dragConstraints={constraintsRef}><Dpl/>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default Devops