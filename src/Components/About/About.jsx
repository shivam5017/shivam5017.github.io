import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import resume from "../resume/Fw20_1002_Shivam-Malik-Resume.pdf"
import DescriptionIcon from "@material-ui/icons/Description";

import { Introduction } from "./Introduction";

import { Techstacks } from "./Techstacks";
export const About = () => {
  return (
    <>
      <div className="about center" style={{paddingTop:"100px"}}>
        <h1 data-aos="fade-right" style={{fontSize:50}}>
          Hi, I am <span className="about__name">Shivam Malik</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
        An enthusiastic Full-stack web developer who is capable of
using technical skills for the betterment of the organization.
Proficiency in React, Problem-solving mindset, and the
ability to collaborate well.
        </p>
        <div className="about__contact center" style={{border:"1px solid grey",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10px",width:"100px"}}>
          <a
            href={resume}
            aria-label="resume"
            download="Fw20_1002_Shivam_Malik-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
             onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1BkHEjajeNgBBxjx1x0hSmpIgrrq68Ww1/view"
                  )
                }
                style={{textAlign:"center",paddingLeft:"12px",marginTop:"5px"}}
                
          >
            Resume
          </a>
       
        </div>
      </div>
      <Introduction />
      
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
