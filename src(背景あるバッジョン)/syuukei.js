import React from "react";
import {Link } from 'react-router-dom'
import {BrowserRouter, Route} from 'react-router-dom'
import Pageone from './pageone';
import Pagetwo from './pagetwo';
import App from './App'
import Axios from 'axios';

export default class Syuukei extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      count1:'0',
      count2:'0',
      count3:'0',
      count4:'0',
      count5:'0',
      count6:'0',
      
      // 今回test_paramは使用しないが、パラメータ設定方法の一つとして記載する
      api_data: [],
      persons1: [],
     //  test_param: ''
    };
  }

//   handleTestCallApi666() {
//    Axios
//    // パラメータを指定する場合は以下のように設定
//    // { params: { test_param: this.state.test_param }}
//    .get(API_URL) 
//    .then((results) => {
//      const data = results.data; // APIレスポンスを取得する
//      this.setState({
//        api_data: data,
//      });
//    },
//    )
//    .catch((error) => {
//      if (error.response) {
//        // 200系以外の時にエラーが発生する
//        console.log(error.response.data);
//        console.log(error.response.status);
//        console.log(error.response.headers);
//      } else if (error.request) {
//        console.log(error.request);
//      } else {
//        // 上記以外のエラーが発生した場合
//        console.log('Error', error.message);
//      }
//    });
//  }

 componentDidMount() {
    Axios.get(`https://jsonplaceholder.typicode.com/users`)
  //  Axios.get(`http://localhost:8080/reactions`)
     .then(res => {
       const persons1 = res.data;
       this.setState({ persons1 });
     })
    }





    render(){
        return (
        <div>
<ul>
        
      </ul><br></br>
       <ul>
        
      </ul>
　　　　　　　　　<body>
 <div class="app">
    <p><b>会議盛り上げアプリ</b></p>
    </div>
    <div class="table">
    <table border="1">

    <tr>
    <th><p>いいね👍</p>{ this.state.persons1.map(person1 => <li>{person1.name}</li>)}</th>
    <th><p>へえ～😲</p>{ this.state.persons1.map(person1 => <li>{person1.id}</li>)}</th>
    </tr>
    <tr>
    <th><p>（笑）🤣</p><i>8</i></th>
    <th><p>質問！✋</p><i>5</i></th>
    </tr>
    <tr>
    <th><p>お願い🙏</p><i>2</i></th>
    <th><p>拍手！👏</p><i>0</i></th>
    </tr>

    </table>
  </div>
  <button class="back_button" name="back" type="submit">
                <b><Link to='/result' class="no-underline">戻る</Link></b>
            </button>

  </body>　　

          </div>

          );
        }
}
