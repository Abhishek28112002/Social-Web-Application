import React, { useState }from 'react'
 import Similar from './GameList'
import Winner from  './WinnerList/ChatList.js'
import Playlist from './Playlist'
import Home from '../Home/Home'
const Games=()=> {
  const [bg,setbg]=useState(Array(4).fill(false))
  const[gamelist,setgamelist]=useState(true)
  const [list,setlist]=useState(false);
  bg[2]=true;
  return (
    <div>
<Home bg={bg} />
<div  className="__main">
  <Winner  open={!list} onBack={()=>setlist(true)}/>
  {list&&( <i class="fa fa-bars fa m-2" style={{fontSize:"30px"}} onClick={()=>setlist(false)}></i>)}
    <Similar show={gamelist} onHide={()=>setgamelist(false)} />  

    <Playlist show={!gamelist} onHide={()=>setgamelist(true)} />
   </div>
    </div>
  );
}

export default Games;