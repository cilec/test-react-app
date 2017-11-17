import React from "react";
import logoImg from '../img/logo.png';
import {Link} from "react-router-dom";
import {
    Icon,
    Modal,
    Tabs,
    Form,
    Input,
    Button
} from "antd"
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class MobileHeader extends React.Component {
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
    login(){
        
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        const userShow = this.state.hasLogin
            ? <Link>
                    <Icon type="inbox"/>
                </Link>
            : <Icon type="setting" onClick={this.login.bind(this)}/>
        return (

            <div id="mobileheader">
                <header>
                    <img src={logoImg} alt="logo"/>
                    <span>ReactNews</span>
                    {userShow}
                </header>
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
            </div>
        )
    }
}
export default MobileHeader = Form.create()(MobileHeader)