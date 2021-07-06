import React, { Component } from 'react'
import "../style/component/Page/Page.css"
import Photo from "../style/component/img/profile.jfif"
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

export default class Page extends Component {
    render() {
        return (
            <div className="home-page">
                <motion.div className="home-text">
                    <motion.img 
                        src={Photo} 
                        alt="me"
                        animate={{
                            scale: [1, 1.15,1],
                            borderRadius: ["50%", "20%", "50%"]
                        }}
                        transition={{ duration: 1.5 }}
                    ></motion.img>
                    <motion.div 
                        className="header"
                        animate={{
                            y: [-200,0],
                        }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <h1>YASİN KAMIŞ</h1>
                        <h3>Front - End Developer</h3>
                    </motion.div>
                    <motion.div 
                        className="text"
                        animate={{
                            y: [300,0],
                        }}
                        transition={{ duration: 1, delay: 1.5 }}
                    >
                        <p>
                            Selam! Ben Yasin. Genelde Front- End Development diye bilinen Ön Uç Geliştirme
                            ile ilgileniyorum. 1 senedir web tasarım ve web geliştirmede kullanılan
                            teknolojileri büyük bir hevesle öğreniyor ve uyguluyorum...
                        </p>
                        <Link to="/hakkımda"><button type="button">Devamını Gör</button></Link>
                    </motion.div>
                </motion.div>
            </div>
        )
    }
}
