import React from 'react';
import { Card } from 'antd';
import { Route, Router } from 'react-router'
import { Link, BrowserRouter } from 'react-router-dom'
export default class PCNewsBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            news: ''
        }
    }
    componentWillMount() {
        let myFetchOptions = {
            method: 'GET',
            mode: 'no-cors'
        };
        fetch(`http://v.juhe.cn/toutiao/index?type=${this.props.type}&key=340cbb3ef59e3625cd7c60d930b52104`, myFetchOptions, (error,meta,body) => {
            console.log('body')
            console.log(body.toString())
        }).then()
    }
    render() {
        const { news } = this.state;
        const newsList = news.length
            ? news.map((newsItem, index) => {
                <li key={
                    index
                } > <Link to={`details/${newsItem.uniquekey}`} target="_blank">
                        {newsItem.title}
                    </Link> </li>
            })
            :
            "没有加载到任何新闻"
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