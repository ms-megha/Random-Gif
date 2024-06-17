import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import useGif from '../Hook/useGif';

const API_KEY = import.meta.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState('');
  const {gif, loading, fetchGif} = useGif(tag);

  function changeHandeler(event){
    setTag(event.target.value);

  }
  function clickHandler() {
    fetchGif(tag);
  }

  return (
    <div className='bg-orange-500	 h-auto w-1/4 flex flex-col justify-center items-center mt-3'>
      <h1>Random {tag} GIF</h1>
      <div className='w-1/2 ml-2 mr-2 mt-2 flex justify-center items-center'>
        {
          loading ? (<Spinner/>):(<img src={gif} alt="Random GIF" />)
        }
      </div>
      <input onChange={changeHandeler} 
      value={tag}
      className=' p-2  w-1/2	mx-0	mt-5 mb-3 text-center border-0 focus:outline-none'/>
      <button onClick={clickHandler} type="button" className='bg-yellow-500 text-white p-2  w-1/2	mx-0 mb-3'>Generate</button>
    </div>
  );
}

export default Tag;
