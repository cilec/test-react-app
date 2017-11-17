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
    Form,
    Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
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
    setModalVisible(value) {
        this.setState({modalVisible: value})
    };
    handleClick(e) {
        if (e.key == "register") {
            this.setState({current: 'register'});
            this.setModalVisible(true);
        } else {
            this.setState({current: e.key});
        }
    };
    handleSubmit(e) {
        e.preventDefault();
        let myFetchOptions = {
            method: 'GET'
        };
        let formData = this
            .props
            .form
            .getFieldsValue();
        // console.log('formData')
        console.log(formData);
 
    }

    render() {
        let {getFieldDecorator} = this.props.form;
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
                        <Menu
                            onClick={this
                            .handleClick
                            .bind(this)}
                            mode="horizontal"
                            selectedKeys={[this.state.current]}>
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
                            <Modal
                                title="用户中心"
                                wrapClassName="vertical-center-modal"
                                visible={this.state.modalVisible}
                                onCancel={() => this.setModalVisible(false)}
                                onOk={() => this.setModalVisible(false)}
                                okText="关闭">
                                <Tabs type="card">
                                    <TabPane tab="注册" key="2">
                                        <Form
                                            layout="vertical"
                                            onSubmit={this
                                            .handleSubmit
                                            .bind(this)}>
                                            <FormItem label="账户">
                                                {getFieldDecorator('r_userName', {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message: '请输入您的账号'
                                                        }
                                                    ]
                                                })(<Input placeholder="请输入您的账号"/>)}
                                                {/* <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/> */}
                                            </FormItem>
                                            <FormItem label="密码">
                                                {getFieldDecorator('r_password', {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message: '请输入您的密码'
                                                        }
                                                    ]
                                                })(<Input type="password" placeholder="请输入您的密码"/>)}
                                            </FormItem>
                                            <FormItem label="确认密码">
                                                {getFieldDecorator('r_confirmPassword', {
                                                    rules: [
                                                        {
                                                            required: true,
                                                            message: '请再次输入您的密码'
                                                        }
                                                    ]
                                                })(<Input type="password" placeholder="请再次输入您的密码"/>)}
                                            </FormItem>
                                            <FormItem>
                                                <Button type="primary" htmlType="submit">注册</Button>
                                            </FormItem>
                                        </Form>
                                    </TabPane>
                                </Tabs>
                            </Modal>
                        </Menu>
                        <Modal
                            title="用户中心"
                            wrapClassName="vertical-center-modal"
                            visible={this.state.modalVisible}
                            onCancel={() => this.setModalVisible(false)}
                            onOk={() => this.setModalVisible(false)}
                            okText="关闭">
                            <Tabs type="card">
                                <TabPane tab="注册" key="2">
                                    <Form
                                        layout="vertical"
                                        onSubmit={this
                                        .handleSubmit
                                        .bind(this)}>
                                        <FormItem label="账户">
                                            {getFieldDecorator('r_userName', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '请输入您的账号'
                                                    }
                                                ]
                                            })(<Input placeholder="请输入您的账号"/>)}
                                            {/* <Input placeholder="请输入您的账号" {...getFieldProps('r_userName')}/> */}
                                        </FormItem>
                                        <FormItem label="密码">
                                            {getFieldDecorator('r_password', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '请输入您的密码'
                                                    }
                                                ]
                                            })(<Input type="password" placeholder="请输入您的密码"/>)}
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            {getFieldDecorator('r_confirmPassword', {
                                                rules: [
                                                    {
                                                        required: true,
                                                        message: '请再次输入您的密码'
                                                    }
                                                ]
                                            })(<Input type="password" placeholder="请再次输入您的密码"/>)}
                                        </FormItem>
                                        <FormItem>
                                            <Button type="primary" htmlType="submit">注册</Button>
                                        </FormItem>
                                    </Form>
                                </TabPane>
                            </Tabs>
                        </Modal>

                    </Col>
                    <Col span={2}></Col>
                </Row>

            </header>
        )
    }
}
export default PCHeader = Form.create()(PCHeader)