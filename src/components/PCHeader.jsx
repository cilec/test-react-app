import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import logoImg from '../img/logo.png';
import {
    Menu,
    Icon,
    Row,
    Col,
    Input,
    Tabs,
    message,
    Button,
    Checkbox,
    Form
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class PCHeader extends Component {
    constructor() {
        super();
        this.state = {
            current: 'top',
            modalVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            userid: 0
        }
    }
    render() {
        let {getFieldProps} = this.props.form;
        const userShow = this.state.hasLogined
            ? <Menu.Item key="logout" className="register">
                    <Button type="primary" htmlType="button">{this.state.userNickName}</Button>
                    &nbsp;&nbsp;
                    <Link target="_blank">
                        <Button type="dashed" htmlType="button">个人中心</Button>
                    </Link>
                    &nbsp;&nbsp;
                    <Link target="_blank">
                        <Button type="ghost" htmlType="button">退出</Button>
                    </Link>
                </Menu.Item>
            : <Menu.Item key="register" class="register">
                <Icon type="appstore"></Icon>注册/登录
            </Menu.Item>
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
                                <Icon type="appstore"/>头条
                            </Menu.Item>
                            <Menu.Item key="society">
                                <Icon type="appstore"/>社会
                            </Menu.Item>
                            <Menu.Item key="domestic">
                                <Icon type="appstore"/>国内
                            </Menu.Item>
                            <Menu.Item key="intel">
                                <Icon type="appstore"/>国际
                            </Menu.Item>
                            <Menu.Item key="enterainment">
                                <Icon type="appstore"/>娱乐
                            </Menu.Item>
                            <Menu.Item key="sport">
                                <Icon type="appstore"/>体育
                            </Menu.Item>
                            <Menu.Item key="sci">
                                <Icon type="appstore"/>科技
                            </Menu.Item>
                            <Menu.Item key="fashion">
                                <Icon type="appstore"/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                    </Col>
                    <Col span={2}></Col>
                </Row>

            </header>
        )
    }
}
export default PCHeader = Form.create()(PCHeader)