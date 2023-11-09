import React from "react";
import {Link } from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Pageone from './pageone';
import Pagetwo from './pagetwo';
import App from './App'

export default class pageone extends React.Component  {
    render(){
        return (
        <div>

　　　　　　　　　<body>
    <div class="top">
        
 {/* 　　　<p><b><code>メニュー画面</code></b></p> */}
    </div>
            <div class="box">
            <button class="Button-style2" text-color="#fff">
                <Link to='/reaction'class="aaa"><b>リアクション</b></Link>

            </button><br></br>
            <button class="Button-style2" text-color="#fff">
                <Link to='/result'class="aaa"><b>リアクション結果</b></Link>
            </button><br></br>
            <button class="Button-style2">
                <Link to='/set'class="aaa"><b>設定画面</b></Link>
                </button>
      </div>

  </body>　　
          </div>

          );
        }
}
