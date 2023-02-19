import React, { useState }from 'react'
import Winner from  './WinnerList/ChatList.js'
import People_nav from './People_nav';

import Home from '../Home/Home'
const FillExample=()=> {
  const [bg,setbg]=useState(Array(4).fill(false))
  bg[0]=true;
  const [list,setlist]=useState(false);
  return (
    <div>
<Home bg={bg} />
<div  className="__main">
  <Winner  show={list} onHide={()=>setlist(false)} />
   <People_nav show={!list} onHide={()=>setlist(true)} />
   
   </div>
    </div>
  );
}

export default FillExample;