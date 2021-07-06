import React, { useState} from 'react'
import "../style/component/Contact/Contact.css"
import {motion} from "framer-motion"
import {db} from "../firebase/firebase"

const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [subject,setSubject] = useState("");
    const [message,setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection("contacts").add({
            name:name,
            email:email,
            subject:subject,
            message:message,
        })
        .then(()=>{
            alert("sa");
        })
        .catch((error) => {
            alert(error.message)
        })

        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div className="Contact">
            <h1>İLETİŞİM</h1>
            <motion.div 
                className="contact-card"
                animate= {{opacity:[0,1]}}
                transition={{ duration:1 }}
            >
                <motion.div 
                    className="card-info"
                    animate= {{opacity:[0,1]}}
                    transition={{ duration:1, delay:1}}
                >
                    <h3>İnstagram</h3>
                    <p>Kişisel İnstagram hesabımı takip edebilir ve iletişime geçebilirsiniz.</p>
                    <button>İnstagram</button>
                </motion.div>
                <motion.div 
                    className="card-info"
                    animate= {{opacity:[0,1]}}
                    transition={{ duration:1, delay:1.25 }}
                >
                    <h3>Linkedln</h3>
                    <p>Linkedln ile iletişime geçebilirsiniz ve bağlantı kurabilirsiniz.</p>
                    <button>Linkedln</button>
                </motion.div>
                <motion.div 
                    className="card-info"
                    animate= {{opacity:[0,1]}}
                    transition={{ duration:1, delay:1.5 }}
                >
                    <h3>Twitter</h3>
                    <p>Kişisel Twitter hesabımı takip edebilir ve iletişime geçebilirsiniz.</p>
                    <button>Twitter</button>
                </motion.div>
            </motion.div>
            <form 
                className="cf"
                onSubmit = {handleSubmit}
            >
                <div className="half left cf">
                    <motion.input type="text" id="input-name" placeholder="İsim" autoComplete="off"
                        animate= {{opacity:[0,1]}}
                        transition={{ duration:1, delay:1 }}
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                    ></motion.input>
                    <motion.input type="email" id="input-email" placeholder="E-Posta" autoComplete="off"
                        animate= {{opacity:[0,1]}}
                        transition={{ duration:1, delay:1.3 }}
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                    ></motion.input>
                    <motion.input type="text" id="input-subject" placeholder="Konu" autoComplete="off"
                        animate= {{opacity:[0,1]}}
                        transition={{ duration:1, delay:1.6 }}
                        value={subject}
                        onChange = {(e) => setSubject(e.target.value)}
                    ></motion.input>
                </div>
                <div className="half right cf">
                    <motion.textarea name="message" type="text" id="input-message" placeholder="Mesaj" autoComplete="off"
                        animate= {{opacity:[0,1]}}
                        transition={{ duration:1, delay:1.9 }}
                        value={message}
                        onChange = {(e) => setMessage(e.target.value)}
                    ></motion.textarea>
                </div>
                <motion.input type="submit" value="Gönder" id="input-submit"
                    animate= {{opacity:[0,1]}}
                    transition={{ duration:1, delay:1.7 }}
                    style={{opacity:0}}
                ></motion.input>
            </form>
        </div>
    )
}

export default Contact;
