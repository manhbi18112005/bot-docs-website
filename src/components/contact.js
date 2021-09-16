import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from './contact.module.css';

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
                    <h3 className={styles.contactTitle}>Need support?</h3>
                    <div className={styles.contactLimitContainer}>
                        <p className={styles.contactDetails}></p>
                    </div>

                    <div className={styles.contactRow}>
                        <div className={styles.contactGrid}>
                            <h5 className={styles.contactSubTitle}>Feel like talking?</h5>
                            <a href="tel:113">000-000-0000</a>


                            <h5 className={styles.contactSubTitle}>Questions?</h5>
                            <a href="mailto:support@nonamestudio.xyz?subject=I am stupid" target="_blank">Email Us</a>
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
                                />
                                <label htmlFor="email">
                                    Email Address
                                </label>
                                <input className={styles.messageInput}
                                    id="email"
                                    type="email" 
                                    name="email"
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
 