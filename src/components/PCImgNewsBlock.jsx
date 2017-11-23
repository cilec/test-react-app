import React from 'react';
import {Card} from 'antd';
import {Route, Router} from 'react-router'
import {Link, BrowserRouter} from 'react-router-dom';

export default class PCImgNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }
    componentDidMount() {
        let myFetchOptions = {
            method: 'GET'
        };
        console.log('component will mount')
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`, myFetchOptions).then(response => {
            return response.text()
        }).then(result => {
            let json = JSON.parse(result);
            this.setState({news: json})
        })
    }
    render() {
        const styleImage = {
                display: "block",
                width: this.props.imageWidth,
                height: '90px',
                maxWidth:'100%'
            },
            styleH3 = {
                width: this.props.imageWidth,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            };
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index, arr) => {
                // console.log(arr)
                return <li
                    key={index}
                    style={{
                    listStyleType: "none",
                    width:"112px"
                }}>
                    <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        <div className="custom-image">
                            <img alt="" style={styleImage} src={newsItem.thumbnail_pic_s}/>
                        </div>
                        <div className="custom-title">
                            <h5 style={styleH3}>{newsItem.title}</h5>
                            <p>{newsItem.author_name}</p>
                        </div>
                    </Link>
                </li>;
            })
            : "没有加载到任何新闻";
        // console.log(this.state.news) console.log('newsList', newsList)
        return (
            <div className="topNewsList">
                <Card
                    title={this.props.cartTitle}
                    bordered
                    style={{
                    width: this.props.width
                }}>
                    <ul className="news-img-list">
                        {newsList}
                    </ul>
                </Card>
            </div>
        )
    }
}