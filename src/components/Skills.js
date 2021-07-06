import React, { Component } from 'react'
import "../style/component/Skills/Skills.css"
import { motion } from "framer-motion";


export default class Skills extends Component {
    render() {
        let skills = [
            {
                "lang": "React",
                "key": 0,
                "value": 55
            },
            {
                "lang": "Javascript",
                "key": 1,
                "value": 75
            },
            {
                "lang": "Html 5",
                "key": 2,
                "value": 95
            },
            {
                "lang": "Sass / Scss",
                "key": 3,
                "value": 85
            },
            {
                "lang": "Css 3",
                "key": 4,
                "value": 90
            },
            {
                "lang": "Jquery",
                "key": 5,
                "value": 80
            },
            {
                "lang": "Adobe XD",
                "key": 6,
                "value": 65
            },
            {
                "lang": "Adobe PS",
                "key": 7,
                "value": 70
            },
            {
                "lang": "Adobe Illustrator",
                "key": 8,
                "value": 75
            }

        ]
        return (
            <div className="Skills">
                <h1>YETKİNLİKLER</h1>
                <motion.p
                    animate={{
                        x: [1400,0]
                        
                    }}
                    transition={{ duration: 1.5 }}
                >
                    Web geliştirme ve tasarımında kullandığım bir çok teknoloji var. Sürekli kendimi güncelleyerek yeni teknolojiler öğreniyorum.
                </motion.p>
                <div className="lang">
                    {
                        skills.map((skills) =>
                            <div key={skills.key}>
                                <div className="info-skills">
                                    <h4>{skills.lang}</h4>
                                    <h4>%{skills.value}</h4>
                                </div>
                                <div className="range-skills">
                                    <motion.div 
                                        className="range"
                                        animate={{
                                            width: skills.value + "%",
                                        }}
                                        transition={{ duration: 1.5}}
                                        style={{width: 0}}
                                    >
                                    </motion.div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
