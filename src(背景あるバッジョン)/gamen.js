import Axios from 'axios';
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

import Pageone from './pageone';
import Pagetwo from './pagetwo';
import pagethree from './pagethree';
import Scroll from './scroll';


<script src="https://riversun.github.io/jsframe/jsframe.js"></script>

const API_URL = 'https://httpbin.org/post';



const notify1 = () => toast(<b>いいね👍を押しました！</b>,
                                {
                                    duration:1000,
                                    align: 'top',
                                    position: "top-center",
                                    style: {
                                      borderRadius: '10px',
                                      backgroundColor: 'rgba(250,140,0,0.8)',
                                      color: '#fff',
                                      margin: "0 auto",
                                      marginTop:630,
                                    },
                                }
                                    )

 const notify2 = () => toast(<b>へえ～ 😲を押しました！</b>,
                                {
                                    duration:1000,
                                    align: 'buttom',
                                    style: {
                                      borderRadius: '10px',
                                      backgroundColor: 'rgba(250,140,0,0.8)',
                                      color: '#fff',
                                      margin: "0 auto",
                                      marginTop:630,
                                        align: 'buttom',
                                    },
                                }
                                    )

const notify3 = () => toast(<b>（笑） 🤣を押しました！</b>,
                                {
                                    duration:1000,
                                    //marginTop: 100,
                                    Top: 200,

                                    style: {
                                      borderRadius: '10px',
                                      backgroundColor: 'rgba(250,140,0,0.8)',
                                      color: '#fff',
                                      margin: "0 auto",
                                      marginTop:630,
                                        //marginLeft:1000,
                                        //minHeight: '200px',
                                        //marginTop: 100,
                                    },
                                }
                                    )

const notify4 = () => toast(<b>お願い 🙏を押しました！</b>,
                                {
                                    duration:1000,
                                    style: {
                                        borderRadius: '10px',
                                        backgroundColor: 'rgba(250,140,0,0.8)',
                                        color: '#fff',
                                        margin: "0 auto",
                                        marginTop:630,
                                    },
                                }
                                    )

const notify5 = () => toast(<b>質問！ ✋を押しました！</b>,
                                {
                                    duration:1000,
                                    style: {
                                      borderRadius: '10px',
                                      backgroundColor: 'rgba(250,140,0,0.8)',
                                      color: '#fff',
                                      margin: "0 auto",
                                      marginTop:630,
                                    },
                                }
                                    )
const notify6 = () => toast(<b>拍手！ 👏を押しました！</b>,
                                {
                                    duration:1000,
                                    color: '#fff',
                                    style: {
                                      borderRadius: '10px',
                                      backgroundColor: 'rgba(250,140,0,0.8)',
                                      color: '#fff',
                                      margin: "0 auto",
                                      marginTop:630,

                                    },
                                }
                                    )



  export default class Gamen extends Component {
    // コンストラクタで初期値を設定
     constructor(props) {
       super(props);
       this.state = {
  //   //     button1_times:'0',
  //   //     button2_times:'0',
  //   //     button3_times:'0',
  //   //     button4_times:'0',
  //   //     button5_times:'0',
  //   //     button6_times:'0',
       };
     }


  // POSTリクエスト
     handleClickPostApi(){
      for (var i = 0;  i < 100;  i++) {
      const data = {
        "reaction_id":1
        };
        
          Axios
          
              .post(API_URL, data)
              .then(res => {
                    //alert("「" + data.reaction_id + "」参照完了");
                    console.log("response");
              })
              .catch(error => {
                    //alert("「" + data.reaction_id + "」参照失敗");
                     console.log("error");
              });
        //    }
        　  }
      }

    handleClickPostApi2() {
      const data = {
        reaction_id:2
        };
  Axios
      .post(API_URL, data)
      .then(res => {
            alert("「" + data.reaction_id + "」参照完了");
            console.log("response");
      })
      .catch(error => {
             alert("「" + data.reaction_id + "」参照失敗");
             console.log("error");
      });
  }


    handleClickPostApi3() {
      const data = {
        reaction_id:3
        };
  Axios
        .post(API_URL, data)
        .then(res => {
              alert("「" + data.reaction_id + "」参照完了");
              console.log("response");
        })
        .catch(error => {
               alert("「" + data.reaction_id + "」参照失敗");
               console.log("error");
        });
    }


    handleClickPostApi4() {
    const data = {
      reaction_id:4
      };
  Axios
      .post(API_URL, data)
      .then(res => {
            alert("「" + data.reaction_id + "」参照完了");
            console.log("response");
      })
      .catch(error => {
             alert("「" + data.reaction_id + "」参照失敗");
             console.log("error");
      });
  }


    handleClickPostApi5() {
    const data = {
      reaction_id:5
      };
  Axios
      .post(API_URL, data)
      .then(res => {
            alert("「" + data.reaction_id + "」参照完了");
            console.log("response");
      })
      .catch(error => {
             alert("「" + data.reaction_id + "」参照失敗");
             console.log("error");
      });
  }

    handleClickPostApi6() {
    const data = {
      reaction_id:6
      };
  Axios
      .post(API_URL, data)
      .then(res => {
            alert("「" + data.reaction_id + "」参照完了");
            console.log("response");
      })
      .catch(error => {
             alert("「" + data.reaction_id + "」参照失敗");
             console.log("error");
      });
  }





  // GETリクエスト
  //
  // apitest_post111(){
  //   Axios
  //   .get(API_URL)
  //   .then((results) => {
  //     const data = results.data; // APIレスポンスを取得する
  //     this.setState({
  //
  //
  //     });
  //   },
  //   )
  //   .catch((error) => {
  //     if (error.response) {
  //       // 200系以外の時にエラーが発生する
  //       console.log(error.response.data);
  //       console.log(error.response.status);
  //       console.log(error.response.headers);
  //     } else if (error.request) {
  //       console.log(error.request);
  //     } else {
  //       // 上記以外のエラーが発生した場合
  //       console.log('Error', error.message);
  //     }
  //   });







Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/page_a">PageA</Link>
    </div>
  );
}






  render() {

    return (
      <div className="app">
      {/* <p><b>会議盛り上げアプリ</b></p> */}


        {/* <Pagetwo /> */}
         <Sample />
          {/* <Scroll />  */}


        <body>
        <div class="box">

        <button class="Button-style2" type="submit" name="reaction_name1" onClick = {() => {notify1(); this.handleClickPostApi()}}><b>いいね 👍</b></button><br></br>
        <button class="Button-style2" type="submit" name="reaction_name2" onClick = {() => {notify2(); this.handleClickPostApi2()}}><b>へえ～ 😲</b></button><br></br>
        <button class="Button-style2" type="submit" name="reaction_name3" onClick = {() => {notify3(); this.handleClickPostApi3()}}><b>（笑） 🤣</b></button><br></br>
        <button class="Button-style2" type="submit" name="reaction_name4" onClick = {() => {notify4(); this.handleClickPostApi4()}}><b>お願い 🙏</b></button><br></br>
        <button class="Button-style2" type="submit" name="reaction_name5" onClick = {() => {notify5(); this.handleClickPostApi5()}}><b>質問！ ✋</b></button><br></br>
        <button class="Button-style2" type="submit" name="reaction_name6" onClick = {() => {notify6(); this.handleClickPostApi6()}}><b>拍手！ 👏</b></button><br></br>
        
        {/* <div class="back"><button class="Back_button" type="submit">
            <Link to='/qqq'class="aaa"><b>アニメーション</b></Link>
        </button></div> */}

        <div class="back"><button class="Back_button" type="submit">
            <Link to='/'class="aaa"><b>戻る</b></Link>
        </button></div>
        {/* <button id="sendBullet" onClick={this.returnWord}>弾幕出発</button>

        <button class="Button-style2" type="submit" name="reaction_name6" onClick = {() => {notify6(); this.handleClickPostApi6()}}><b>弾幕は別画面できますか？</b></button><br></br> */}

        

        </div>
        {/* <div class="back"><button class="Back_button" type="submit">
            <Link to='/menu'><b>戻る</b></Link>
        </button></div> */}
        </body>

        </div>

    );
  }


}
