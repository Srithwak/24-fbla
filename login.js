//file won't work until error popup has been made
const {fs, getJSON, uploadJSON, sortByID, findNextID, makePartner, errorPopup} = require('./common.js');


function login() {
  const username = document.querySelector('.user').value;
  const password = document.querySelector('.pwd').value;
  if(username == ''){
    errorPopup('username is blank');
    return;
  }
    else if(password == ''){
    errorPopup('password is blank');
    return;
  }
  let accounts = getJSON('accounts.json');
  for(i of accounts)
    if(i.username == username && i.password == password){
      localStorage.setItem("object", JSON.stringify(i)); //sets the user object to localStorage
      location.href = '';
      return;
    }
  errorPopup('Incorrect username or password');
  return;
}
