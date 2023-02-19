import React,{useState} from 'react'
import '../stringar.css'
import img2 from './image 4.png'
function Notification(props) {
  const arr=[0,1,2,3,4,5,6,7,8,10,11,12,13,14,15]
  const [isHovering, setIsHovering] = useState(Array(17).fill(false));
  function myFunction(item, index, arr) {
    arr[index] = false;
  }
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  const handleMouseEnter = (t) => {
    let arr = [...isHovering];
    arr.forEach(myFunction)
    arr[t] = true;
    setIsHovering(arr);
  };
  const[quiz,setquiz]=useState(false);
  const handleMouseLeave = () => {
    let arr = [...isHovering];
    arr.forEach(myFunction)
    setIsHovering(arr);
  };
  return (
  
    <div className="rounded-lg border border-gray-200 shadow-md mt-2" style={{Zindex:'100',overflowY:'auto',overflowX:'hidden',width:"300px",height:"90vh",}}>
    <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         New
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Old
        </button>
      </div>

      <div className="content-tabs" >
        <div
          className={toggleState === 1 ? "content1  active-content" : "content1"}
        >
          <div > 
   {
    arr.map((item,index)=>(
      <div key={item}   style={{
        backgroundColor: isHovering[index] ? "#f0aba1" : "",
        transition: 'all 0.6s',
        cursor: "pointer"
      }}
      
      className="rounded-lg border border-gray-200 shadow-md mb-3"
      onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={()=>handleMouseLeave} >
        

        <div className="flex items-center w-100 ">
        <img class="w-10 h-10 m-1 rounded-full" src={img2}/>
    <div className="font-medium dark:text-white mx-3">
        <div>jes just messaged you</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">5 min ago</div>
    </div>
</div>
</div>
    ))
   }
    </div>
        </div>

        <div
          className={toggleState === 2 ? "content1  active-content" : "content1"}
        >
          <div > 
   {
    arr.map((item,index)=>(
      <div key={item}   style={{
        backgroundColor: isHovering[index] ? "#f0aba1" : "",
        transition: 'all 0.6s',
        cursor: "pointer"
      }}
      
      className="rounded-lg border border-gray-200 shadow-md mb-3"
      onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={()=>handleMouseLeave} >
        

        <div className="flex items-center w-100 ">
        <img class="w-10 h-10 m-1 rounded-full" src={img2}/>
    <div className="font-medium dark:text-white mx-3">
        <div>jes just messaged you</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">5 min ago</div>
    </div>
</div>
</div>
    ))
   }
    </div>
        </div>

        <div
          className={toggleState === 3 ? "content1  active-content" : "content1"}
        >
          <div > 
   {
    arr.map((item,index)=>(
      <div key={item}   style={{
        backgroundColor: isHovering[index] ? "#f0aba1" : "",
        transition: 'all 0.6s',
        cursor: "pointer"
      }}
      
      className="rounded-lg border border-gray-200 shadow-md mb-3"
      onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={()=>handleMouseLeave} >
        

        <div className="flex items-center w-100 ">
        <img class="w-10 h-10 m-1 rounded-full" src={img2}/>
    <div className="font-medium dark:text-white mx-3">
        <div>jes just messaged you</div>
        <div className="text-sm text-gray-500 dark:text-gray-400">5 min ago</div>
    </div>
</div>
</div>
    ))
   }
    </div>
    </div>
    </div>
</div>
  )
}

export default Notification