import React, { Component } from 'react'
import { NavBar, Icon, Tabs, WhiteSpace, WingBlank,} from 'antd-mobile';



export default class AppSider extends Component {
    render() {
        const tabs = [
            { title: '推荐' },
            { title: '冬季' },
            { title: '宜家' },
            { title: '小清新' },
            { title: '小户型' },
            { title: '个性色彩' },
            { title: '彪悍' },
            { title: '暖风' },
            { title: '欧式' },
          ];
        return (
            <div>
                <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                  ]}
                >灵感</NavBar>
            </div>
            <div>
                <WhiteSpace />
            <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}>
            {this.renderContent}
            </Tabs>
            <WhiteSpace />
            </div>
            <WingBlank>
                <div>
                <img src={require(`../img/images/灵感_03.jpg`)} style={{float: 'left',width: '45%',marginleft: '10px',height: '200px'}}></img>
                <img src={require(`../img/images/灵感_03.jpg`)} style={{float: 'right',width: '45%',marginleft: '10px',height: '200px'}}></img>
                </div>
                <div>
                <img src={require(`../img/images/灵感_03.jpg`)} style={{float: 'left',width: '45%',marginleft: '10px',height: '200px'}}></img>
                <img src={require(`../img/images/灵感_03.jpg`)} style={{float: 'right',width: '45%',marginleft: '10px',height: '200px'}}></img>
                </div>
                <div>
                <img src={require(`../img/images/灵感_03.jpg`)} style={{float: 'left',width: '45%',marginleft: '10px',height: '200px'}}></img>
                <img src={require(`../img/images/灵感_03.jpg`)} style={{float: 'right',width: '45%',marginleft: '10px',height: '200px'}}></img>
                </div>
            </WingBlank>


            </div>
        )
    }
}
