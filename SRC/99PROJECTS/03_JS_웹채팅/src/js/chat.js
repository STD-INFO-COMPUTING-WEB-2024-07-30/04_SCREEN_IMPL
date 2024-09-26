"use strict"
const socket = io();

const nickname = document.querySelector('#nickname');
const chatList = document.querySelector('.chatting-list');
const chatInput = document.querySelector('.chatting-input');
const sendButton = document.querySelector('.send-button');

sendButton.addEventListener('click',()=>{
    const param = {
        name : nickname.value,
        msg :chatInput.value
    }
    console.log(param);
    socket.emit("All",param)   //서버로 전달
});



//서버에서 보낸 내용(서버 -> 클라이언트들)
socket.on('All',(data)=>{
    console.log("received..",data)
    const li = document.createElement('li');
    li.innerText = `${data}`;
    console.log(data);
    chatList.appendChild(li);
})
 