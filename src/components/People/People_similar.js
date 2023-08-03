import React, { useState } from "react";
import "../stringar.css";
import Img1 from "./Mask Group 23.png";
import Que3 from "./Profile_Page";
function People_similar(props) {
  const [modalq3, setmodalq3] = useState(false);
  const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const [isHovering, setIsHovering] = useState(Array(17).fill(false));
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
  return (
    <div style={{ display: "flex", flexDirection: "coulmn" }}>
      <div style={{ overflowX: "auto", height: "100vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            flexFlow: "wrap",
          }}
        >
          {arr.map((item, index) => (
            <div
              key={item}
              style={{ width: "300px" }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave}
              style={{
                backgroundColor: isHovering[index] ? "#f0aba1" : "",
                transition: "all 0.6s",
                transform: isHovering[index] ? "translateY(30px)" : "",
                zIndex: isHovering[index] ? "4" : "",
              }}
              className="rounded-lg border border-gray-200 shadow-md m-2"
            >
              {!isHovering[index] && (
                <div className="max-w-sm bg-gray   dark:border-gray-700 m-4">
                  <div className="flex flex-col items-center py-4">
                    <img
                      className="mb-3 w-24 h-24 rounded-full shadow-lg"
                      src={Img1}
                      alt="Bonnie image"
                    />
                    <h5
                      className="mb-1 text-xl"
                      style={{ fontFamily: "nunito", fontWeight: "500" }}
                    >
                      Bonnie Green
                    </h5>
                    <span className=" text-pink-500 dark:text-gray-400">
                      Visual Designer
                    </span>
                    <div className="flex mt-4 mb-2">
                      <i
                        class="fas fa-medal"
                        style={{ fontSize: "48", color: "gold" }}
                      ></i>
                      <i
                        class="fas fa-medal"
                        style={{ fontSize: "48", color: "silver" }}
                      ></i>
                      <i
                        class="fas fa-medal"
                        style={{ fontSize: "48", color: "brown" }}
                      ></i>
                    </div>
                    <div className="flex mt-4 space-x-3 lg:mt-3">
                      <div
                        className="px-3 py-1 mx-1 mt-1 rounded  bg-red-300 hover:text-white"
                        style={{ borderRadius: "10px", fontWeight: "900" }}
                      >
                        Cricket
                      </div>
                      <div
                        className="px-3 py-1 mx-1 mt-1 rounded  bg-red-300 hover:text-white"
                        style={{ borderRadius: "10px", fontWeight: "900" }}
                      >
                        Reading
                      </div>
                      <div
                        className="px-3 py-1 mx-1 mt-1 rounded  bg-red-300 hover:text-white"
                        style={{ borderRadius: "10px", fontWeight: "900" }}
                      >
                        Football
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {isHovering[index] && (
                <div className="max-w-sm bg-gray   dark:border-gray-700 m-4">
                  <div className="flex flex-col items-center py-4">
                    <div
                      className="text-center text-xl m-5 "
                      style={{ fontFamily: "nunito", fontWeight: "bold" }}
                    >
                      <blockquote>
                        <h3>
                          <span className="text-xl" style={{fontSize:'150%'}}>&#8220;</span> When you get
                        </h3>
                        <h3> tired , learn to rest</h3>
                        <h3>
                          not to quite <span className="text-xl" style={{fontSize:'150%'}}>&#8221;</span>
                        </h3>
                      </blockquote>
                    </div>
                    <div className="flex space-x-3 lg:mt-3">
                      <a
                        href="#"
                        style={{ backgroundColor: "#f0aba1" }}
                        className="inline-flex items-center py-2 px-4  text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                      >
                        Send Invitation
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center py-2 px-4  text-center text-black-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200  dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                        onClick={() => setmodalq3(!modalq3)}
                      >
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Que3
          className="p-4 "
          show={modalq3}
          onHide={() => setmodalq3(false)}
        />
      </div>
    </div>
  );
}

export default People_similar;
