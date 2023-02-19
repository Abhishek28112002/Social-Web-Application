import React, { useState }from 'react'
import Profile_Page from './Profile_Page'
import Winner from  './WinnerList/ChatList.js'
import './profile.css'
import Home from '../Home/Home'
const FillExample=()=> {
  const [bg,setbg]=useState(Array(4).fill(false))
  
  const [list,setlist]=useState(false);
  return (
    <div>
<Home bg={bg} />
<div  className="__main">
<Winner  open={!list} onBack={()=>setlist(true)} />
{list&&( <i class="fa fa-bars fa m-2" style={{fontSize:"30px"}} onClick={()=>setlist(false)}></i>)}
 <Profile_Page />
   
   </div>
    </div>
  );
}

export default FillExample;