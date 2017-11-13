import React from "react";
import logoImg from '../img/logo.png';
export default class MobileHeader extends React.Component {
    render() {
        return (
            <div id="mobileheader">
                <header>
                    <img src={logoImg} alt="logo"/>
                    <span>ReactNews</span>
                </header>
            </div>
        )
    }
}