import React,{ useState} from 'react'
import Home from '../Home/Home'
function Popularity() {
  const [bg,setbg]=useState(Array(4).fill(false))
  bg[3]=true;
  return (
    <div>
      <Home bg={bg} />
    <div>Popularity</div>
    </div>
  )
}

export default Popularity