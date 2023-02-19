import React, { useState } from "react";
import Avatar_img from "./Images/Avatar.webp"
import "../stringar.css";
import Gender from "./Gender";
import { motion } from 'framer-motion';

import { BorderBottom } from "@material-ui/icons";
function Avatar(props) {
  const [Gender_modal, setmodalq3] = useState(false);
  const [isHovering, setIsHovering] = useState(Array(5).fill(""));
  
   //variable for stroing input from user
const[avat,setavat] = useState()
  const handleMouseEnter = (t) => {
    let arr = [...isHovering];
    arr[0] = arr[1] = arr[2] = arr[3] =arr[4]= "";
    arr[t] = "#f0aba1";
    setIsHovering(arr);
  };

  const handleMouseLeave = () => {
    let arr = [...isHovering];
    arr[0] = arr[1] = arr[2] = arr[3] =arr[4]= "";
    setIsHovering(arr);
  };
  return (
    <>
      {props.show && (
        <motion.div className="modal" >
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1
            }}
            className="modal-content">
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              className="content ">
              <motion.div className="flex justify-center mt-1 ml-10 " >
                <motion.div>
                  <label
                    htmlFor="date"
                    className="block mt-10 "
                    style={{ fontSize: '120%',fontWeight:"900" }}


                  >
                    Choose Your Own Avatar_img 
                  </label>
                  <motion.div
                    className="form-check  my-3  py-3 px-3 rounded modal2"
                    style={{
                      backgroundColor: isHovering[4] ? "#f0aba1" : "",
                      color: isHovering[4] ? "white" : "",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    onMouseEnter={() => handleMouseEnter(4)}
                    onMouseLeave={() => handleMouseLeave}
                  >
                    <img style={{justifyContent:'center',alignItems: 'center'}} className="inline object-cover  w-44 h-44 rounded-full" src={Avatar_img} />

                  </motion.div>
                  <input type="file"
                  accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/webp"
                        className=" w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        onChange={(e) => {
                          props.onHide();
setavat(e.target.value)
                          setmodalq3(true);
                        }} />
                </motion.div>
                
              </motion.div>
            </motion.div>
            <motion.div
              initial={{
                sacal: 0
              }}
              animate={{
                scale: 1
              }}
              className="content  " >
              <motion.div
                initial={{
                  opacity: 0
                }}
                animate={{
                  opacity: 1
                }} >
                   <div style={{float: 'right',margin:'-10px 20px 0 0'}}  onClick={()=>props.onHide()}> <i className="fa fa-times " aria-hidden="true"></i></div>
                <motion.div className="flex justify-center mr-5"
                  initial={{
                    opacity: 0
                  }}
                  animate={{
                    opacity: 1
                  }}>
                  <motion.div>
                    <label
                      htmlFor="date"
                      className="block mt-10 "
                      style={{ fontSize: '120%' ,fontWeight:"900"}}

                    >
                      Choose Your Avatar_img 
                    </label>
                    <motion.div style={{ display: 'flex' }}>
                      <motion.div
                        className="form-check  my-4 mr-7 p-2 px-3 rounded "
                        style={{
                          backgroundColor: isHovering[2] ? "#f0aba1" : "",
                          color: isHovering[2] ? "white" : "",
                        }}
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={() => handleMouseLeave}
                      >
                        <img onClick={(e) => {
                          setavat(e.target.src)
                          props.onHide();
                          setmodalq3(true);
                        }} className="inline object-cover w-16 h-16  rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />

                      </motion.div>
                      <motion.div
                        style={{
                          backgroundColor: isHovering[0] ? "#f0aba1" : "",
                          color: isHovering[0] ? "white" : "",
                        }}
                        onMouseEnter={() => handleMouseEnter(0)}
                        onMouseLeave={() => handleMouseLeave}
                        className="form-check  my-4 p-2 px-3 rounded"
                      >
                        <img onClick={(e) => {
                          setavat(e.target.src)
                          props.onHide();
                          setmodalq3(true);
                        }} className="inline object-cover w-16 h-16  rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />

                      </motion.div>
                    </motion.div>
                    <motion.div style={{ display: 'flex' }}>
                      <motion.div
                        style={{
                          backgroundColor: isHovering[1] ? "#f0aba1" : "",
                          color: isHovering[1] ? "white" : "",
                        }}
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={() => handleMouseLeave}
                        className="form-check  my-4 mr-7 p-2 px-3 rounded"
                      >
                        <img onClick={(e) => {
                          setavat(e.target.src)
                          props.onHide();
                          setmodalq3(true);
                        }} className="inline object-cover w-16 h-16  rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />

                      </motion.div>
                      <motion.div
                        style={{
                          backgroundColor: isHovering[3] ? "#f0aba1" : "",
                          color: isHovering[3] ? "white" : "",
                        }}
                        onMouseEnter={() => handleMouseEnter(3)}
                        onMouseLeave={() => handleMouseLeave}
                        className="form-check  my-4 py-2 px-3 rounded"
                      >
                        <img onClick={(e) => {
                          setavat(e.target.src)
                          props.onHide();
                          setmodalq3(true);
                        }} className="inline object-cover w-16 h-16  rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image" />

                      </motion.div>
                    </motion.div>
                    <button
                      type="submit"
                      style={{
                        float: "right",
                        cursor: 'pointer',

                      }}
                      className="mt-1 text-[black] px-3  "
                      onClick={() => {
                        props.onHide();
                        
                      }}
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
      <motion.div >
        <Gender

          show={Gender_modal}
          onHide={() => setmodalq3(false)}
        />
      </motion.div>
    </>
  );
}

export default Avatar;
