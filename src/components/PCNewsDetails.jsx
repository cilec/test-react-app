import React from 'react';
import {Row, Col} from 'antd/lib/grid';
import {BackTop} from 'antd'
import PCHeader from './PCHeader';
import PCFooter from './PCFooter';
import PCImgNewsBlock from './PCImgNewsBlock';
export default class PCNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }
    componentWillReceiveProps(nextProps) {
        // console.log('接受参数', nextProps)
        //注意了，这里应该用nextProps而不是this.props
        if (nextProps !== undefined) {
            // let myFetchOptions = {     method: 'GET' }
            // fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquek
            // ey=${nextProps.match.params.uniquekey}`, myFetchOptions).then(response => {
            //   return response.text() }).then(res => {     // console.log(res)
            // this.setState({         newsItem: JSON.parse(res)     });     document.title
            // = this.state.newsItem.title + " - React News | React 新闻平台"; })
            this.getNews(nextProps.match.params.uniquekey)
        }
    }
    componentDidMount() {
        // console.log('detail 改变')
        // let myFetchOptions = {     method: 'GET' } // console.log(this.props.match)
        // //
        // http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=161
        // // 0 28202106247
        // fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquek
        // ey=${this.props.match.params.uniquekey}`, myFetchOptions).then(response => {
        //    return response.text() }).then(res => {     // console.log(res)
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
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="pc_details_container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                    </Col>
                    <Col span={6}>
                        <PCImgNewsBlock
                            count={22}
                            type="guonei"
                            width="70%"
                            cartTitle="国内头条"
                            imageWidth="100%"/>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
                <BackTop></BackTop>
            </div>
        )

    }
}