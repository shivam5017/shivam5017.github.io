import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat,FaCss3 } from "react-icons/fa";
import {TbBrandNextjs} from "react-icons/tb"
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section" style={{marginTop:"20px"}}>
        <h2 className="section__title different" data-aos="fade-right" style={{fontSize:50}}>
          Projects
        </h2>
       
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/110033165/221643108-ba2e7fc7-a7fb-4dee-baeb-833c60bada4f.png"
                  alt="TicTacToe"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Apple Calculator</h2>
              <p>
                Mini project of Apple Calculator built using ReactJS. Features : Solved decimal error using decimal.js.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
              </div>
              <div>
                <a
                  href="https://ios-calculat0r.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivam5017/Apple-calculator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
              {/* phonebook */}
            
            </div>
          </div>
        </div>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/110033165/233777385-1fe343c3-e8e6-45ae-bab6-1e8f7aa512e9.png"
                  alt="phonebook"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Phone Book</h2>
              <p>
              Phone Book is a website used to store your contacts safe and secure.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <DiCss3 />
                <SiMongodb />
              </div>
              <div>
                <a
                  href="https://ph0neb00k.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivam5017/phone-book/tree/master/Phone-book-project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline">
                    View Code
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* messagner apk */}
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/110033165/238199835-a5663b2b-7b54-4fc3-9785-dbdf313333ba.png"
                  alt="messanger"
                />
              </div>
            </div>
           
<div className="project_information" data-aos="fade-right">
<h2>Messanger App</h2>
<p>

A Messenger Chat application to chat with your friends and family members or you can create groups with your loved ones
</p>
<div>
  <FaReact />
  <SiNextdotjs />
  <SiHtml5 />
  <DiCss3 />
  <SiMongodb />
  <SiTypescript />
</div>
<div>
  <a
    href="https://messenger-hazel-xi.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    <span type="button" className="btn btn--outline onbt">
      See this Live
    </span>
  </a>
  <a
    href="https://github.com/shivam5017/messenger"
    target="_blank"
    rel="noreferrer"
  >
    <span type="button" className="btn btn--outline">
      View Code
    </span>
  </a>
</div>
</div>
          </div>
        </div>
        
      </div>
    </>
  );
};

