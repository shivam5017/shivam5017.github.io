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
  SiNodedotjs
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section" style={{marginTop:"20px"}}>
        <h2 className="section__title different" data-aos="fade-right">
          Projects
        </h2>
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/110033165/208610471-ee2b5d62-b5e1-454a-aabd-cd3320ab40a3.png"
                  alt="Mail Chimp"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Best Buy Clone</h2>
              <p>
                Clone of the popular Electronic products website Best Buy. Built on react for front end. It's an Individual project executed in 5 days.
              </p>
              <div>
                <FaReact />
                <SiHtml5 />
                <IoLogoJavascript />
                <FaCss3 />
              </div>
              <div>
                <a
                  href="https://fast-buy.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivam5017/distinct-cabbage-8971"
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
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/110033165/221638908-ab8605de-dc67-4387-bf1f-556938566ab6.png"
                  alt="Myntra"
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>KFC Clone</h2>
              <p>
              KFC is an American fast food restaurant chain headquartered
in Louisville, Kentucky, that specializes in fried chicken.
              </p>
              <div>
                <IoLogoJavascript />
                <FaReact />
                <FaCss3 />
              </div>
              <div>
                <a
                  href="https://kfc-taste.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/shivam5017/quirky-taste-6442"
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
        <div className="projects_container">
          <div className="project">
            <div className="project_videocontainer">
              <div data-aos="fade-right">
                <img
                  src="https://user-images.githubusercontent.com/95179001/221365078-959b5acb-dbd9-4f04-9c2a-f2fbfdc0309d.png"
                  alt=""
                />
              </div>
            </div>
            <div className="project_information" data-aos="fade-right">
              <h2>Meesho Clone </h2>
              <p>
              Meesho is India's largest and most trusted marketplace for Resellers, who sell products online through WhatsApp and Facebook. Trusted by over 50,000 Resellers, Meesho helps them grow their online business by providing, Hit products at Lowest prices.
              </p>
              <div>
                <TbBrandNextjs />
                <IoLogoJavascript />
                <FaCss3 />
              </div>
              <div>
                <a
                  href="https://meesho-clone-ashokprjapati.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span type="button" className="btn btn--outline onbt">
                    See this Live
                  </span>
                </a>
                <a
                  href="https://github.com/AshokPrjapati/Meesho-clone"
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
        
      </div>
    </>
  );
};
