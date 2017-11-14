import React from 'react';
import PCHeader from './PCHeader';
import '../css/pc.css'
import PCFooter from './PCFooter';
export default class PCIndex extends React.Component {
    render() {
        return (
            <div>
                <PCHeader></PCHeader>
                <PCFooter></PCFooter>
            </div>
        )
    }
}