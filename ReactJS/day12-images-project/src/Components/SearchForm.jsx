import React from 'react'
import { useGlobalContext } from '../AppContext'

const SearchForm = () => {

    const {setSearchTerm}= useGlobalContext();

    const handleSubmit = (event)=>{
      
        event.preventDefault();
        const searchValue = event.target.elements.search.value;
        
        if(!searchValue)return;
        setSearchTerm(searchValue);
    }

  return (
    <div>
        <h1 className='title'>Images</h1>
        <form action="submit" onSubmit={handleSubmit} className='search-form'>
            <input type="text" name="search" placeholder='search here...' className='search' />
            <button type='submit' className='search-btn'>Search</button>
        </form>
    </div>
  )
}

export default SearchForm