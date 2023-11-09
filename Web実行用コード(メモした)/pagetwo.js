import React from "react";
import { Link } from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Pageone from './pageone';
import Pagetwo from './pagetwo';
import App from './App'

/* 設計画面の設定 */
const buttonAlert = () => {
  alert('設定画面は改善中です');
}

export default class pagetwo extends React.Component  {
    render(){
        return (
        <div>


<body>
    <div class="top">
      <p><b>設定画面</b></p>
      </div>
      <div class="box">
        {/* ”設定画面は改善中です”messageを出る機能をボタンに入れる */}
      <button class="Button-style2" onClick={buttonAlert}><b>設定</b></button>
      </div>

  <div class="back">
    {/* 画面遷移のリングを戻るボタンに入れる */}
      <button class="back_button" name="back" type="submit">
                <b><Link to='/'class="no-underline">戻る</Link></b>
            </button></div>
  </body>



          </div>);
        }
}
