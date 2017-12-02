import React from 'react';
import {Card} from 'antd';
import {Route, Router} from 'react-router'
import {Link} from 'react-router-dom';
import PCNewsDetails from './PCNewsDetails'
export default class PCNewsBlock extends React.Component {
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
        const {news} = this.state;
        const newsList = news.length
            ? news.map((newsItem, index, arr) => {
                // console.log(arr)
                return <li key={index}>
                    <Link to={`details/${newsItem.uniquekey}`}  replace>
                    {/* <Link to={(location)=>{
                        console.log(location);
                        return { ...location, query: { uniquekey: newsItem.uniquekey } }
                    }}> */}
                        {newsItem.title}</Link>
                </li>;
            })
            : "没有加载到任何新闻";
        // console.log(this.state.news) console.log('newsList', newsList)
        console.log(this.props.match)
        return (
            <div className="topNewsList">
                <Card >
                    <ul>
                        {newsList}
                    </ul >
                </Card>
            </div>
        )
    }
}