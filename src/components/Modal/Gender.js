import React, { useState } from "react";
import Gender_image from "./Images/Gender.jpg";
import "../stringar.css";
import Interest from "./Interest";
import { motion } from "framer-motion";
import { BorderBottom } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
function Gender_interest(props) {
  const [interest_modal, setinterest_modal] = useState(false);
  const [isHovering, setIsHovering] = useState(Array(4).fill(""));

  //variable for stroing input from user
  const [gt, setgt] = useState();

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
  const navigate = useNavigate();
  const [status, setstatus] = useState(false);
  const handleclick = () => {
    //     setstatus(true);
    // if(status)
    // {
    navigate("/people");
    props.onHide();
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
              <motion.div className="flex justify-center mt-8 mx-5 ">
                <img src={Gender_image} width="90%" />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{
                sacal: 0,
              }}
              animate={{
                scale: 1,
              }}
              className="content"
            >
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              >
                <div
                  style={{ float: "right", margin: "-10px 20px 0 0" }}
                  onClick={() => props.onHide()}
                >
                  {" "}
                  <i className="fa fa-times " aria-hidden="true"></i>
                </div>
                <motion.div
                  className="flex justify-center mr-5"
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                >
                  <motion.div>
                    <label
                      htmlFor="date"
                      className="block mt-7 "
                      style={{ fontSize: "120%", fontWeight: "900" }}
                    >
                      Which gender you want to talk?
                    </label>
                    <motion.div
                      className="form-check  my-4 p-2 px-3 rounded "
                      style={{
                        backgroundColor: isHovering[2] ? "#f0aba1" : "",
                        color: isHovering[2] ? "white" : "",
                      }}
                      onMouseEnter={() => handleMouseEnter(2)}
                      onMouseLeave={() => handleMouseLeave}
                    >
                      <input
                        className="minput"
                        onClick={() => {
                          props.onHide();
                          setgt("male");
                          setinterest_modal(true);
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
                        Male
                      </label>
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
                      <input
                        className="minput"
                        onClick={() => {
                          setgt("Female");
                          props.onHide();
                          setinterest_modal(true);
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
                        Female
                      </label>
                    </motion.div>
                    <motion.div
                      style={{
                        backgroundColor: isHovering[1] ? "#f0aba1" : "",
                        color: isHovering[1] ? "white" : "",
                      }}
                      onMouseEnter={() => handleMouseEnter(1)}
                      onMouseLeave={() => handleMouseLeave}
                      className="form-check  my-4 p-2 px-3 rounded"
                    >
                      <input
                        className="minput"
                        onClick={() => {
                          setgt("Transgender");
                          props.onHide();
                          setinterest_modal(true);
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
                        Transgender
                      </label>
                    </motion.div>
                    <motion.div
                      style={{
                        backgroundColor: isHovering[3] ? "#f0aba1" : "",
                        color: isHovering[3] ? "white" : "",
                      }}
                      onMouseEnter={() => handleMouseEnter(3)}
                      onMouseLeave={() => handleMouseLeave}
                      className="form-check  my-4 p-2 px-3 rounded"
                    >
                      <input
                        className="minput"
                        onClick={() => {
                          setgt("prefer not to respond");
                          props.onHide();
                          setinterest_modal(true);
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
                        Prefer not to respond
                      </label>
                    </motion.div>

                    <button
                      type="submit"
                      style={{
                        float: "right",
                        cursor: "pointer",
                      }}
                      className="mt-1 text-[black] px-3  "
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
        <Interest
          show={interest_modal}
          onHide={() => setinterest_modal(false)}
        />
      </motion.div>
    </>
  );
}

export default Gender_interest;
