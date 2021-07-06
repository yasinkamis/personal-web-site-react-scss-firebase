import React, { Component } from 'react'
import "../style/component/AboutMe/AboutMe.css"
import { motion } from "framer-motion";

class AboutMe extends Component {
    render() {
        return (
            <div className="aboutme">
                <div className="filter">
                    <div className="text1">
                        <h1>HAKKIMDA</h1>
                        <motion.div 
                            className="t1-card"
                            animate={{
                                x: [-1200,0]
                            }}
                            transition={{duration:1.5}}
                        >
                            <h3>Ben Kimim ?</h3>
                            <p>
                                Selam! Ben Yasin. Genelde Front- End Development diye bilinen Ön Uç Geliştirme
                                ile ilgileniyorum. 1 senedir web tasarım ve web geliştirmede kullanılan 
                                teknolojileri büyük bir hevesle öğreniyor ve uyguluyorum.
                                Sadece belirli bir çerçeve veya dil değil, bir bütün olarak teknoloji ile ilgiliyim.
                                Yeni kavram ve teknikler keşfetmeyi seviyorum. Her zaman elimden gelenin en iyisini
                                yapmaya ve yapabileceğim en iyi ürünü üretmeye özen gösteririm.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div 
                        className="text2"
                        animate={{
                            x: [1200,0]
                        }}
                        transition={{duration:1.5}}
                    >
                        <div className="t2-card">
                            <h3>Eğitim</h3>
                            <div className="t2-info">
                                <p>Yavuz Sultan Selim Anadolu Lisesi</p> <span className="text-secondary">2015 - 2019</span>
                            </div>
                            <div className="t2-info">
                                <p>Sakarya Üniversitesi / Bilişim Sistemleri Mühendisliği</p> <span className="text-secondary">2020 - (devam ediyor)</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        )
    }
}

export default AboutMe
