import React, { Component } from 'react';
import "../style/navigation/nav.css"
import {NavLink} from "react-router-dom";

class NavCard extends Component {
    state = {
        active : true
    }

    navActive = () => {
        this.setState({active: !this.state.active });
    }

    render() {
        return (
            <>
                <nav>
                    <div onClick={this.navActive} className={this.state.active ? "hamburger active":"hamburger"}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className={this.state.active ? "navlinks":"navlinks activeNav"}>
                        <NavLink exact to="/">Ana Menü</NavLink>
                        <NavLink to="/hakkımda">Hakkımda</NavLink>
                        <NavLink to="/yetkinlikler">Yetkinlikler</NavLink>
                        <NavLink to="/projeler">Projeler</NavLink>
                        <NavLink to="/iletişim">İletişim</NavLink>
                    </div>
                </nav>
            </>
        )
    }
}

export default NavCard
