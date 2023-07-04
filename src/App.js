import logo from './logo.svg';
import './App.css';
import images from './image.js';

import { useState, useEffect } from 'react';
import Thumbnail from './thumbnail.js';



function App() {


  const [currentImageIndex, setcurrentImageIndex]=useState(0)
  const[isChecked, setisChecked]=useState(false)
  const handleCheckboxChange=()=>{
    setisChecked(!isChecked)
    
      
  }
  const handlenext=()=>{
    const lastimage= images.length-1 == currentImageIndex; 
    
    lastimage? setcurrentImageIndex(0):setcurrentImageIndex(currentImageIndex+1)
  
  }
   const handleprev=()=>{
    const firstimage=currentImageIndex==0
    firstimage? setcurrentImageIndex(images.length-1):setcurrentImageIndex(currentImageIndex-1)
  

   }
   const handlethumb=(index)=>{
    setcurrentImageIndex(index)
   }
  
 useEffect(() => {
 if (isChecked){const automatic= setInterval(() => {
  handlenext()
 }, 2000);

   return () => {
   clearInterval(automatic)
   }}
 }, [isChecked, currentImageIndex])
 const [isactive, setisactive]=useState(false)
 const handledot=(e)=>{
  setcurrentImageIndex(e)
  setisactive(!isactive)
 }
 
 const handleSwipe = (direction) => {
  if (direction === 'left') {
    handlenext();
  } else if (direction === 'right') {
    handleprev();
  }
};
 useEffect(() => {
  let startX = 0;
  let startY = 0;

  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = endX - startX;
    const diffY = endY - startY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        handleSwipe('right');
      } else {
        handleSwipe('left');
      }
    }
  };

  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchend', handleTouchEnd);

  return () => {
    document.removeEventListener('touchstart', handleTouchStart);
    document.removeEventListener('touchend', handleTouchEnd);
  };
}, [currentImageIndex]);
 
  return (
    <>
    <div className='image-container'>
    
    <img src={images[currentImageIndex]} key={currentImageIndex} />
      
    </div>
    <Thumbnail handlethumb={handlethumb}/>
    
    <button onClick={handlenext}>next</button>
    <button onClick={handleprev}>prev</button>
    <input
          type="checkbox" 
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <div className='dotman'>{images.map((elem ,index)=>{
          return <div key={index} className={currentImageIndex === index ? 'active-dot' : 'dot'}
           onClick={() => handledot(index)}>O</div>
        })}</div>

    </>
  
  );
}

export default App;
