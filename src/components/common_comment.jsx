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
    Button,
    Form,
    Modal
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
class CommonComment extends Component {
    constructor() {
        super();
        this.state = {
            comments: ''
        }
    }
    handleSubmit(){
        
    }
    render() {
        let {getFieldDecorator} = this.props.form;
        return (
            <div className="comment">
                <Row>
                    <Col span={24}>
                        <Form
                            onSubmit={this
                            .handleSubmit
                            .bind(this)}>
                            <FormItem label="您的评论">
                                {getFieldDecorator('remark', {
                                    rules: [
                                        {
                                            message: '请随便写点什么'
                                        }
                                    ]
                                })(<Input placeholder="请随便写点什么"/>)}
                            </FormItem>
                            <Button type="primary" htmlType="submit">提交评论</Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default CommonComment = Form.create()(CommonComment)