function saveInitialInput() {

let element=document.getElementById('you')

let initialInput=element.innerText
if(initialInput){

    localStorage.setItem("initialInput", JSON.stringify(initialInput));

  }
      
}
  function getInitialInput() {
    // Check if local storage is supported
    if (typeof(Storage) !== "undefined") {
      // Retrieve the value of initialInput from local storage
      const pElement = document.getElementById('you');
      let initialInput=JSON.parse(localStorage.getItem("initialInput"));
      pElement.innerHTML=initialInput
    } else {
      // Local storage is not supported, handle the error
      console.error("Sorry, your browser does not support local storage.");
    }
  }