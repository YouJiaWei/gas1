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


<script src="https://riversun.github.io/jsframe/jsframe.js"></script>

const API_URL = 'http://localhost:8080/reactions';


/*トーストの期間、位置、色とかの設定、*/

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
/*トーストの期間、位置、色とかの設定、*/
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
/*トーストの期間、位置、色とかの設定、*/
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
/*トーストの期間、位置、色とかの設定、*/
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
/*トーストの期間、位置、色とかの設定、*/
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
/*トーストの期間、位置、色とかの設定、*/                                    
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

/*いいね！ボタンを押してデータベースに届ける*/
  // POSTリクエスト
     handleClickPostApi(){
      const data = {
        "reactionId":"1"
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

　  }

/*へー！ボタンを押してデータベースに届ける*/
    handleClickPostApi2() {
      const data = {
        "reactionId":"2"
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

  }

/*(笑)！ボタンを押してデータベースに届ける*/
    handleClickPostApi3() {
      const data = {
        "reactionId":"3"
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

    }
/*お願い！ボタンを押してデータベースに届ける*/

    handleClickPostApi4() {
    const data = {
      "reactionId":"4"
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

  }
/*質問！ボタンを押してデータベースに届ける*/

    handleClickPostApi5() {
    const data = {
      "reactionId":"5"
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


  }
/*拍手！ボタンを押してデータベースに届ける*/
    handleClickPostApi6() {
    const data = {
      "reactionId":"6"
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

  }












  render() {

    return (
      <div className="app">
      <p><b>会議盛り上げアプリ</b></p>

{/* sample.jsのコードを使う */}
         <Sample />


        <body>
        <div class="box">
{/* トースト機能とpost機能をボタンにつける */}
        <button class="Button-style2" type="submit" name="reaction_name1" onClick = {() => {notify1(); this.handleClickPostApi()}}><b>いいね 👍</b></button><br></br>
        <button class="Button-style2" type="submit" name="reaction_name2" onClick = {() => {notify2(); this.handleClickPostApi2()}}><b>へえ～ 😲</b></button><br></br>
        <button class="Button-style2" type="submit" name="reaction_name3" onClick = {() => {notify3(); this.handleClickPostApi3()}}><b>（笑） 🤣</b></button><br></br>
        <button class="Button-style2" type="submit" name="reaction_name4" onClick = {() => {notify4(); this.handleClickPostApi4()}}><b>お願い 🙏</b></button><br></br>
        <button class="Button-style2" type="submit" name="reaction_name5" onClick = {() => {notify5(); this.handleClickPostApi5()}}><b>質問！ ✋</b></button><br></br>
        <button class="Button-style2" type="submit" name="reaction_name6" onClick = {() => {notify6(); this.handleClickPostApi6()}}><b>拍手！ 👏</b></button><br></br>

{/* 戻るボタン */}
        </div>
        <div class="back"><button class="Back_button" type="submit">
            <Link to='/' class="no-underline"><b>戻る</b></Link>
        </button></div>
        </body>

        </div>

    );
  }


}
