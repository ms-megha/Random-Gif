import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_KEY = import.meta.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

const useGif = (tag) => {
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(true);

  async function fetchGif() {
    setLoading(true);
    try {
      const {data} = await axios.get(tag? `${url}&tag=${tag}` : url);
      setGif(data.data.images.downsized_large.url);
    } catch (error) {
      console.error('Error fetching the GIF:', error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchGif();
  }, []); 

  return {gif, loading, fetchGif}
}

export default useGif
