import React from "react";
import MobileHeader from "./MobileHeader";
import MobileFooter from './MobileFooter';
import { Tabs } from "antd"
import '../css/mobile.css';
import MobileList from './MobileList'
const TabPane = Tabs.TabPane;
export default class MobileIndex extends React.Component {
    render() {
        return (
            <div>
                <MobileHeader />
                <Tabs>
                    <TabPane tab="头条" key="1">
                        <MobileList count={6} type="top"></MobileList>
                    </TabPane>
                    <TabPane tab="社会" key="2">
                        <MobileList count={6} type="shehui"></MobileList>
                    </TabPane>
                    <TabPane tab="国内" key="3">
                        <MobileList count={6} type="guonei"></MobileList>
                    </TabPane>
                    <TabPane tab="国际" key="4">
                        <MobileList count={6} type="guoji"></MobileList>
                    </TabPane>
                    <TabPane tab="娱乐" key="5">
                        <MobileList count={6} type="yule"></MobileList>
                    </TabPane>
                </Tabs>
                <MobileFooter />
            </div>
        )
    }
}