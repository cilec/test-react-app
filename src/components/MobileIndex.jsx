import React from "react";
import MobileHeader from "./MobileHeader";
import MobileFooter from './MobileFooter';
import '../css/mobile.css';
export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader/>
                <MobileFooter/>
            </div>
        )
    }
}