import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"header center " + themename}>
        <h3>
          <a href="#home" className="link" style={{fontSize:20}}>
             Shivam Malik
          </a>
        </h3>
        <Navbar />
      </div>
    </>
  );
};
