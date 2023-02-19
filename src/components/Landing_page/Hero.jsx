import { React, useState } from "react";
import "../stringar.css";
import Qu1 from "../Modal/Login";
function Hero() {
  const [class1, setclass1] = useState("");
  const [modal, setmodal] = useState(false);
  return (
    <div className="hero">
      <div>
        <Qu1 show={modal} onHide={() => setmodal(false)} onAgain={()=>setmodal(true)} />
      </div>
      <div style={{ backgroundColor: " #fe634e", color: "#fff" }}>
        <div className="wrapper  flex items-center justify-between px-[5rem]   w-[100vw] h-[36.01rem] relative z-[3]">
          <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
            <h1
              style={{
                fontSize: "50px",
                fontWeight: "900",
                fontFamily: "Helvetica",
                marginBottom: "10px",
                textShadow: "3px 5px #955951",
              }}
            >
              FEEDBACK
            </h1>
            <span>
              <b
                style={{
                  fontSize: "2.25rem",
                  fontWeight: "200",
                  fontFamily: "Helvetica",
                }}
              >
                Landing Page
              </b>
            </span>
            <span className="text-[15px]  text-[#525D6E]">
              Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
              <br />
              Suspendisse in leo non risus tincidunt lobortis.
            </span>
            <div
              style={{ marginTop: "20px", width: "30%" }}
              className="buttons"
            >
              <span
                className="buttonStyle"
                style={{
                  fontFamily: "Helvetica",
                  fontWeight: "600",
                  color: "#111",
                  backgroundColor: "white",
                }}
                onClick={() => setmodal(!modal)}
              >
                Explore
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
