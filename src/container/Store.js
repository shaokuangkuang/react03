import React, { Component } from 'react'
import { NavBar,  WingBlank, Carousel, Grid, SearchBar} from 'antd-mobile';
import '../index.css';

const arr =[
    "桌","床","椅","几","柜","书架","沙发","家居饰品","户外家具","全部分类"
]
const data = Array.from(new Array(10)).map((_val, i) => ({
        icon:require(`../img/images/商城_10_0${i+1}.jpg`),
        text: arr[i],
      }));


export default class AppStore extends Component {
    
    render() {
        return (
            <div>
                <div>
                <NavBar
                style={{backgroundColor:'#3fcccb',color:'white'}}
                rightContent={[
                    
                        <i class="iconfont icon-store_icon" style={{fontSize:'22px',lineHeight:'22px'}}></i>
                  ]}
                >商城</NavBar>
            </div>
            <div>
                <SearchBar
                        // value={this.state.value}
                        placeholder="输入关键字搜索"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => console.log('onCancel')}
                        onChange={this.onChange}
                        style={{zIndex:'3',backgroundColor:'#c9b3a0',opacity:'0.9'}}
                    />
            </div>
            <div>
            <WingBlank style={{marginTop:'-10%'}}>
                    <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {['1', '2','3','4'].map(val => (
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
            </div>

            <div>
                <Grid data={data} hasLine={false} columnNum={5} />
            </div>

                <div className='shop-pic'>
                    <a><div className='shop-tee'></div></a>
                    <a><div className='shop-clock'></div></a>
                    <a><span className='shop-tee-text'>Top Art Studio 欧式风格精细...</span></a>
                    <a><span className='shop-clock-text'>顺顺工艺欧式风格塑料外框黑...</span></a>
                    <p className='shop-tee-p'>¥ 39.95</p>
                    <p className='shop-clock-p'>¥ 83.99</p>
                </div>

                <div>
                    <a><div className='shop-tee'></div></a>
                    <a><div className='shop-clock'></div></a>
                    <a><span className='shop-tee-text'>Top Art Studio 欧式风格精细...</span></a>
                    <a><span className='shop-clock-text'>顺顺工艺欧式风格塑料外框黑...</span></a>
                    <p className='shop-tee-p'>¥ 39.95</p>
                    <p className='shop-clock-p'>¥ 83.99</p>
                </div>


            </div>
        )
    }
}
