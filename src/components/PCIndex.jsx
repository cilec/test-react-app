import React from 'react';
import PCHeader from './PCHeader';
import '../css/pc.css'
import PCFooter from './PCFooter';
import PCNewsContainer from './PCNewsContainer'
import { Router, BrowserRouter } from 'react-router-dom';
import PCImgNewsBlock from './PCImgNewsBlock'
export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer />
                <PCImgNewsBlock count={6} type="guonei" width="100%" cartTitle="国内头条" imageWidth="100%" />
                <PCFooter></PCFooter>
            </div>
        )
    }
}