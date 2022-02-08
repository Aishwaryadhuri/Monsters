import React from 'react';
// import '../search-box/serach-box.styles.css';
import '../Searchbox/SearchboxStyle.css';
export const SearchBox = ({placeholder,handleChange}) => (
<input
 className='search'
 type='search'
 placeholder={placeholder}  
onChange={handleChange}
/>

);