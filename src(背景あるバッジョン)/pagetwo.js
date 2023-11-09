import React from "react";
import { Link } from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Pageone from './pageone';
import Pagetwo from './pagetwo';
import App from './App'


const buttonAlert = () => {
  alert('設定画面は改善中です');
}

export default class pagetwo extends React.Component  {
    render(){
        return (
        <div>


<body>
    <div class="top">
      {/* <p><b>設定画面</b></p> */}
      </div>
      <div class="box">
      <button class="Button-style2" onClick={buttonAlert}><b>設定</b></button>
      <div class="back">
      <button class="back_button" name="back" type="submit">
                <b><Link to='/' class="aaa">戻る</Link></b>
            </button></div>
      </div>

  
  </body>



          </div>);
        }
}
