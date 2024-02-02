import React, { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navigate, useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
    
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }


function Home() {

    const [selectedId, setSelectedId] = useState(null);

    const navigate = useNavigate();

    const names = [
        {
            id:1,
            title:'MERN Stack',
            link: 'MERN Roadmap',
            route: '/mern stack',
        },
        {
            id:2,
            title:'Frontend',
            link: 'Frontend Roadmap',
            route: '/frontend',
        },
        {
            id:3,
            title:'Backend',
            link: 'Backend Roadmap',
            route: '/backend',
        },
        {
            id:4,
            title:'UI/UX',
            link: 'UI/UX Roadmap',
            route: '/uiux',
        },
    ]


  return (
    <motion.div className='w-full h-screen flex justify-center items-center bg-blue-400 select-none'>
            <motion.div className='block mt-10'>
                <h1 className=' text-center text-5xl mb-4'>Free resources for developers.</h1>
                <SearchBar/>
                <motion.div className='grid grid-cols-2 md:grid-cols-4 mt-28 ml-5 gap-3 md:gap-5' initial="hidden"
                animate="visible" variants={container}>
                   {names.map(({id,title, route}) => (
                        <motion.div layoutId={id} onClick={()=>setSelectedId(id)}>
                            <motion.div className='h-[66px] md:w-[200px] w-[140px] bg-green-300 rounded-xl cursor-pointer' variants={item} onClick={() => navigate(route)}>
                                <motion.div className='text-xl w-full h-full font-semibold text-green-950 flex justify-center items-center'>{title}</motion.div>
                            </motion.div>
                        </motion.div>
                   ))}
                </motion.div>
            </motion.div>
    </motion.div>
  )
}

export default Home