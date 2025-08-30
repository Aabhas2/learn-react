import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Clock from './components/Clock';
const App = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list');
    
    setData(response.data); 
  }
  
  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='p-20'>
      <Clock /> 
      <div className='p-5 mt-5 bg-gray-900'>
        {data.map(function(elem,idx){
          return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 py-6 rounded mb-3'>
            <img className='h-40' src={elem.download_url} alt="" />
            <h1>{elem.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
