
function saveChat(chat){
let counter=localStorage.getItem('counter') || 0;
localStorage.setItem(counter,chat);
localStorage.setItem('counter', ++counter);
 }

 function getChats(){
  const keys=Array.from(Object.keys(localStorage)).sort((a,b)=>a-b);
  const chats=[];
  for (const key of keys){
    if (key!=='counter'&& key!=='second_counter'){
      const chat=localStorage.getItem(key);
      chats.push(chat);
      filteredChats=chats.filter(function(chat){
        return !chat.includes(`Person:`)
      })   
      
    }
  }
  return filteredChats
  }
  function getChatsImproved() {
    const keys = Array.from(Object.keys(localStorage).sort((a, b) => a- b));
    const chats = keys
      .filter(key => key !== 'counter' && key !== 'second_counter')
      .map(key => localStorage.getItem(key))
      .filter(chat => !chat.includes('Person:'))
      .sort((a, b) => b- a)
  
    return chats;
  }
 function appendChats(){
  const chats=getChatsImproved();
  const parentDiv=document.getElementById('conv');
  chats.forEach(chat=>{
    const div=document.createElement('div');
    div.innerHTML=chat;
    parentDiv.appendChild(div);
  })
 }

 function saveChatHistory(chats){
  let counter=localStorage.getItem('counter') || 0;
  localStorage.setItem(counter,chats);
  localStorage.setItem('second_counter', ++counter);
   }

function getChatHistory(){
    const keys=Array.from(Object.keys(localStorage)).sort((a,b)=>a-b);
    const history=[];
    for (const key of keys){
      if (key!=='counter'&& key!=='second_counter'){
        const chat=localStorage.getItem(key);
        history.push(chat);
        filteredHistory=history.filter(function(chat){
          return chat.includes(`Person:`)
        })   
        
      }
    }
    return filteredHistory
    }


function addChatHistoryToForm(){
    const chats=getChatHistory();
    const parentDiv=document.getElementById('saved_chats');
    chats.forEach(chat=>{
      parentDiv.value=chat;
    })
}