
function saveInputs() {
  document.getElementById('form').addEventListener('submit', function(event){
    event.preventDefault();
    let form = this;
    let data = new FormData(form);
    let counter = localStorage.getItem('counter') || 0;
    for (let [key, value] of data) {
      if (key !== 'csrfmiddlewaretoken') {
        localStorage.setItem(key + '-' + counter, JSON.stringify(value));
      }
    }
    localStorage.setItem('counter', ++counter);
    form.submit();
  });
}
function getInputs(){
  let parentDiv=document.getElementById('input')
  for(let i=0; i < localStorage.length; i++){
    let key=localStorage.key(i)
    if (key.startsWith('input')) {
      let value = JSON.parse(localStorage.getItem(key))
      let div=document.createElement('div')
      div.innerText=value
      parentDiv.appendChild(div)
    }
  }
}

function saveResponse(value) {
  let counter = localStorage.getItem('counter') || 0;
  localStorage.setItem('response-' + counter, value);
  localStorage.setItem('counter', ++counter);
}

function getResponse() {
  let parentDiv = document.getElementById('output');
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.startsWith('response')) {
        let value = localStorage.getItem(key);
        let div = document.createElement('div');
        div.innerHTML = value;
        parentDiv.appendChild(div);
      }
    } 
}
function saveChat(chat){
let counter=localStorage.getItem('counter') || 0
localStorage.setItem(counter,chat)
localStorage.setItem('counter', ++counter)
 }
 function getChats(){
  const keys=Array.from(Object.keys(localStorage)).sort((a,b)=>a-b)
  const chats=[]
  for (const key of keys){
    if (key!=='counter'){
      const chat=localStorage.getItem(key)
      chats.push(chat)
    }
  }
  return chats
 }

 function appendChats(){
  const chats=getChats()
  const parentDiv=document.getElementById('conv')
  chats.forEach(chat=>{
    const div=document.createElement('div')
    div.innerHTML=chat
    parentDiv.appendChild(div)
  })
 }