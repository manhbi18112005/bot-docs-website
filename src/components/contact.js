import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
export function ContactForm() {
  const [state, handleSubmit] = useForm("xpnozkpx");
  if (state.succeeded) {
      return (<div className={styles.contactUsResponse} id="contact-us"><p>Thanks for your question! We'll get back to you shortly.</p></div>);
  }
  return (

    <div className={styles.contactUsBackground} id="contact-us">
        <div className={`${styles.contactContainer} container`}>
            <div className={styles.contactSideBySide}>
                <div className={styles.contactMainPart}>
                    <h3 className={styles.contactTitle} style={{fontSize: "24px", fontWeight: "bold", paddingBottom: "20px", color: "#ffffff"}}>Need support?</h3>
                    <div className={styles.contactLimitContainer}>
                        <p className={styles.contactDetails}></p>
                    </div>

                    <div className={styles.contactRow}>
                        <div className={styles.contactGrid}>
                            
                            <h5 className={styles.contactSubTitle}>Feel like talking?</h5>
                            <FontAwesomeIcon icon={ faPhone }/> <a href="tel:113">000-000-0000</a>
                            <h5 className={styles.contactSubTitle}>Questions?</h5>
                            <FontAwesomeIcon icon={ faEnvelope }/> <a href="mailto:support@nonamestudio.xyz?subject=I am stupid" target="_blank">support@nonamestudio.xyz</a>
                        </div>

                        <div className={styles.contactGrid}>                                                     
                                <form onSubmit={handleSubmit}>
                                <label htmlFor="name">
                                    Name
                                </label>
                                <input className={styles.messageInput}
                                    id="name"
                                    type="name" 
                                    name="name"
                                    rows="3"
                                    placeholder="Thỏ cute yang hồ"
                                    spellcheck="false"
                                />
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input className={styles.messageInput}
                                    id="email"
                                    type="email" 
                                    name="email"
                                    rows="4"
                                    placeholder="bucugianghoa@nonamestudio.xyz"
                                    spellcheck="false"
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                                <label htmlFor="message">
                                    Message
                                </label>
                                <textarea className={styles.messageInput}
                                    id="message"
                                    name="message"
                                    placeholder="Ok ban la nhat, ban la so mot. Khong ai bang ban roi"
                                    spellcheck="true"
                                />
                                <ValidationError 
                                    prefix="Message" 
                                    field="message"
                                    errors={state.errors}
                                />
                                <button type="submit" disabled={state.submitting}>
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
 