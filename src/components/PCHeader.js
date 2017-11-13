import React, {Component} from 'react';
import logoImg from '../img/logo.png';
import {Row, Col} from 'antd/lib/grid';
import {Menu, Icon} from 'antd';
export default class PCHeader extends Component {
    constructor() {
        super();
        this.state = {
            current: 'top'
        }
    }
    render() {
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className="logo">
                            <img src={logoImg} alt="logo"/>
                            <span>ReactNews</span>
                        </a>
                    </Col>
                    <Col span={16}>
                        <Menu mode="horizontal" selectedKeys={[this.state.current]}>
                            <Menu.Item key="top">
                                <Icon type="appstore"/>
                                头条
                            </Menu.Item>
                            <Menu.Item key="society">
                                <Icon type="appstore"/>
                                社会
                            </Menu.Item>
                            <Menu.Item key="domestic">
                                <Icon type="appstore"/>
                                国内
                            </Menu.Item>
                            <Menu.Item key="intel">
                                <Icon type="appstore"/>
                                国际
                            </Menu.Item>
                            <Menu.Item key="enterainment">
                                <Icon type="appstore"/>
                                娱乐
                            </Menu.Item>
                            <Menu.Item key="sport">
                                <Icon type="appstore"/>
                                体育
                            </Menu.Item>
                            <Menu.Item key="sci">
                                <Icon type="appstore"/>
                                科技
                            </Menu.Item>
                            <Menu.Item key="fashion">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>

            </header>
        )
    }
}