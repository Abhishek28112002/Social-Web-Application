import React,{useState} from 'react'
import '../stringar.css'
import Img1 from './Mask Group 23.png'
function People_similar(props) {
 
  const [isHovering, setIsHovering] = useState(Array(17).fill(false));
  function myFunction(item, index, arr) {
    arr[index] = false;
  }
  const handleMouseEnter = (t) => {
    let arr = [...isHovering];
    arr.forEach(myFunction)
    arr[t] = true;
    setIsHovering(arr);
  };
  
  const handleMouseLeave = () => {
    let arr = [...isHovering];
    arr.forEach(myFunction)
    setIsHovering(arr);
  };
  return (
    <>
    {props.show&&(
    <div style={{overflowX:'auto',height:"100vh",minWidth:'300px'}}>
   
    <div style={{display : 'flex',
   flexDirection : 'row' ,
   justifyContent : 'space-around',
   flexFlow : 'wrap'}}> 
    
<div className="max-w-sm bg-gray  dark:bg-gray-800 dark:border-gray-700 m-4">
        
    <div className="flex flex-col items-center py-4">
        <img className="mb-3 w-24 h-24 rounded-full shadow-lg" src={Img1} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl" style={{fontFamily:'nunito',fontWeight:"900"}}>Bonnie Green</h5>
        <span className=" text-pink-500 dark:text-gray-400">Visual Designer</span>
        <div className="flex space-x-3 ">
        <div className="mt-4 space-x-3 lg:mt-3">
          <h3 style={{fontWeight:'900'}}>Ludo</h3>
        <i class='fas fa-medal' style={{fontSize:"48",color:"silver"}}></i>
        </div> <div className=" mt-4 space-x-3 lg:mt-3">
          <h3 style={{fontWeight:'900'}}>puzzle</h3>
        <i class='fas fa-medal' style={{fontSize:"48",color:"gold"}}></i>
        </div> <div className=" mt-4 space-x-3 lg:mt-3">
          <h3 style={{fontWeight:'900'}}>Quiz</h3>
        <i class='fas fa-medal' style={{fontSize:"48",color:"brown"}}></i>
        </div>
        </div>
        <div className="flex mt-4 space-x-3 lg:mt-3">
            <a href="#" style={{backgroundColor:'#f0aba1'}}  className="inline-flex items-center py-2 px-4  text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Add Friend</a>
            <a href="#" className="inline-flex items-center py-2 px-4  text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Chat</a>
        </div>
       
    </div>
</div>
    </div>
    </div>
    )}
    </>
  )
}

export default People_similar