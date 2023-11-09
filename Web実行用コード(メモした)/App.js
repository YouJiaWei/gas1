import axios from 'axios';
import React, { Component } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
//import { Link } from "react-router-dom";
import {BrowserRouter, Route, Link} from 'react-router-dom'
//import Toast from 'jsframe.js';
//import Toast from "jsframe.min";
import Toast from 'react-toast-component'
import toast, { Toaster } from 'react-hot-toast'
import Sample from './sample';
import './App.css';
import Gamen from './gamen';

import Pageone from './pageone';
import Pagetwo from './pagetwo';


<script src="https://riversun.github.io/jsframe/jsframe.js"></script>

const API_URL = 'https://holidays-jp.github.io/api/v1/date.json';




export default class App extends Component {
//コンポーネントの紹介　↓

  render() {

    return (
      <div className="app">
      {/* <p><b>会議盛り上げアプリ</b></p> */}

      {/* 画面遷移ためのコード */}
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Pageone} />
          <Route path='/reaction' component={Gamen} />
          <Route path='/set' component={Pagetwo} />
        </div>
      </BrowserRouter>




        {/* <Pagetwo /> */}
        {/* <Sample /> */}
        {/* <Gamen /> */}






        <body>


        </body>



        </div>

    );
  }


}
