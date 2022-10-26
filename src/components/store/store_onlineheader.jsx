import React, { useState } from 'react'
import './store.css'
import { SiTarget } from 'react-icons/si';
import { BsSearch } from 'react-icons/bs';
import { BsPersonCheck } from 'react-icons/bs';
import { BsCart } from 'react-icons/bs';

const Onlineheader = () => {



  //search query
  // const { search } = window.location;
  // const query = new URLSearchParams(search).get('s');
  // const [searchQuery, setSearchQuery] = useState(query || '');
  // const filteredPosts = filterPosts(posts, searchQuery);
  
//temp data
  const testSearch = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];


    // const [searchInput, setSearchInput] = useState('');
    // const handleChange = (e) => {
    //   e.preventDefault();
    //   setSearchInput(search_input.value);
    // };
    // if (searchInput.length > 0) {
    //     testSearch.filter((country) => {
    //     return country.name.match(searchInput);
    // });
    // }



  return (
    <div className='online_header'>
    
    <div className='store_online_logo_cont'><SiTarget className='store_online_logo'/></div>
    <div className='store_desktop_link'><div className='store_desktop_link_inner'> Categories</div></div>
    <div className='store_desktop_link'><div className='store_desktop_link_inner'> Deals</div></div>
    <div className='store_desktop_link'><div className='store_desktop_link_inner'> What's New</div></div>
    <div className='store_desktop_link'><div className='store_desktop_link_inner'> Pickup & Delivery</div></div>
  
    <input
   type="text"
   id='search_input'
   placeholder="Search here"
   value="" />


{/* <div>
            <Search
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredPosts.map(post => (
                    <li key={post.key}>{post.name}</li>
                ))}
            </ul>
        </div> */}


   {/* <input 
   type="submit"
   className='submit_btn'
    onClick={handleChange}
    /> */}
    
    
    <BsSearch />
    <div className='sign_in' id='sign_in_div'>
    <BsPersonCheck /> Sign In
    </div>
    <BsCart />

    
    
    </div>
  )
}

export default Onlineheader