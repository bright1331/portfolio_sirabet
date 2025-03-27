import React from 'react'
import './Contact.css'
import Swal from 'sweetalert2'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import github_logo_icon from '..//..//assets/github_logo_icon.png'
import facebook from '..//..//assets/facebook.png'
import Instagram_icon from '..//..//assets/Instagram_icon.png'

function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5264e882-70c6-48c0-8c89-287c87d25e88");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };
      const openGithub = () => {
        window.open('https://github.com/bright1331', '_blank');
      }
      const openfacebook = () => {
        window.open('https://www.facebook.com/share/1Lpo46og46/?mibextid=wwXIfr', '_blank');
      }
      const openInstagram = () => {
        window.open('https://www.instagram.com/bright_x_st?igsh=Y2IxODFndjVyZGZ0', '_blank');
      }
  return (
    <div id='contact' className='contact'>
        <div className="connect-title">
            <h1>Get in Touch</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>Hello, you can contact me through these channels.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt=''/> <p>bright6972@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt=''/> <p>0991769131</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt=''/> <p>The Richette Phra Nakhon Nuea
                                                145/9 Wongsawang Soi 9, Bang Sue Subdistrict,
                                                Bang Sue District, Bangkok 10800, Thailand</p>
                    </div>
                    <div className='contact-detail-github'>
                        <img src={github_logo_icon} alt=''/>
                        <button onClick={openGithub} type='submit' className="home-resume">Visit My GitHub</button>
                    </div>
                    <div className='contact-detail-github'>
                        <img src={facebook} alt=''/>
                        <button onClick={openfacebook} type='submit' className="home-resume">Contact us on Facebook</button>
                    </div>
                    <div className='contact-detail-github'>
                        <img src={Instagram_icon} alt=''/>
                        <button onClick={openInstagram} type='submit' className="home-resume">Contact us on Instagram</button>
                    </div>
                </div>     
            </div>
            <form className="contact-right" onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter Your email' name='email'/>
                <label htmlFor="">Write Your message here</label>
                <textarea name="message" placeholder='Enter Your Message'></textarea>
                <button type='submit' className="contact-submit">Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
