import React ,{useState} from 'react'
import { styles } from '../style'
import EarthCanvas from '../canvas/Earth'
import  { toast } from "react-hot-toast"
import emailjs from "@emailjs/browser"
import dotenv from "dotenv"
const Contact = () => {
     
    const [state, setState] = useState({
        name: "",
        email: "",
        message: "",
    });
    
    const { name, email, message } = state;

   async  function send(e){
        e.preventDefault()
      
         emailjs.send(
            "service_wo5trlc",
            "template_x0ltqzh",
            {
                from_name:name,
                to_name:"Sagar pandey",
                from_email:email,
                to_email:"sagarwebsec@gmail.com",
                message:message
            },
            "a102zFChCdcRvTCxN"
         ).then(
            ()=>{
                 alert("We Will Contact You Shortly"),
                 setState({
                    name:"",
                    message:"",
                    email:""
                 })
            }
         )
     }

  return (
    <div  className={`  xl:mt-36 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden w-9/12 mx-auto pb-16`}>
        <div className=' bg-tertiary flex flex-col rounded-2xl w-[50%]  p-5' id='contact'>
             <p className={`${styles.sectionSubText}`}>Get in touch</p>
             <p className={`${styles.sectionHeadText}`}>Contact.</p>
             <form className=' flex flex-col' onSubmit={send}>
                  
                  {/*name*/}
                  <label htmlFor='name'>Your Name</label>
                  <input   value={name} onChange={(e) => setState({ ...state, name: e.target.value })}className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' name='name' type='text' placeholder="What's your name?"/>
                  
                  {/*email*/}
                  <labe className=' mt-4' htmlFor='email'>Your Email</labe>
                  <input  value={email}  onChange={(e) => setState({ ...state, email: e.target.value })} className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' name='email' type='text' placeholder="What's your Email?"/>

                  {/* message*/}
                  <label className=' mt-5' htmlFor='message'>Your Message</label>
                  <textarea value={message}  onChange={(e) => setState({ ...state, message: e.target.value })}    rows={7}   className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' name='message' type='text' placeholder="What do you want to say?"/>
                  <button type='submit'  className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>Send</button>
             </form>
        </div>
        <div  className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
            <EarthCanvas/>
        </div>
    </div>
  )
}

export default Contact