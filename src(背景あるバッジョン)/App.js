import axios from 'axios';
import logo from './logo.svg';
import React, { useState, useEffect, useRef, useCallback,Component } from 'react';
import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
//import { Link } from "react-router-dom";
import {BrowserRouter, Route, Link} from 'react-router-dom'
//import Toast from 'jsframe.js';
//import Toast from "jsframe.min";
import Toast from 'react-toast-component'
import toast, { Toaster } from 'react-hot-toast'
import Sample from './sample';
import './App.css';

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import Gamen from './gamen';
import Scroll from './scroll';
import Pageone from './pageone';
import Pagetwo from './pagetwo';
import Pagethree from './pagethree';
import Syuukei from './syuukei';


<script src="https://riversun.github.io/jsframe/jsframe.js"></script>

const API_URL = 'https://holidays-jp.github.io/api/v1/date.json';



var styles = {
  color:'violet',
  backgroundImage: 'url(' + require('./logo.svg') + ')' 
  };

  

  


export default class App extends Component {
  // 初期値を設定









  render() {

    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b><code>会議盛り上げアプリ</code></b>
          
          
        </p>
        <a
          className="App-link"
          // href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <BrowserRouter>
        <div>
              <Route path='/reaction' component={Gamen} />
          <Route exact path='/' component={Pageone} />
          <Route path='/set' component={Pagetwo} />
          <Route path='/qqq' component={Scroll} />
          <Route path='/result' component={Pagethree} />
          <Route path='/syuukei' component={Syuukei} />
        </div>
      </BrowserRouter>
        </a>
      </header>
      {/* <p><b>会議盛り上げアプリ</b></p> */}
      {/* <div style={styles}>test</div> */}
      
      



        {/* <Pagetwo /> */}
        {/* <Sample /> */}
        {/* <Gamen /> */}






        <body>


        </body>


        </div>

    );
  }


}
