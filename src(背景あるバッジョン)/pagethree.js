import React from "react";
import {Link } from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Pageone from './pageone';
import Pagetwo from './pagetwo';
import App from './App'

export default class pagethree extends React.Component  {
    render(){
        return (
        <div>

　　　　　　　　　<body>
    <div class="top">
        
 {/* 　　　<p><b><code>メニュー画面</code></b></p> */}
    </div>
            <div class="box">
            <button class="Button-style2" text-color="#fff">
                <Link to='/qqq'class="aaa"><b>弾幕リアクション画面</b></Link>

            </button><br></br>
            <button class="Button-style2" text-color="#fff">
                <Link to='/syuukei'class="aaa"><b>集計画面</b></Link>
            </button><br></br>
            <button class="back_button" name="back" type="submit">
                <b><Link to='/' class="aaa">戻る</Link></b>
            </button>
      </div>

  </body>　　
          </div>

          );
        }
}
