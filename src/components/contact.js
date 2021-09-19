import React, {useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
let dn = "", dmail = "", dmess = "";
export function ContactForm() {
  const [state, handleSubmit] = useForm("xpnozkpx");
  const [data,setData]=useState(null)
    const [print,setPrint]=useState(false)
    function getdn(val) {
        dn = val.target.value;
        
    }
    function getdmail(valu) {
        dmail = valu.target.value;
    }
    function getdmess(value) {
        dmess = value.target.value;
    }
    function sendmail() {
        emailjs.init("user_7cRRQ6dnhmEJJEVZR4mXH");
        emailjs.send("service_25km63q","template_40zuz5q",{ from_name: `${dn}: ${dmail}`, message: dmess, reply_to: dmail, })
            .then((response) => {
                return (
                    <div id="ooo">
                        <div id="success-box">
                            <div className="dot"></div>
                            <div className="dot two"></div>
                            <div className="face">
                            <div className="eye"></div>
                            <div className="eye right"></div>
                            <div className="mouth happy"></div>
                        </div>
                        <div className="shadow scale"></div>
                        <div className="message">
                            <h1 className="alerta">Success!</h1>
                            <div className="pa">Your message has been delivered. Thanks :3</div>
                            </div>
                    </div>
                  </div>
                  );
            }, (err) => {
                return(
                    <div id="ooo">
                        <div id="error-box">
                        <div className="dot"></div>
                        <div className="dot two"></div>
                        <div className="face2">
                        <div className="eye"></div>
                        <div className="eye right"></div>
                        <div className="mouth sad"></div>
                        </div>
                        <div className="shadow move"></div>
                        <div className="message">
                            <h1 className="alerta">Error!</h1>
                            <div className="pa">oh no, something went wrong.</div>
                            </div>
                        </div>
                    </div>
                )
            })
    }
  if (state.succeeded) {
      return (
        <div id="ooo">
            <div id="success-box">
                <div className="dot"></div>
                <div className="dot two"></div>
                <div className="face">
                <div className="eye"></div>
                <div className="eye right"></div>
                <div className="mouth happy"></div>
            </div>
            <div className="shadow scale"></div>
            <div className="message">
                <h1 className="alerta">Success!</h1>
                <div className="pa">Yes, everything seems working. But do you really want to send this?</div>
                </div>
            <button className="button-box">
                <div className="hti">
                    <div className="green" onClick={sendmail}>Confirm</div>
                </div>
            </button>
        </div>
      </div>
      );
    }
  return (

    <div className={styles.contactUsBackground} id="contact-us">
        <div className={`${styles.contactContainer} container`}>
            <div className={styles.contactSideBySide}>
                <div className={styles.contactMainPart}>
                    <div className={styles.contactLimitContainer}>
                        <p className={styles.contactDetails}></p>
                    </div>

                    <div className={styles.contactRow}>
                        <div className={styles.contactGrid}>
                            <h3 className={styles.contactTitle} style={{fontSize: "24px", fontWeight: "bold", paddingBottom: "20px", lineHeight: "35px", maxWidth: "310px"}}>Need support? Contact us via Phone & Email</h3>
                            <h5 className={styles.contactSubTitle}>Feel like talking?</h5>
                            <FontAwesomeIcon icon={ faPhone }/> <a href="tel:113">000-000-0000</a>
                            <h5 className={styles.contactSubTitle}>Questions?</h5>
                            <FontAwesomeIcon icon={ faEnvelope }/> <a href="mailto:support@nonamestudio.xyz?subject=I am stupid" target="_blank">support@nonamestudio.xyz</a>
                        </div>

                        <div className={styles.contactGrid}>                                                     
                                <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Name</label>
                                <input className={styles.messageInput}
                                    id="name"
                                    type="name" 
                                    name="name"
                                    rows="3"
                                    placeholder="Thỏ cute yang hồ"
                                    spellcheck="false"
                                    onChange={getdn}
                                />
                                <label htmlFor="email">Email Address</label>
                                <input className={styles.messageInput}
                                    id="email"
                                    type="email" 
                                    name="email"
                                    rows="4"
                                    placeholder="bucugianghoa@nonamestudio.xyz"
                                    spellcheck="false"
                                    onChange={getdmail}
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                                <label htmlFor="message">Message</label>
                                <textarea className={styles.messageInput}
                                    id="message"
                                    name="message"
                                    placeholder="Ok ban la nhat, ban la so mot. Khong ai bang ban roi"
                                    spellcheck="true"
                                    onChange={getdmess}
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                                <button type="submit" disabled={state.submitting} onClick={()=>setPrint(true)}>
                                    Submit
                                </button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
  );
}
 