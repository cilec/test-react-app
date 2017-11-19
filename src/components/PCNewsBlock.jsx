import React from 'react';
import { Card } from 'antd';
import { Route, Router } from 'react-router'
import { Link, BrowserRouter } from 'react-router-dom';

export default class PCNewsBlock extends React.Component {
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
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=${this.props.type}&count=${this.props.count}`).then(response => {
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
                console.log(arr)
                return <li key={index}>
                    {newsItem.title}
                </li>;
            })
            :
            "没有加载到任何新闻";
        console.log(this.state.news)
        console.log('newsList', newsList)
        return (
            <div className="topNewsList">
                <Card>
                    <ul>
                        {newsList}
                    </ul >
                </Card>
            </div>
        )
    }
}