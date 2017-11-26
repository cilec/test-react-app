import React from 'react';
import { Card } from 'antd';
import { Route, Router } from 'react-router'
import { Link, BrowserRouter } from 'react-router-dom';
import { Row, Col } from 'antd/lib/grid';

export default class MobileList extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }
    componentDidMount() {
        let myFetchOptions = {
            method: 'GET',
        };
        console.log('component will mount')
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`, myFetchOptions).then(response => {
            return response.text()
        }).then(result => {
            let json = JSON.parse(result);
            this.setState({ news: json })
        })
    }
    render() {
        const { news } = this.state;
        const newsList = news.length
            ?
            news.map((newsItem, index, arr) => {
                // console.log(arr)
                return (<section key={index} className="clearfix">
                    <Link to={`details/${newsItem.uniquekey}`} className="m_article">
                        <div className="m_article_img">
                            <img src={newsItem.thumbnail_pic_s} alt={newsItem.title} />
                        </div>
                        <div className="m_article_info">
                            <div className="m_article_title">
                                <span>{newsItem.title}</span>
                            </div>
                            <div className="m_article_desc clearfix">
                                <div className="m_article_desc_l">
                                    <span className="m_article_channel">{newsItem.realtype}</span>
                                    <span className="m_article_time">{newsItem.date} </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>)
            })
            :
            "没有加载到任何新闻";
        // console.log(this.state.news)
        // console.log('newsList', newsList)
        return (
            <div >
                <Row>
                    <Col span={24}>
                        {newsList}
                    </Col>
                </Row>
            </div>
        )
    }
}