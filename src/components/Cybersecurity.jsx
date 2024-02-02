import React, { useRef } from 'react'
import { motion } from  'framer-motion'
import Cyt from './cards/Cyt'
import Cpl from './cards/Cpl'

function Cybersecurity() {
  const constraintsRef = useRef(null)
  return (
    <motion.div ref={constraintsRef} className='h-screen w-full bg-emerald-500 flex justify-center items-center'>
      <div className='block md:flex'>
      <motion.div drag
      dragConstraints={constraintsRef}><Cyt/>
      </motion.div>
      <div className='text-[10vw] font-bold text-emerald-800 select-none'>CyberSecurity</div>
      <motion.div drag
      dragConstraints={constraintsRef}><Cpl/>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default Cybersecurity