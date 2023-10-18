const { getJSON } = require('./helper/helper');
const path = require('path');
function login() {
   const username = document.querySelector('.username').value;
   const password = document.querySelector('.password').value;
   if (username == '') {
      console.log('username is blank');
      return;
   }
   else if (password == '') {
      console.log('password is blank');
      return;
   }
   //   let accounts = getJSON('accounts.json');
   let accounts = getJSON(path.join(__dirname, '../database/accounts.json'));
   for (i of accounts)
      if (i.username == username && i.password == password) {
         localStorage.setItem("id", JSON.stringify(i.id)); //sets the user object to localStorage (test this)
         // location.href = '';
         console.log(localStorage.getItem('object'));
         return;
      }
   console.log('Incorrect username or password');
   return;
}
