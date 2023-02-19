import React,{useState} from 'react'
import '../stringar.css'
import img2 from './Images/image 4.png'
import Question  from './Quiz';
function Game_List(props) {
  const arr=[0,1,2]
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
    <>
    {props.show&&(!quiz)&&(
    <div style={{overflowY:'auto',height:"100vh"}}>
    <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
           {props.show &&( <i className="fa fa-arrow-left fa  mr-10  " style={{float:'left',fontSize:"30px"}} onClick={()=>props.onHide()}></i>)}
          Top Picks
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Trending
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Favourites
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content1  active-content" : "content1"}
        >
          <div style={{display : 'flex',
          margin:"30px 0",
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
        
      }}
      onClick={()=>{
      setquiz(true)}}
      className="rounded-lg border border-gray-200 shadow-md m-2"
      onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={()=>handleMouseLeave} >
        

<div style={{display: 'flex',justifyContent: 'center',width:'250px',alignItems: 'center'}}>
  <img src={img2} width="100%" height="80%" />
</div>
      </div>
    ))
   }
    </div>
        </div>

        <div
          className={toggleState === 2 ? "content1  active-content" : "content1"}
        >
          <div style={{display : 'flex',
          margin:"30px 0",
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
        
      }}
      className="rounded-lg border border-gray-200 shadow-md m-2"
      onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={()=>handleMouseLeave} >
        

<div style={{display: 'flex',justifyContent: 'center',width:'250px',alignItems: 'center'}}>
  <img src={img2} width="100%" height="80%" />
</div>
      </div>
    ))
   }
    </div>
        </div>

        <div
          className={toggleState === 3 ? "content1  active-content" : "content1"}
        >
           <div style={{display : 'flex',
           margin:"30px 0",
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
        
      }}
      className="rounded-lg border border-gray-200 shadow-md m-2"
      onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={()=>handleMouseLeave} >
        

<div style={{display: 'flex',justifyContent: 'center',width:'250px',alignItems: 'center'}}>
  <img src={img2} width="100%" height="100%" />
</div>
      </div>
    ))
   }
    </div>
        </div>
      </div>
   
    </div>
    )}
    <>
<Question show={quiz} onHide={()=>setquiz(false)} />
    </>
    </>
  )
}

export default Game_List