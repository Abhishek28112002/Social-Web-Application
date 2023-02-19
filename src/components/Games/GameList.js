import React,{useState} from 'react'
import '../stringar.css'
import img2 from './d2.png'

function Game_List(props) {
  const arr=[0,1,2]
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
    <div style={{overflowY:'auto',height:"100vh"}}>
    <div className=" text-xl font-large mt-1 text-gray-900 dark:text-white" style={{fontFamily:'nunito',fontWeight:'bold',marginLeft:'30px'}}> 
   
     Game Catogery </div>
    <div style={{display : 'flex',
    margin:'40px 0px',
   flexDirection : 'row' ,
   justifyContent : 'space-around',
   flexFlow : 'wrap',
   }}> 
   {
    arr.map((item,index)=>(
      <div key={item}   style={{
        backgroundColor: isHovering[index] ? "#f0aba1" : "",
        transition: 'all 0.6s',
        transform:isHovering[index]?'translateY(30px)':'',
        zIndex:isHovering[index]?'4':'',
        margin:'auto 30px',
        textAlign:'center',
        alignItems:'center',
        width:'295px',
        height:'300px',
      }}
      onClick={()=>props.onHide()}
      className="rounded-lg border border-gray-200 shadow-md m-2"
      onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={()=>handleMouseLeave} >
        
<div  style={{height: '30%',backgroundColor:'#f6d5cf',borderRadius:'10px',display: 'flex',justifyContent: 'center',alignItems: 'center',margin: '10px'}}>
  <h3>Quizes</h3>
</div>
<div style={{width: "100%",display: 'flex',justifyContent: 'center',alignItems: 'center',margin: '20px 10px '}}>
  <img src={img2} width="50%" />
</div>
      </div>
    ))
   }
    </div>
    </div>
    )}
    </>
  )
}

export default Game_List