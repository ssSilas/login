import React from 'react'
import './Dot.css'
const Dot = ({justify}) => {
  return ( 
    <>
      <div style={{ justifyContent: justify }} className='conteiner-dot'>
        <span className="dot"></span>
      </div>
    </>
  );
}
 
export default Dot;