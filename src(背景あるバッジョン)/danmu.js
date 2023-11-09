import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Link } from 'react-router-dom'
  
   class Component2 extends React.Component {
    constructor(props) {
        super(props);
const state = {
    //存放弹幕
        bulletChatList:[{text:'HAHAHAH'}, {text:'HAHAHAH'}, {text:'HAHAHAH'}, {text:'HAHAHAH'}, {text:'HAHAHAH'}, {text:'HAHAHAH'}, {text:'HAHAHAH'}, {text:'HAHAHAH'}, {text:'HAHAHAH'}, {text:'HAHAHAH'}],
     },
        //存放新发的弹幕
        sendBulletChatList:[]
    }
     
     
    componentDidMount() {
        document.title = "react弹幕"
         setTimeout(() => {
            let data = this.state.bulletChatList
            for(let i = 0;i < data.length; i++){
                let num = Math.floor(Math.random() * 10)    
                //每隔3s出现一条弹幕
                data[i].transitionDelay = 3 * i + 's'
                data[i].left = '-200'
                //弹幕的高度随机
                data[i].top = num * 50
              }
              this.setState({bulletChatList: data})
          },100)
    }
    //发送弹幕
    returnWord(){
        let arr = this.state.sendBulletChatList
        let num = Math.floor(Math.random() * 10)
        let data = {　　　　　
    　　　　　　text:'老铁666',
            transitionDelay: '0s',
            top: num * 50,
            left: '110vw',
        }
        arr.push(data)
        this.setState({sendBulletChatList: arr})
        setTimeout(() => {
          let info = this.state.sendBulletChatList
          info[ info.length - 1 ].left = '-200'
          this.setState({sendBulletChatList: info})
        },30)
    }
     
    //渲染弹幕
    render() {
        return (
    　　　　<div className='bullet-chat'>
               { this.state.bulletChatList.map((item, index) => {
                   return(
                    <div className='' style={{top:`${item.top}rem`,left:`${item.left}px`,'transition-delay':`${item.transitionDelay}`}}>
                        {item.text}
                    </div>
                    )
                })}
                { this.state.sendBulletChatList.map((item, index) => {
                    return(
                    <div className='' style={{top:`${item.top}rem`,left:`${item.left}px`,'transition-delay':`${item.transitionDelay}`}}>
                        {item.text}
                    </div>
                    )
                })}
        　　</div>　　
    )}
}
    
export default Component2;
