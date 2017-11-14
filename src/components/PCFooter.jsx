import React, {Component} from 'react';
import {Row, Col} from 'antd/lib/grid';
export default class PCFooter extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="footer">
                    &copy;&nbsp;2017 All Rights Reserved.
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}