import React, { useState } from "react";
import Register from "./Register";
import "../stringar.css";
import Change_password from "./ChangePassword";
import { motion } from "framer-motion";
function Forgot(props) {
  const [change_pass, setchange_pass] = useState(false);
  //variables

  const [password, setpassowrd] = useState("");
  const [Newpassword, setNewpassowrd] = useState("");
  const [text, settext] = useState();

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
              className="content modalimg"
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
              <div
                style={{ float: "right", margin: "-10px 20px 0 0" }}
                onClick={() => props.onHide()}
              >
                {" "}
                <i className="fa fa-times " aria-hidden="true"></i>
              </div>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                className="flex justify-center mt-16 mr-4"
              >
                <motion.div>
                  <form>
                    <div className="mb-4">
                      <input
                        type="email"
                        className="form-control block w-full px-1 py-2   text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none hover:border-red-300 "
                        placeholder="Enter Registered email"
                        required
                      />
                    </div>
                    <div
                      className="mb-4 "
                      style={{ display: "flex", flexdirection: "column" }}
                    >
                      <button
                        type="submit"
                        className="rounded-lg border border-gray-200 shadow-md p-2 m-2"
                      >
                        Send Code
                      </button>
                      <button type="submit" className=" m-2">
                        Resend Code
                      </button>
                    </div>

                    <div className="mb-4">
                      <input
                        type="text"
                        className="form-control block w-full px-2 py-2   text-gray-500 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  focus:outline-none hover:border-red-300 "
                        placeholder="Enter Code"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      className="modalbutton inline-block px-2  py-2  text-white  mt-2     shadow-md  hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      style={{
                        borderRadius: "10px",
                        backgroundColor: "#f0aba1",
                      }}
                      onClick={() => {
                        setchange_pass(true);
                        props.onHide();
                      }}
                    >
                      Change Password
                    </button>
                  </form>
                  <p style={{ color: "red", margin: "16px" }}>{text}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      <motion.div>
        <Change_password
          show={change_pass}
          onHide={() => setchange_pass(false)}
        />
      </motion.div>
    </>
  );
}

export default Forgot;
