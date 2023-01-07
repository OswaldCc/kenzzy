
function saveChat(chatDiv){
let chatDivs= JSON.parse(localStorage.getItem('chatsDiv')) || [];
chatDivs.push(chatDiv)
localStorage.setItem('chatsDiv',JSON.stringify(chatDivs));

 }

function getChats(){
  let chatDivs = JSON.parse(localStorage.getItem('chatsDiv')) || [];
  return chatDivs;
}

  
 function appendChats(){
  const chats=getChats();
  const parentDiv=document.getElementById('conv');
  chats.forEach(chat=>{
    const div=document.createElement('div');
    div.innerHTML=chat;
    parentDiv.appendChild(div);
  })
 }

 function saveChatHistory(chat){
  let chats = JSON.parse(localStorage.getItem('chats')) || [];
  chats.push(chat)
  localStorage.setItem('chats',JSON.stringify(chats));
   }

   function getChatHistory(){
    let chats = JSON.parse(localStorage.getItem('chats')) || [];
    return chats;
  }
  
function addChatHistoryToForm(){
    const chats=getChatHistory();
    const parentDiv=document.getElementById('saved_chats');
    chats.forEach(chat=>{
      parentDiv.value=chat;
    })
}