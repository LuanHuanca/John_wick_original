import React from 'react'
import './Search.css'
import { Icon } from '@iconify/react';

const Search = () => {
  return (
    <div className='search-container'>
        
        <Icon icon="clarity:search-line" />
        <input type="text" placeholder="Search Movie" />
    </div>
  )
}

export default Search
