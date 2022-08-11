import React, { useState } from "react";
import Pendididkan from "./Pendididkan";
import Tentang from "./Tentang";

const Navbar = () => {
  const [position, setPostion] = useState(["tentang", "pendidikan"]);
  const linkNavHandler = (e,pos) => {
    e.preventDefault();
    setPostion(pos);
  };
  return (
    <>
      <ul style={{ display: "flex", gap: "0.5em", listStyleType: "none" }}>
        <li>
          <a href="#" onClick={(e) => linkNavHandler(e,"tentang")}>
            tentang
          </a>
        </li>
        <li>
          <a href="#" onClick={(e) => linkNavHandler(e,"pendidikan")}>
            pendidikan
          </a>
        </li>
      </ul>
      {position === "tentang" ? <Tentang/> : <Pendididkan/>}
    </>
  );
};

export default Navbar;
