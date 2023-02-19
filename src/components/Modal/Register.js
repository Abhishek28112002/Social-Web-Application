import React, { useState } from "react";
import Avatar from "./Avatar";
import "../stringar.css";
import { motion } from "framer-motion";
import { useTab } from "@mui/base";
function Register(props) {
  const [Avatar_modal, setAvatar_modal] = useState(false);
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
                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control block w-full px-2 py-2   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none hover:border-red-300 "
                        placeholder="Username"
                        required
                        onChange={(e)=>setusername(e.target.value)}
                      />
                    </div>

                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control block w-full px-2 py-2   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none hover:border-red-300"
                        placeholder="Email address"
                        required
                        onChange={(e)=>setemail(e.target.value)}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="password"
                        className="form-control block w-full px-2 py-2   text-gray-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none hover:border-red-300"
                        placeholder="Password"
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
                        setAvatar_modal(true);
                        props.onHide();
                      }}
                    >
                      Sign in
                    </button>

                    <div
                   
                       className="inline-block px-2 mt-3 py-2 bg-blue-600  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full "
                      style={{display:'flex',float:'center',justifyContent:'center',borderRadius:'10px',backgroundColor:"#f0aba1",cursor: 'pointer'}}
                    >

<p className="mr-2 text-white hover:text-red-400">Sign in with </p>
<img src="https://madeby.google.com/static/images/google_g_logo.svg" width="20px" />                  

                    </div>
                    <div
                      className="inline-block transition duration-150 ease-in-out w-full"
                      style={{
                        display: "flex",
                        float: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        Already have an  Account ?
                        <a
                          onClick={() => {
                            props.onLogin()
                          }}
                          style={{ color: "#f0aba1" }}
                          className="ml-2 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                          style={{ cursor: "pointer",color:'blue' }}
                        >
                         Log in
                        </a>
                      </p>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      <motion.div>
        <Avatar show={Avatar_modal} onHide={() => setAvatar_modal(false)} />
      </motion.div>
    </>
  );
}

export default Register;
