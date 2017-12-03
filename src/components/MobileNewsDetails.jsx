import React from 'react';
import {Row, Col} from 'antd/lib/grid';
import {BackTop} from 'antd'
import MobileHeader from './MobileHeader';
import MobileFooter from './MobileFooter';
export default class MobileNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        // console.log('接受参数', nextProps) 注意了，这里应该用nextProps而不是this.props
        if (nextProps !== undefined) {
            // let myFetchOptions = {     method: 'GET' }
            // fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&unique
            // k ey=${nextProps.match.params.uniquekey}`, myFetchOptions).then(response =>
            // {   return response.text() }).then(res => {     // console.log(res)
            // this.setState({         newsItem: JSON.parse(res)     });     document.title
            // = this.state.newsItem.title + " - React News | React 新闻平台"; })
            this.getNews(nextProps.match.params.uniquekey)
        }
    }
    componentDidMount() {
        // console.log('detail 改变') let myFetchOptions = {     method: 'GET' } //
        // console.log(this.props.match) //
        // http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=161
        // // 0 28202106247
        // fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&unique
        // k ey=${this.props.match.params.uniquekey}`, myFetchOptions).then(response =>
        // {    return response.text() }).then(res => {     // console.log(res)
        // this.setState({         newsItem: JSON.parse(res)     });     document.title
        // = this.state.newsItem.title + " - React News | React 新闻平台"; })
        this.getNews(this.props.match.params.uniquekey)
    }
    getNews(uniquekey) {
        let myFetchOptions = {
            method: 'GET'
        }
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${uniquekey}`, myFetchOptions).then(response => {
            return response.text()
        }).then(res => {
            // console.log(res)
            this.setState({
                newsItem: JSON.parse(res)
            });
            document.title = this.state.newsItem.title + " - React News | React 新闻平台";
        })
    }
    createMarkup() {
        return {__html: this.state.newsItem.pagecontent}
    }
    render() {
        return (
            <div id="mobile_detail_container">
                <MobileHeader></MobileHeader>
                <Row>
                    <Col span={24}>
                        <div dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                </Row>
                <MobileFooter></MobileFooter>
                <BackTop></BackTop>
            </div>
        )

    }
}