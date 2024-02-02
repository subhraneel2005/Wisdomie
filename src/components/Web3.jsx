import React, { useRef } from 'react'
import { motion } from  'framer-motion'
import Wyt from './cards/Wyt'
import Wpl from './cards/Wpl'

function Web3() {
  const constraintsRef = useRef(null)
  return (
    <motion.div ref={constraintsRef} className='h-screen w-full bg-rose-500 flex justify-center items-center'>
      <div className='block md:flex'>
      <motion.div drag
      dragConstraints={constraintsRef}><Wyt/>
      </motion.div>
      <div className='text-[10vw] font-bold text-rose-800 select-none'>Web 3</div>
      <motion.div drag
      dragConstraints={constraintsRef}><Wpl/>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default Web3