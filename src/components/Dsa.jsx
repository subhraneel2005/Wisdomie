import React, { useRef } from 'react'
import { motion } from  'framer-motion'
import DsaYt from './cards/DsaYt'
import DsaPl from './cards/DsaPl'

function Dsa() {
  const constraintsRef = useRef(null)
  return (
    <motion.div ref={constraintsRef} className='h-screen w-full bg-green-500 flex justify-center items-center'>
      <div className='block md:flex'>
      <motion.div drag
      dragConstraints={constraintsRef}><DsaYt/>
      </motion.div>
      <div className='text-[10vw] font-bold text-green-800 select-none'>DSA</div>
      <motion.div drag
      dragConstraints={constraintsRef}><DsaPl/>
      </motion.div>
      </div>
    </motion.div>
  )
}

export default Dsa