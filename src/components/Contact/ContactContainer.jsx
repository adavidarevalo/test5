import React, {useState, useRef} from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from 'emailjs-com';
import { Container } from '../../styles/components/ContactContainer'

const ContactContainer = () => {
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
        <Container>
            <div className='Element-Container'>
                <div className='Container-Form'>
                    <h3>Have a question? Please enquire below</h3>
                    <form
                    ref={form}
                    onSubmit={SendEmail}
                    id='FormContact'
                    >
                        <div>
                            <label>Name</label>
                            <input 
                            type='text'
                            name='user_name'
                            required
                            />
                        </div>
                        <div>
                            <label>Email</label>
                            <input 
                            type='email'
                            name='user_email'
                            required
                            />
                        </div>
                        <div>
                            <label>Subject</label>
                            <input 
                            type='text'
                            name='user_subject'
                            required
                            />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea
                            name='message'
                            required
                            ></textarea>
                        </div>
                        <div className='ValidatorElement'>
                        <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey="6Lc6ajQdAAAAANCGkBgexm-ds-_LB8dZWUqWIaBg"
                        onChange={onChange}
                        />
                        <input type='submit' value='Send'
                        className='Send'
                        />
                        </div>
                        <div className={MSG.code === 0 ? 'Msg' : MSG.code === 1 ? 'Msg Error' : 'Msg True' }>
                            <p>{MSG.code !== 0 && MSG.msg }</p>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}

export default ContactContainer