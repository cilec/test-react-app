import React, {Component} from 'react';
import {
    Row,
    Col,
    Tabs,
    Carousel,
    Card,
    Layout
} from 'antd';
import PCNewsBlock from './PCNewsBlock';
import PCImgNewsBlock from './PCImgNewsBlock'
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
            <div className="container">

                <Row gutter={16}>
                    <Col span={2}></Col>
                    {/* <Col span={16} className="container"> */}
                    {/* <div className="leftContainer">
                            <div className="carousel"> */}
                    <Col span={6} className="carousel">
                        <Carousel {...settings}>
                            <div><img src={require('../img/carousel/1.jpeg')}/></div>
                            <div><img src={require('../img/carousel/2.jpeg')}/></div>
                            <div><img src={require('../img/carousel/3.jpeg')}/></div>
                            <div><img src={require('../img/carousel/4.jpeg')}/></div>
                        </Carousel>
                        <PCImgNewsBlock
                            count={6}
                            type="guonei"
                            width="100%"
                            cartTitle="国内头条"
                            imageWidth="100%"/>
                    </Col>
                    {/* </div>
                        </div> */}
                    <Col span={7}>
                        <Tabs className="tabs_news">
                            <TabPane tab="头条" key="1">
                                <PCNewsBlock type="top" count="22" width="100%" bordered="false"/>
                            </TabPane>
                            <TabPane tab="国际" key="2">
                                <PCNewsBlock type="guoji" count="22" width="100%" bordered="false"/>
                            </TabPane>
                        </Tabs>

                    </Col>
                    {/* </Col> */}
                    <Col span={9}></Col>
                </Row>
                <Row style={{
                    padding: "10px 0"
                }}>
                    <Col span={17} offset={2}>
                        <PCImgNewsBlock
                            count={8}
                            type="yule"
                            width="100%"
                            cartTitle="娱乐头条"
                            imageWidth="100%"/>
                    </Col>
                </Row>
                <Row style={{
                    padding: "10px 0"
                }}>
                    <Col span={17} offset={2}>
                        <PCImgNewsBlock
                            count={8}
                            type="keji"
                            width="100%"
                            cartTitle="科技头条"
                            imageWidth="100%"/>
                    </Col>
                </Row>
            </div>
        )
    }
}