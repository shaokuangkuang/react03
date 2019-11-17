import React from 'react'
import { TabBar } from 'antd-mobile';
import Home from './Home';
import Mine from './Mine';
import Ins from './Ins';
import Store from './Store';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'one',
    };
  }
  render() {
    return (
        <div style={{ 
            position: 'fixed', 
            height: '100%', 
            width: '100%', 
            top: 0 
        }}>
            <TabBar
            tintColor="#43cdcc"
            barTintColor="white"
            >
          <TabBar.Item
            icon={<div style={{width: '22px',height: '22px',}}></div>
            }
            selectedIcon={
              <div style={{width: '22px',height: '22px',}}></div>
            }
            title="首页"
            selected={this.state.selectedTab === 'one'}
            onPress={() => {
              this.setState({
                selectedTab: 'one',
              });
            }}
          >
          <Home />
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{width: '22px',height: '22px',}}></div>
            }
            selectedIcon={
              <div style={{width: '22px',height: '22px',}}></div>
            }
            title="灵感"
            selected={this.state.selectedTab === 'two'}
            onPress={() => {
              this.setState({
                selectedTab: 'two',
              });
            }}
          >
            <Ins />
          </TabBar.Item>
          <TabBar.Item
            icon={<div style={{width: '22px',height: '22px',}}></div>
          }
          selectedIcon={
            <div style={{width: '22px',height: '22px',}}></div>
          }
          title="商场"
          selected={this.state.selectedTab === 'three'}
          onPress={() => {
            this.setState({
              selectedTab: 'three',
            });
          }}
        >
            <Store />
          </TabBar.Item>
          <TabBar.Item
             icon={<div style={{width: '22px',height: '22px',}}></div>
            }
            selectedIcon={
              <div style={{width: '22px',height: '22px',}}></div>
            }
            title="我的"
            selected={this.state.selectedTab === 'four'}
            onPress={() => {
              this.setState({
                selectedTab: 'four',
              });
            }}
          >
            <Mine />
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}