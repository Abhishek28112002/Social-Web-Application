import React,{useState} from 'react'
import '../stringar.css'
import Edit from './Edit_profile';
import Img1 from './Mask Group 23.png'
function People_similar(props) {
 const[edit,setedit]=useState(false);
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
  let hobbies =["Cricket","Reading ","Poetry","Guiter","Scatch","Football"]
  
  const handleMouseLeave = () => {
    let arr = [...isHovering];
    arr.forEach(myFunction)
    setIsHovering(arr);
  };
 
  return (
    <>
    {!(edit)&&(
   <div style={{margin:"15px 20px",fontWeight:"600",}}>
        
    <div className="flex">
        <div className="mx-auto">
        <img className="mb-1  rounded-full shadow-lg"  width="250px" src={Img1} alt="Bonnie image"/>
        </div>
        <div className="mb-5 mx-20">
           <div className="flex  "> <h2 className="text-xl " style={{fontSize :'300%' ,fontWeight :'bold'}}>Your Profile</h2>
           <i className="fa fa-pen ml-20  hover:w" onClick={()=>{setedit(true)}}style={{ fontSize :'180%' ,fontWeight :'bold',cursor :'pointer'}}></i>
           </div >
           <fieldset className="  rounded mt-10 mb-2 " style={{width:"400px",height:"60px",border:"2px solid blue"}}>
              <legend className="ml-3 px-2 ">
                Username
                </legend>
        <h5 className="mb-1 ml-3 text-xl text-red-400"style={{fontSize :'200%'}} >Bonnie Green</h5>
        </fieldset>
        {/* <span className=" text-pink-500 dark:text-gray-400">Visual Designer</span> */}
        <div className="flex mb-3">
        <fieldset className=" rounded mr-10 p-1" style={{width:"100px",border:"2px solid blue"}}>
                  <legend className="ml-2 px-1">Age</legend>
                  <h2>20 Year</h2>
                  </fieldset>
                  <fieldset className=" rounded mr-10 p-1" style={{width:"100px",border:"2px solid blue"}}>
                  <legend className="ml-2 px-1">Gender</legend>
                  <h2>Male</h2>
                  </fieldset>
        </div>
        <fieldset className=" rounded p-1" style={{border:"2px solid blue"}} >
                  <legend className="ml-2 px-1">Location : </legend> 
                  <h5>Sawai Madhopur , Rajasthan</h5>
                  </fieldset>
        {/* <div className="flex space-x-3 ">
        <div className="mt-1 space-x-3 lg:mt-3">
          <h3 style={{fontWeight:'900'}}>Ludo</h3>
        <i class='fas fa-medal' style={{fontSize:"48",color:"silver"}}></i>
        </div> <div className=" mt-4 space-x-3 lg:mt-3">
          <h3 style={{fontWeight:'900'}}>puzzle</h3>
        <i class='fas fa-medal' style={{fontSize:"48",color:"gold"}}></i>
        </div> <div className=" mt-4 space-x-3 lg:mt-3">
          <h3 style={{fontWeight:'900'}}>Quiz</h3>
        <i class='fas fa-medal' style={{fontSize:"48",color:"brown"}}></i>
        </div>
        </div> */}
       
       
    </div>
</div>
<fieldset className=" mx-10 rounded p-1" style={{border:"2px solid blue"}}>
                 
            <legend style={{ fontSize: "180%", fontWeight: "900" }} className="ml-2 px-1">About You</legend>
  <p  className="text-black hover:text-red-300"style={{fontSize :'110%' ,fontWeight :'bold',fontFamily:"nunito"}}>
  Simplicity is the key to happiness.
In a world of worriers, be a warrior.
Captivated from life, showing it here.
We have tomorrows for reason.
  </p>
</fieldset>
<div className=" mx-8   rounded p-3">
<fieldset className=" rounded p-1" style={{border:"2px solid blue"}}>
            <legend
              className="hover:text-red-300"
              className="ml-2 px-1"
              style={{ fontSize: "180%", fontWeight: "900" }}
            >
              Hobbies
            </legend>
  <div  style={{
                display: "flex",
                flexDirection: "row",
               
                flexFlow: "wrap",
              }}>
    {
    hobbies.map((hobby) =>(
      <div className="px-3 py-1 mx-1 mt-1 rounded  bg-red-300 hover:text-white" style={{borderRadius:'10px',fontWeight :'900'}}>
        {hobby} 
      </div>
    ))
  }
  
  </div>
  </fieldset>
</div>
    </div>
    )}
   <Edit  show={edit}  onHide={()=>setedit(false)}/>
   </>
  )
}
// } <div className="flex mt-4 space-x-3 lg:mt-3">
// <a href="#" style={{backgroundColor:'#f0aba1'}}  className="inline-flex items-center py-2 px-4  text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Add Friend</a>
// <a href="#" className="inline-flex items-center py-2 px-4  text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Chat</a>
// </div>
{/* <span style={{margin:"10px" ,fontSize :'120%' ,fontWeight :'900'}}> +</span> */}
export default People_similar