import React,{useState} from 'react'
import '../stringar.css'
import People_online from './People_online';
import People_similar from './People_similar'
function Game_List(props) {
//   const arr=[0,1,2]
//   const [isHovering, setIsHovering] = useState(Array(17).fill(false));
//   function myFunction(item, index, arr) {
//     arr[index] = false;
//   }
const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
//   const handleMouseEnter = (t) => {
//     let arr = [...isHovering];
//     arr.forEach(myFunction)
//     arr[t] = true;
//     setIsHovering(arr);
//   };
//   const[quiz,setquiz]=useState(false);
//   const handleMouseLeave = () => {
//     let arr = [...isHovering];
//     arr.forEach(myFunction)
//     setIsHovering(arr);
//   };
  return (
    <div style={{overflowY:'auto'}}>
        
    <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
            {props.show &&( <i className="fa fa-bars fa   " style={{float:'left',fontSize:"30px"}} onClick={()=>props.onHide()}></i>)}
          Similar Interest Game
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Online People
        </button>
        {/* <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Favourites
        </button> */}
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content1  active-content" : "content1"}
        >
          <People_similar />
</div>
        <div
          className={toggleState === 2 ? "content1  active-content" : "content1"}
        >
      <People_online />
        </div>

        {/* <div
          className={toggleState === 3 ? "content1  active-content" : "content1"}
        >
           </div> */}
      </div>
   
    </div>
  )
}

export default Game_List