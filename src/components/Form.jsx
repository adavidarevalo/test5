import React, {useState, useRef} from 'react'
import { AiFillPushpin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';

const Form = () => {
    const form = useRef();
    const recaptchaRef = useRef();
    const [MSG, setMSG] = useState({
        code: 0,
        msg: ''
    })
    const [robot, setRobot] = useState(false)

    function onChange() {
        setRobot(!robot)
      }
    const resetMsg = () =>{
        setTimeout(() => {
            setMSG({
                code: 0,
                msg: ''       
            })
        }, 3000);
    }

    const SendEmail = (e) => {
        e.preventDefault()
        if(!robot){
            setMSG({
                code: 1,
                msg: 'All field are required'
            })
            resetMsg()
            return
        }
        emailjs.sendForm('service_p31mns6', 'template_w3ooalm', form.current, 'user_PGYSp4WJ5LbQE2931rfnp')
        .then((result) => {
            console.log(result.text);
            setMSG({
                code: 2,
                msg: 'Message Sent'
            })
            document.getElementById('FormContact').reset();
            resetMsg()
            recaptchaRef.current.reset()
            setRobot(false)
        }, (error) => {
            console.log(error.text);
            setMSG({
                code: 1,
                msg: 'There was a Error, Try again.'
            })
            resetMsg()
        });
    }


    return(
        <section className='Form-Container'> 
            <div data-aos='fade-right'>
                <p>Contact Me</p>
                <h2>Get in touch</h2>
                <form
                ref={form}
                onSubmit={SendEmail}
                id='FormContact'
                >
                    <div>
                        <div className='Form-Divide'>
                            <input type="text" placeholder='Name' required/>
                            <input type="email" placeholder='Email' required/>
                        </div>
                        <input type='text' placeholder='Subject' required/>
                        <textarea placeholder='Message'></textarea>
                    </div>
                    <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Lc6ajQdAAAAANCGkBgexm-ds-_LB8dZWUqWIaBg"
                        onChange={onChange}
                    />
                    <input 
                    type='submit' 
                    value='Send Message'
                    className='Form-Submit'
                    />
                    <div className={MSG.code === 0 ? 'Msg' : MSG.code === 1 ? 'Msg Error' : 'Msg True' }>
                        <p>{MSG.code !== 0 && MSG.msg }</p>
                    </div>
                </form>
            </div>
            <div className='Form-Container-Info' data-aos='fade-left'>
                <div className='Contact-Container'>
                    <div className='Contact-Icon'>
                        <AiOutlinePhone/>
                    </div>
                    <div>
                        <h3>Call Me</h3>
                        <p>(+593) 99 540 2222</p>
                    </div>
                </div>
                <div className='Contact-Container'>
                    <div className='Contact-Icon'>
                        <AiOutlineMail/>
                    </div>
                    <div>
                        <h3>E Mail</h3>
                        <p>davidarevaloc20@gmail.com</p>
                    </div>
                </div>
                <div className='Contact-Container'>
                    <div className='Contact-Icon'>
                        <AiFillPushpin/>
                    </div>
                    <div>
                        <h3>Location</h3>
                        <p>Ambato - Ecuado</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Form