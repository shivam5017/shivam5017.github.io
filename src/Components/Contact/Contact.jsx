import React,{useRef} from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import {  BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { useToast } from "@chakra-ui/react";


export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const toast=useToast();
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3dp3lcf",
        "template_7h1wkb8",
        form.current,
        "2r8ILoWn1V16Wv2rF"
      )
      .then((result) => {
        console.log(result.text);
        toast({
          title: "Thank you!",
          description: "We've recieved your mail.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
          containerStyle: {
           padding:0,
           margin:0
          }
          
        });
      })
      .catch((error) => {
        console.log(error.text);
      });

    form.current.reset();
  };
  return (
    <>
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
           <span className="different" style={{fontSize:50}}>Hire Me</span>
        </h2>
        <form className="contact-form" ref={form} onSubmit={sendEmail} style={{justifyContent:'center'}}>
          <input type="text" name="name" placeholder="Name" />

          <input type="email" name="email" placeholder="Email" />

          <textarea name="message" placeholder="Message . . ." />
          <input type="submit" value="Send" style={{borderRadius:10,marginTop:9}}/>
        </form>
        <div className={"contactcontainer " + themename} data-aos="fade-right">
          <a
            href="mailto:shivammalik962@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{display:"flex"}}
          >
            <CgMail className="email" /><h6 style={{marginTop:"10px"}} >shivammalik962@gmail.com</h6>
          </a>
          <a href="tel:+918708751239" target="_blank" rel="noreferrer" style={{display:"flex"}}>
            <BsFillTelephoneFill className="phone" style={{height:45}}/><h6 style={{marginTop:"10px"}}>+91 8708751239</h6>
          </a>
          <div className="contactcontainerpart">
          
          <a
            href="https://www.linkedin.com/in/shivammalik00/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="linkedin" />
          </a>
          <a
            href="https://github.com/shivam5017"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub className="github" />
          </a>
          </div>
        </div>
      </div>
    </>
  );
};
