const {fs, getJSON, uploadJSON, sortByID, findNextID, makePartnerAccount, makeSchoolAccount, searchAttribute, getObj, errorPopup} = require('./common.js');

function onLoadRun1(){
  let account = getObj(localStorage.getItem('id'));
  document.querySelector('.username').value = account.username;
  document.querySelector('.password').value = account.password;
  document.querySelector('.email').value = account.email;
  document.querySelector('.description').value = account.description;
  document.querySelector('.website').value = account.website;
  let str = '';
  for(i of account.socialMedia)
    str.push(i + ', ')
  document.querySelector('.socialMedia').value = str;
}

function editAccount() {
  
}
