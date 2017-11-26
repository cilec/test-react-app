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
                <PCFooter></PCFooter>
            </div>
        )
    }
}