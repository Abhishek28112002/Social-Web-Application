import React, { useState } from "react";
import Que1 from "./Avatar";
import "../stringar.css";
import { motion } from "framer-motion";
import { useTab } from "@mui/base";
function ChangePassword(props) {
 
  const [isHovering, setIsHovering] = useState(Array(4).fill(""));

  const handleMouseEnter = (t) => {
    let arr = [...isHovering];
    arr[0] = arr[1] = arr[2] = arr[3] = "";
    arr[t] = "#f0aba1";
    setIsHovering(arr);
  };
//varibles
const[username,setusername] =useState()
  const[email,setemail]=useState()
  const[password,setpassword] = useState()

  const handleMouseLeave = () => {
    let arr = [...isHovering];
    arr[0] = arr[1] = arr[2] = arr[3] = "";
    setIsHovering(arr);
  };
  return (
    <>
      {props.show && (
        <motion.div className="modal">
          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            className="modal-content"
          >
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="content  modalimg"
            >
              <motion.div className=" mt-16 ml-4 ">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  alt="Phone image"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
              }}
              className="content"
            >
               <div style={{float: 'right',margin:'-10px 20px 0 0'}}  onClick={()=>props.onHide()}> <i className="fa fa-times " aria-hidden="true"></i></div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="flex justify-center mt-10 mr-4"
              >
                <motion.div>
                  <form>
                   

                    <div className="mt-6 mb-6">
                      <input
                        type="text"
                        className="form-control block w-full px-2 py-2   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none hover:border-red-300"
                        placeholder="New Password"
                        required
                        onChange={(e)=>setemail(e.target.value)}
                      />
                    </div>
                    <div className="mb-6">
                      <input
                        type="password"
                        className="form-control block w-full px-2 py-2   text-gray-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none hover:border-red-300"
                        placeholder="Confirm Password"
                        required
                        onChange={(e)=>setpassword(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-block px-2  py-2  text-white  mt-2     shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full hover:-red-400"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#f0aba1",
                      }}
                      onClick={() => {
                       
                        props.onHide();
                      }}
                    >
                      Set Password
                    </button>

                   
                  </form>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
     
    </>
  );
}

export default ChangePassword;
