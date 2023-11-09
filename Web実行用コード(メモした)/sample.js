import React from 'react'
import toast, { Toaster } from 'react-hot-toast'




// const notify1 = () => toast(<b>いいね👍を押しました！</b>,
//                                 {
//                                     duration:1000,
//                                     align: 'top',
//                                     position: "top-center",
//                                     style: {
//                                         borderRadius: '10px',
//                                         backgroundColor: 'rgba(250,140,0,0.8)',
//                                         color: '#fff',
//                                         position: "buttom-center",
//                                     },
//                                 }
//                                     )

//  const notify2 = () => toast(<b>へえ～ 😲を押しました！</b>,
//                                 {
//                                     duration:1000,
//                                     align: 'buttom',
//                                     style: {
//                                         borderRadius: '10px',
//                                         backgroundColor: 'rgba(250,140,0,0.8)',
//                                         color: '#fff',
//                                         align: 'buttom',
//                                     },
//                                 }
//                                     )

// const notify3 = () => toast(<b>（笑） 🤣を押しました！</b>,
//                                 {
//                                     duration:1000,
//                                     //marginTop: 100,
//                                     Top: 200,

//                                     style: {
//                                         borderRadius: '10px',
//                                         backgroundColor: 'rgba(250,140,0,0.8)',
//                                         color: '#fff',
//                                         //margin: "0 auto",
//                                         //margin: 100,
//                                         marginLeft:1000,
//                                         //minHeight: '200px',
//                                         //marginTop: 100,
//                                     },
//                                 }
//                                     )

// const notify4 = () => toast(<b>お願い 🙏を押しました！</b>,
//                                 {
//                                     duration:1000,
//                                     style: {
//                                         borderRadius: '10px',
//                                         backgroundColor: 'rgba(250,140,0,0.8)',
//                                         color: '#fff',
//                                         margin: "0 auto",
//                                         marginTop:630,
//                                     },
//                                 }
//                                     )

// const notify5 = () => toast(<b>質問！ ✋を押しました！</b>,
//                                 {
//                                     duration:1000,
//                                     style: {
//                                         borderRadius: '10px',
//                                         backgroundColor: 'rgba(250,140,0,0.8)',
//                                         color: '#fff',
//                                     },
//                                 }
//                                     )
// const notify6 = () => toast(<b>拍手！ 👏を押しました！</b>,
//                                 {
//                                     duration:1000,
//                                     color: '#fff',
//                                     style: {
//                                         borderRadius: '10px',
//                                         backgroundColor: 'rgba(250,140,0,0.8)',
//                                         color: '#fff',

//                                     },
//                                 }
//                                     )
// トースト機能をつけるため、以下のコードが必要
const Sample = () => {
  return (
    <div>
      {/* { <div class="box">
        <button class="Button-style2"  name="good" value="0" id="button1" onClick={notify1}><b>いいね 👍</b></button><br></br>
        <button class="Button-style2"  name="i_see" value="0" id="button2" onClick={notify2} ><b>へえ～ 😲</b></button><br></br>
        <button class="Button-style2"  name="laugh" value="0" id="button3" onClick={notify3} ><b>（笑） 🤣</b></button><br></br>
        <button class="Button-style2"  name="please" value="0" id="button4" onClick={notify4} ><b>お願い 🙏</b></button><br></br>
        <button class="Button-style2"  name="question" value="0" id="button5" onClick={notify5}><b>質問！ ✋</b></button><br></br>
        <button class="Button-style2"  name="clap" value="0" id="button6" onClick={notify6} ><b>拍手！ 👏</b></button><br></br>

        <button class="Button-style2"  name="good" value="0" id="button7"onClick = {() => {notify1(); apitest_post()}}>TEST</button>
        </div> } */}

      <Toaster />
    </div>
  )
}

export default Sample
