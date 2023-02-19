import { Add } from "@mui/icons-material";
import React, { useState } from "react";
import "../stringar.css";
import Img1 from "./Mask Group 23.png";
function People_similar(props) {
  const[hb,sethobby]=useState();
  const[ all_hobby,setall_hobby] = useState([
    "Cricket",
    "Reading ",
    "Poetry",
    "Guiter",
    "Scatch",
    "Football",
    "Basketball",
    "Football",
    "Volleyball",
    "Marathon running",
    "Skiing",
    "Tennis",
    "Cycling",
    "Swimming",
    "Baseball",
    "Mountain climbing",
  ]);
  const [hobbies,sethobbies] = useState([
    "Cricket",
    "Reading ",
    "Poetry",
    "Guiter",
    "Scatch",
    "Football",
  ]);
  const[role,setrole]=useState("Visual Designer")
  const [isHovering, setIsHovering] = useState(Array(17).fill(false));
const[age,setage]=useState("20")
const[gender,setgender] = useState("Male")
const[address,setaddress] = useState("Sawai Madhopur , Rajasthan");
const[about,setabout]=useState("Simplicity is the key to happiness. In a world of worriers, be a warrior. Captivated from life, showing it here. We have tomorrows for reason.")
  const Delete_allhobby = (hobby_index) => {
    const new_hobbies = all_hobby.filter((item,index) => index!=hobby_index);
    setall_hobby(new_hobbies);
  };

  function myFunction(item, index, arr) {
    arr[index] = false;
  }

  const handleMouseEnter = (t) => {
    let arr = [...isHovering];
    arr.forEach(myFunction);
    arr[t] = true;
    setIsHovering(arr);
  };

  
  const handleMouseLeave = () => {
    let arr = [...isHovering];
    arr.forEach(myFunction);
    setIsHovering(arr);
  };

const Addhobby=(hobb)=>{
    if(hobb=='')
    return ;
    sethobbies([...hobbies,hobb]);
}
const Delete_hobby = (hobby_index) => {
    const new_hobbies = hobbies.filter((item,index) => index!=hobby_index);
    sethobbies(new_hobbies);
  };
  return (
    <>
      {props.show && (
        <div style={{margin:"15px 20px",fontWeight:"600",}}>
        
        <div className="flex">
            <div className="mx-auto">
            <img className="mb-1  rounded-full shadow-lg"  width="250px" src={Img1} alt="Bonnie image"/>
            </div>
            <div className="mb-5 mx-20">
              <div className="flex mb-5 ">
                <h2
                  className="text-xl "
                  style={{ fontSize: "200%", fontWeight: "bold" }}
                >
                  Your Profile
                </h2>
              </div>
              <fieldset className=" rounded mt-15" style={{width:"400px",height:"60px",border:"2px solid blue"}}>
              <legend className="ml-2 px-1">
                Username
                </legend>
              <h5
                className="mb-1 text-xl p-1"
                style={{ fontSize: "150%", color: "red" }}
              >
                Bonnie Green
              </h5>
              </fieldset>
              {/* <span className=" text-pink-500 dark:text-gray-400">
               <input type="text" value={role} onChange={(e)=>setrole(e.target.value)} />
              </span> */}
              <div className="flex mb-1 mt-1">
                <fieldset className=" rounded mr-10 p-1" style={{width:"100px",border:"2px solid blue"}}>
                  <legend className="ml-2 px-1">Age</legend>
                 <input type="number"className="p-2 mx-2 " className=" rounded" style={{width:'60%'}} value={age} onChange={(e)=>setage(e.target.value)} />
                
                </fieldset>
                <fieldset className=" rounded p-1" style={{width:"100px",border:"2px solid blue"}}>
                  <legend>Gender</legend>
               <input type="text"className="p-2 mx-3 " className=" rounded"  value={gender} onChange={(e)=>setgender(e.target.value)} />
                
                </fieldset>
              </div>
              <fieldset className=" rounded p-1" style={{border:"2px solid blue"}}>
                  <legend className="ml-2 px-1">Location : </legend>
                <input type="text" className="p-2 w-" className=" rounded"style={{marginLeft:'2px',width: "60%"}} value={address} onChange={(e)=>setaddress(e.target.value)} />
                </fieldset>
              {/* <div className="flex space-x-3 " style={{ color: "gray" }}>
                <div className="mt-1 space-x-3 lg:mt-3">
                  <h3 style={{ fontWeight: "900" }}>Ludo</h3>
                  <i
                    className="fas fa-medal"
                    style={{ fontSize: "48", color: "silver" }}
                  ></i>
                </div>{" "}
                <div className=" mt-1 space-x-3 lg:mt-3">
                  <h3 style={{ fontWeight: "900" }}>puzzle</h3>
                  <i
                    className="fas fa-medal"
                    style={{ fontSize: "48", color: "gold" }}
                  ></i>
                </div>{" "}
                <div className=" mt-1 space-x-3 lg:mt-3">
                  <h3 style={{ fontWeight: "900" }}>Quiz</h3>
                  <i
                    className="fas fa-medal"
                    style={{ fontSize: "48", color: "brown" }}
                  ></i>
                </div>
              </div> */}
            </div>
          </div>
          <fieldset className=" mx-10 rounded p-1" style={{border:"2px solid blue"}}>
                 
            <legend style={{ fontSize: "180%", fontWeight: "900" }} className="ml-2 px-1">About You</legend>
            <p
              className="hover:text-red-300"
              style={{
                fontSize: "110%",
                fontWeight: "bold",
                fontFamily: "nunito",
              }}
            >
              <textarea type="text"  className=" rounded" className="p-2 "style={{width: "100%"}} value={about} onChange={(e)=>setabout(e.target.value)} />
            </p>
          </fieldset>
          <div className=" mx-9   rounded p-3">
          <fieldset className=" rounded p-1" style={{border:"2px solid blue"}}>
            <legend 
              className="hover:text-red-300"
              className="ml-2 px-1"
              style={{ fontSize: "180%", fontWeight: "900" }}
            >
              Hobbies
            </legend>
            <div
              className="flex py-2 rounded "
              style={{
                
                display: "flex",
                flexDirection: "row",
                
                flexFlow: "wrap",
                width:"100%"
              }}
            >
              {hobbies.map((hobby,index) => (
                <div key={index}
                  className="px-3 py-1 mx-1 mt-1 rounded  bg-red-300 "
                  style={{  fontWeight: "900" }}
                >
                  <span className="hover:text-white"> {hobby}</span>{" "}
                  <span
                    style={{
                      marginLeft: "5px",
                      fontSize: "120%",
                      fontWeight: "900",
                      cursor: "pointer",
                    }}
                    className="text-white hover:text-black"
                    onClick={()=>Delete_hobby(index)}
                  >
                    {" "}
                    x
                  </span>
                </div>
              ))}
            </div>
            </fieldset>
            <div style={{ border: "1px solid silver ",marginTop: "10px"}}>
            <div >
              <div className="flex">
                <div className="relative w-full">
                  <input
                    type="search"
                    value={hb}
                    onChange={(e)=>sethobby(e.target.value)}
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Add your hobbies"
                    required
                  />
                  <button
                    type="submit"
                    onClick={()=>{Addhobby(hb);
                    sethobby('');}}
                    className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                   <i class="fa fa-plus" ></i>
                   
                  </button>
                </div>
              </div>
            </div>
            <div
              className="flex py-2 rounded bg-gray mt-4"
              style={{
                display: "flex",
                flexDirection: "row",
                flexFlow: "wrap",
              }}
            >
              {all_hobby.map((hobby,index) => (
                <div key={index}
                  className="px-3 py-1 mx-1 mt-1 rounded  bg-red-300 "
                  style={{ borderRadius: "10px", fontWeight: "900" }}
                >
                  <span className="hover:text-white"> {hobby}</span>{" "}
                  <span
                    style={{
                      marginLeft: "5px",
                      fontSize: "120%",
                      fontWeight: "900",
                      cursor: "pointer",
                    }}
                    className="text-white hover:text-black"
                    onClick={() =>{Addhobby(hobby);
                    Delete_allhobby(index)}}
                  >
                    {" "}
                    +
                  </span>
                </div>
              ))}
            </div>
            </div>
            <div className="flex mt-5">
              <a
                href="#"
                style={{
                  backgroundColor: "#f0aba1",
                  margin: "auto",
                  borderRadius: "10px",
                  fontWeight: "900",
                }}
                onClick={() => props.onHide()}
                className="inline-flex items-center py-2 px-4  text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Save Changes
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// } <div className="flex mt-4 space-x-3 lg:mt-3">
// <a href="#" style={{backgroundColor:'#f0aba1'}}  className="inline-flex items-center py-2 px-4  text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Add Friend</a>
// <a href="#" className="inline-flex items-center py-2 px-4  text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Chat</a>
// </div>
{
  /* <span style={{margin:"10px" ,fontSize :'120%' ,fontWeight :'900'}}> +</span> */
}
export default People_similar;
