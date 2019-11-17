import React, { Component } from 'react'
import { NavBar ,Carousel, WingBlank} from 'antd-mobile';
import '../index.css';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                 <NavBar style = {{backgroundColor:'#3fcccb',color:'#fff'}}>
                    住吧家居
                </NavBar>
                <WingBlank style={{width:'100%',margin:'0'}}>
                    <Carousel
                    autoplay={true}
                    autoplayInterval = {3000}
                    infinite={true}
                    >
                        {['1', '2'].map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: '176px' }}
                        >
                        <img
                            src={require(`../img/images/住吧首页_02.jpg`)}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
        </Carousel>
      </WingBlank>
            <div className='home-three1'></div>
            <div className='home-three2'></div>
            <div className='home-three3'></div>
            <div className='home-hot'>
                <div className='home-hot-green'></div>
                <p>热门推荐</p>
            </div>
            <div className='home-last'>
            </div>
        </div>
        )
    }
}