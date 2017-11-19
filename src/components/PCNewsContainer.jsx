import React, { Component } from 'react';
import { Row, Col, Tabs, Carousel } from 'antd';
import PCNewsBlock from './PCNewsBlock';
const TabPane = Tabs.TabPane;
export default class PCNewsContainer extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            autoplay: true
        }
        return (
            <div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} className="container">
                        <div className="leftContainer">
                            <div className="carousel">
                                <Carousel {...settings}>
                                    <div><img src={require('../img/carousel/1.jpeg')} /></div>
                                    <div><img src={require('../img/carousel/2.jpeg')} /></div>
                                    <div><img src={require('../img/carousel/3.jpeg')} /></div>
                                    <div><img src={require('../img/carousel/4.jpeg')} /></div>
                                </Carousel>
                            </div>
                        </div>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条" key="1">
                                <PCNewsBlock type="top" count="22" width="100%" bordered="false" />
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock type="guoji" count="22" width="100%" bordered="false" />
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
            </div>
        )
    }
}