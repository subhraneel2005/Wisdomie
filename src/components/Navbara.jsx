import React from 'react'
import { motion } from 'framer-motion'
import { FaBackward, FaCrown } from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";
import Home from './Home';
import HomeButton from './HomeButton';

function Navbara() {

    const { loginWithRedirect, isAuthenticated, logout} = useAuth0();
    

  return (
                <motion.div className='flex justify-between items-center h-14 w-full py-6 px-8 bg-transparent fixed z-10'>
                      <h1 className='md:text-4xl text-2xl text-slate-900 font-semibold select-none'>Wisdomie</h1>
                    <motion.div className='flex gap-2 justify-between'>
                      <HomeButton/>
                    {/* <motion.div className='select-none md:text-xl text-sm font-bold bg-fuchsia-600 p-2 rounded-lg gap-1 text-fuchsia-300 cursor-pointer flex'>Contribute</motion.div> */}

                    {isAuthenticated ? (<button className='select-none text-red-300 bg-red-600 px-3 py-2 font-semibold md:text-lg text-sm rounded-lg' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>) : (<button className='select-none bg-lime-800 text-lime-300 px-3 py-2 font-semibold text-lg rounded-lg' onClick={() => loginWithRedirect()}>Log In</button>)
                                    }
                    </motion.div>
                </motion.div>
  )
}

export default Navbara