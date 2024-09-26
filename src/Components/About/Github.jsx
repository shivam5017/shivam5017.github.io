import React from "react";
import Githubcalendar from "react-github-calendar";
import { ThemeContext } from "../../Context/theme";
import "./github.css"

export const Github = () => {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#8400b9",
    grade3: "#b22ff4",
    grade2: "#b265f6",
    grade1: "#c084f5",
    grade0: "#ecd9fc"
  };
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <div className={"section " + themename} data-aos="fade-right">
        <h2 className="section__title different" style={{fontSize:50}}>
          Days I <span className="different"> Code</span>
        </h2>
        <Githubcalendar
          username="shivam5017"
          blockSize={15}
          blockMargin={5}
          theme={themename}
          fontSize={16}
        />
         <div className="github-stats" >
        <img
          id="github-streak-stats"
          className="stats-1"
          src="https://github-readme-streak-stats.herokuapp.com?user=shivam5017&theme=radical&hide_border=false"
          alt=""
        />

        <img
          id="github-top-langs"
          className="stats-1"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=shivam5017&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
          alt=""
        />
        <img
          id="github-stats-card"
          className="stats-1"
          src="https://github-readme-stats.vercel.app/api?username=shivam5017&theme=radical&hide_border=false&include_all_commits=true&count_private=true"
          alt=""
        />
      </div>
      </div>
    </>
  );
};
