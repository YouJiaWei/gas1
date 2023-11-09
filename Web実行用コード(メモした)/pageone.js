import React from "react";
import {Link } from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Pageone from './pageone';
import Pagetwo from './pagetwo';
import App from './App'

// メニュー画面の設計
export default class pageone extends React.Component  {
    render(){
        return (
        <div>

　　　　　　　　　<body>
    <div class="top">
 　　　<p><b>メニュー画面</b></p>
    </div>
    {/* 画面遷移のリングをリアクションボタンに入れる */}
            <div class="box">
             <button class="Button-style2">
                <Link to='/reaction'class="no-underline"><b>リアクション</b></Link>

            </button>
            <br></br>
            {/* 画面遷移のリングを設定ボタンに入れる */}
            <button class="Button-style2">
                <Link to='/set'class="no-underline"><b>設定画面</b></Link>
                </button>
      </div>

  </body>　　
          </div>

          );
        }
}
