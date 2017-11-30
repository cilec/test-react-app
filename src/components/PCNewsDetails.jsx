import React from 'react';
import {Row, Col} from 'antd/lib/grid';
import PCHeader from './PCHeader';
import PCFooter from './PCFooter';
export default class PCNewsDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            newsItem: ''
        }
    }
    componentDidMount() {
        let myFetchOptions = {
            method: 'GET'
        }
        // console.log(this.props.match)
        // http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=161
        // 0 28202106247
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.match.params.uniquekey}`, myFetchOptions).then(response => {
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
                    <Col span={6}></Col>
                    <Col span={2}></Col>
                </Row>
                <PCFooter></PCFooter>
            </div>
        )

    }
}