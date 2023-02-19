import React from "react";
import "../stringar.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/contact");
    
  };
  return (
    <div
      className="header  flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem]"
      style={{ backgroundColor: " #fe634e", color: " #fff" }}
    >
      {/* logo */}
      <img
        src={require("../Games/Images/image 4.png")}
        alt=""
        className="logo  w-[42px] h-[42px]"
      />
      <h3
        className="heading"
        style={{ position: "absolute", left: "135px", fontSize: "250%" }}
      >
        Strin<span style={{ color: "darkblue" }}>gar</span>
      </h3>

      <a
        onClick={()=>handleclick()}
        style={{ padding: "10px 10px", cursor: "pointer" }}
      >
        Contact us
      </a>
    </div>
  );
}

export default Header;
