import React from 'react';
import PCHeader from './PCHeader';
import '../css/pc.css'
import PCFooter from './PCFooter';
import PCNewsContainer from './PCNewsContainer'
export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <PCNewsContainer/>
                <PCFooter></PCFooter>
            </div>
        )
    }
}