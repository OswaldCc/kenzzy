
function saveChat(chatDiv){
let chatDivs= JSON.parse(sessionStorage.getItem('chatsDiv')) || [];
chatDivs.push(chatDiv)
sessionStorage.setItem('chatsDiv',JSON.stringify(chatDivs));

 }

function getChats(){
  let chatDivs = JSON.parse(sessionStorage.getItem('chatsDiv')) || [];
  return chatDivs;
}

  
 function appendChats(){
  const chats=getChats();
  const parentDiv=document.getElementById('conv');
  chats.forEach(chat=>{
    const div=document.createElement('div');
    div.innerHTML= `${chat}`
    parentDiv.appendChild(div);
   
  })
  if (chats.length>=2){
    const imageDiv=document.getElementById('kenzzyImg')
    const messageDiv=document.getElementById('message')
    const quotesDiv=document.getElementById('quote')
    imageDiv.remove()
    messageDiv.remove()
    quotesDiv.remove()
  }
 }

 function saveChatHistory(chat){
  let chats = JSON.parse(sessionStorage.getItem('chats')) || [];
  chats.push(chat)
  sessionStorage.setItem('chats',JSON.stringify(chats));
   }

   function getChatHistory(){
    let chats = JSON.parse(sessionStorage.getItem('chats')) || [];
    return chats;
  }
  
function addChatHistoryToForm(){
    const chats=getChatHistory();
    const parentDiv=document.getElementById('saved_chats');
    chats.forEach(chat=>{
      parentDiv.value=chat;
    })
}


function displayRandomQuote() {
  // Create an array of quotes
  let quotes = [
    "Be the change you wish to see in the world. - Mahatma Gandhi",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "I have not failed. I've just found 10,000 ways that won't work. - Thomas Edison",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The power of imagination makes us infinite. - John Muir",
    "The best way to predict the future is to create it. - Abraham Lincoln",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. - Steve Jobs"
  ];

  // Generate a random number between 0 and the length of the quotes array
  let randomNumber = Math.floor(Math.random() * quotes.length);

  // Use the random number to select a quote from the array
  let randomQuote = quotes[randomNumber];

  // Display the quote
  const parentDiv=document.getElementById('quote');
  const div=document.createElement('div');
  div.className = 'quotes'
  div.innerHTML= `${randomQuote}`
  parentDiv.appendChild(div);
   

}