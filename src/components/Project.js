import React, { Component } from 'react'
import axios from "axios"
import "..//style/component/Project/Project.css"
import {motion} from "framer-motion"

export default class Project extends Component {

    state = {
        github: []
    }
    componentDidMount() {
        axios
            .get("https://api.github.com/users/yasinkamis")
                .then(res => res.data)
                    .then(res =>
                        this.setState({ github: res })
                    )

    }
    render() {
        return (
            <div className="Project">
                <h1>PROJELER</h1>
                <div className="row">
                    <div className="col1">
                        <motion.div 
                            className="linkedln"
                            animate={{
                                x: [-1000,0]
                            }}
                            transition={{duration:1}}
                        >
                            <h2>Linkedln</h2>
                            <h4>Linkedln profilimi ziyaret edip bağlantı kurabilir ve bilgi alabilirsiniz.</h4>
                            <a href="https://www.linkedin.com/in/yasinkamis/" target="blank">Linkedln</a>
                        </motion.div>
                        <motion.div 
                            className="behance"
                            animate={{
                                x: [-1000,0]
                            }}
                            transition={{duration:1, delay:0.5}}
                        >
                        <h2>Behance</h2>
                            <h4>Behance profilimi ziyaret edip yapmış olduğum tasarımları ve web site örneklerini görebilirsiniz.</h4>
                            <a href="https://www.behance.net/yasinkam" target="blank">Behance</a>
                        </motion.div>
                        <motion.div 
                            className="instagram"
                            animate={{
                                x: [-1000,0]
                            }}
                            transition={{duration:1,delay:1}}
                        >
                        <h2>İnstagram</h2>
                            <h4>Eğlenceli içerikler ve mini projeler için instagram hesabımı takip edip incelebilirsiniz.</h4>
                            <a href="https://www.instagram.com/cosmos.developer/" target="blank">İnstagram</a>
                        </motion.div>
                    </div>
                    <div className="col2">
                        <motion.div 
                            className="github"
                            animate={{
                                x: [1000,0]
                            }}
                            transition={{duration:1,delay:1.5}}
                        >
                            <img src={this.state.github.avatar_url} alt="me"></img>
                            <h2>Github</h2>
                            <h3>Kullanıcı Adı : <span>{this.state.github.login}</span></h3>
                            <h3>Takipçi Sayısı : <span>{this.state.github.followers}</span></h3>
                            <h3>Depo Sayısı : <span>{this.state.github.public_repos}</span></h3>
                            <a href={this.state.github.html_url} target="blank">Github</a>
                        </motion.div>
                    </div>
                </div>
            </div>
        )
    }
}
