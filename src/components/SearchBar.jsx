import React,{ useState } from 'react'
import { motion } from 'framer-motion'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom';

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        // Redirect to the route based on the search query
        navigate(`/${searchQuery.toLowerCase()}`);
      };

      const handleKeyPress = (e) => {
        // Trigger search when Enter key is pressed
        if (e.key === 'Enter') {
          handleSearch();
        }

        const closestMatch = routes.find(route => route.includes(searchQuery.toLowerCase()));

        // Redirect to the closest matching route
        if (closestMatch) {
          navigate(`/${closestMatch}`);
        } else {
          // Handle case when no match is found
          console.log('No match found');
        }
      };

  return (
    <motion.div className='w-full h-16 flex justify-center items-center'>
        <motion.div className='bg-green-200 rounded-xl px-3 py-2 flex h-full w-[60%] gap-3 justify-between'>
            <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            type='text' placeholder='FullStack Roadmap' className='text-xl md:text-2xl text-black outline-none border-none bg-transparent w-full'/>
            <CiSearch onClick={handleSearch} size={30} className='mt-2 cursor-pointer'/>
        </motion.div>
    </motion.div>
  )
}

export default SearchBar