import React, { useState } from "react";
import trip_img from "./Images/trip.jpg";
import "../stringar.css";
import Genres from './Genres';
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom';
function Like_most(props) {
  const [Genres_modal, setGenres_modal] = useState(false);
  const [isHovering, setIsHovering] = useState(Array(4).fill(""));

  //variable for stroing input from user

const [likemost,setlikemost]=useState()

  const handleMouseEnter = (t) => {
    let arr = [...isHovering];
    arr[0] = arr[1] = arr[2] = arr[3] = "";
    arr[t] = "#f0aba1";
    setIsHovering(arr);
  };
  const handleMouseLeave = () => {
    let arr = [...isHovering];
    arr[0] = arr[1] = arr[2] = arr[3] = "";
    setIsHovering(arr);
  };
  const navigate =useNavigate();
  const [status,setstatus]=useState(false);
  const handleclick =()=>{
//     setstatus(true);
// if(status)
// {
  navigate('/people');
  props.onHide();
  

  }
  return (
    <>
     {props.show && (
        <motion.div className="modal" >
          <motion.div
           initial={{
           scale:0
          }}
          animate={{
            scale:1
          }}
           className="modal-content">
            <motion.div
            initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }}
            className="content  modalimg">
               <motion.div className=" mt-10 mx-5 " >
                <img src={trip_img}  width="100%"/>
              </motion.div>
            </motion.div>
            <motion.div 
            initial={{
              sacal:0
             }}
             animate={{
               scale:1
             }}
             className="content" >
            <motion.div 
             initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }} >
               <div style={{float: 'right',margin:'-10px 20px 0 0'}}  onClick={()=>props.onHide()}> <i className="fa fa-times " aria-hidden="true"></i></div>
              <motion.div className="flex justify-center mt-5" 
              initial={{
                opacity:0
              }}
              animate={{
                opacity:1
              }}>
                <motion.div>
                  <label
                    htmlFor="date"
                    className="block mt-8 text-black-900 dark:text-black-400"
                    style={{fontSize:'120%',fontWeight:"900"}}
                    
                    initial={{
                      opacity:0
                    }}
                    animate={{
                      opacity:1
                    }}
                  >
                    What do You like the most ?
                  </label>
                  <motion.div
                    style={{
                      backgroundColor: isHovering[0] ? "#f0aba1" : "",
                      color: isHovering[0] ? "white" : "",
                    }}
                    onMouseEnter={()=>handleMouseEnter(0)}
                    onMouseLeave={()=>handleMouseLeave}
                     className="form-check  my-4 p-2 px-3 rounded"
                    
                  >
                    <input
                      onClick={() => {
                        setlikemost("Family get together")
                        props.onHide();
                    setGenres_modal(true)
                      }}
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexRadioDefault1"
                    >
                      Family get together
                    </label>
                  </motion.div>
                  <motion.div
                    style={{
                      backgroundColor: isHovering[1] ? "#f0aba1" : "",
                      color: isHovering[1] ? "white" : "",
                    }}
                    onMouseEnter={()=>handleMouseEnter(1)}
                    onMouseLeave={()=>handleMouseLeave}
                     className="form-check  my-4 p-2 px-3 rounded"
                   
                  >
                    <input
                      onClick={() => {
                        setlikemost("Night Parties")
                        props.onHide();
                    setGenres_modal(true)
                      }}
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexRadioDefault2"
                    >
                      Night Parties
                    </label>
                  </motion.div>
                  <motion.div
                    style={{
                      backgroundColor: isHovering[2] ? "#f0aba1" : "",
                      color: isHovering[2] ? "white" : "",
                    }}
                    onMouseEnter={()=>handleMouseEnter(2)}
                    onMouseLeave={()=>handleMouseLeave}
                     className="form-check my-4 p-2 px-3 rounded"
                   
                  >
                    <input
                      onClick={() => {
                        setlikemost("Mountains")
                        props.onHide();
                    setGenres_modal(true)
                      }}
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-rgb(240,171,161)-600 checked:border-rgb(240,171,161)-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexRadioDefault3"
                    >
                      Mountains
                    </label>
                  </motion.div>
                  <motion.div
                    style={{
                      backgroundColor: isHovering[3] ? "#f0aba1" : "",
                      color: isHovering[3] ? "white" : "",
                    }}
                    onMouseEnter={()=>handleMouseEnter(3)}
                    onMouseLeave={()=>handleMouseLeave}
                     className="form-check  my-4 p-2 px-3 rounded"
                   
                  >
                    <input
                      onClick={() => {
                        setlikemost("Beaches")
                         props.onHide();  
                    setGenres_modal(true)
                      }}
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="flexRadioDefault4"
                    >
                      Beaches
                    </label>
                  </motion.div>
                  <button
                    type="submit"
                    style={{
                     float:'right',
                      
                    }}
                    className=" text-[black] px-3 py-1 "
                    onClick={() => handleclick()}
                  >
                    Skip
                  </button>
                </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
       <motion.div>
        <Genres style={{transition:'0.3'}} show={Genres_modal} onHide={() => setGenres_modal(false)} />
      </motion.div>
    </>
  );
}

export default Like_most;
