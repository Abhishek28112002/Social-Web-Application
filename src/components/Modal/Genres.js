import React, { useState } from "react";
import Movie_img from "./Images/movie_time_06.jpg";
import "../stringar.css";
import {motion} from 'framer-motion'
import {useNavigate} from 'react-router-dom';
function Movie_geners(props) {
  const [navigate_home, setnavigate_home] = useState(false);
  const [isHovering, setIsHovering] = useState(Array(4).fill(""));

  const handleMouseEnter = (t) => {
    let arr = [...isHovering];
    arr[0] = arr[1] = arr[2] = arr[3] = "";
    arr[t] = "#f0aba1";
    setIsHovering(arr);
  };
//varible  user input
const[genres,setgenres]=useState()
  const handleMouseLeave = () => {
    let arr = [...isHovering];
    arr[0] = arr[1] = arr[2] = arr[3] = "";
    setIsHovering(arr);
  };

  const navigate =useNavigate();
  const [status,setstatus]=useState(false);
  const handleclick =()=>{
  navigate('/people');
  props.onHide();
  }
  return (
    <>
      {props.show && (
        <motion.div className="modal" 
        initial={{
          scale:0
         }}
         animate={{
           scale:1
         }} >
          <motion.div className="modal-content"
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}>
            <motion.div className="content  modalimg " initial={{
              opacity:0
            }}
            animate={{
              opacity:1
            }} style={{width: '50%'}} >
              <motion.div className="mt-10 mx-5" >
                <img src={Movie_img} width="100%" />
              </motion.div>
            </motion.div>
            <motion.div
              className="content"
              initial={{
                opacity:0
              }}
              animate={{
                opacity:1
              }}
            >
               <div style={{float: 'right',margin:'-10px 20px 0 0'}} onClick={()=>props.onHide()}> <i className="fa fa-times " aria-hidden="true"></i></div>
              <motion.div className="flex justify-center mr-4"
              initial={{
                opacity:0
              }}
              animate={{
                opacity:1
              }}>
                <motion.div>
                  <label
                    htmlFor="date"
                    className="block mt-6 text-black-900 dark:text-black-300"
                    style={{fontSize:'120%',fontWeight:"900"}}
                    
                    initial={{
                      sacal:0
                     }}
                     animate={{
                       scale:1
                     }}
                  >
                    Which movie genres you likes the most ?
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
                        setgenres("horror")
                        handleclick()
                      }}
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label inline-block text-gray-900"
                      for="flexRadioDefault1"
                    >
                     Horror
                    </label>
                  </motion.div>
                  <motion.div
                     style={{
                      backgroundColor: isHovering[1] ? "#f0aba1" : "",
                      color: isHovering[1] ? "white" : "",
                    }}
                    onMouseEnter={()=>handleMouseEnter(1)}
                    onMouseLeave={()=>handleMouseLeave}
                   
                    className="form-check   my-4 p-2 px-3 rounded"
                   
                  ><input
                  onClick={() => {
                    setgenres("mystery")
                    handleclick()
                  }}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                    
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault2"
                    >
                      Mystery
                    </label>
                  </motion.div>
                  <motion.div
                     style={{
                      backgroundColor: isHovering[2] ? "#f0aba1" : "",
                      color: isHovering[2] ? "white" : "",
                    }}
                    onMouseEnter={()=>handleMouseEnter(2)}
                    onMouseLeave={()=>handleMouseLeave}
                    className="form-check  my-4 p-2 px-3 rounded"
                   
                  ><input
                  onClick={() => {
                    setgenres("rommance")
                    handleclick()
                  }}
                  className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                   
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault3"
                    >
                      Rommance
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
                        setgenres("sci fi")
                        handleclick()
                      }}
                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexRadioDefault4"
                    >
                      Sci Fi
                    </label>
                  </motion.div>
                  
                  <button
                    type="submit"
                    style={{
                      
                      float: "right"
                    }}
                    className="  text-[black] px-2 py-1 "
                    onClick={() => handleclick()}
                  >
                    Skip
                  </button>
                 
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Movie_geners;
