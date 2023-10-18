//Has not been tested
//line 20, 22 not complete
const {fs, getJSON, uploadJSON, sortByID, findNextID, makePartnerAccount, makeSchoolAccount, errorPopup} = require('./helper/helper');

function toRun(){
  const username = document.querySelector(".username").value;
  const password1 = document.querySelector(".password1").value;
  const password2 = document.querySelector(".password2").value;
  const email = document.querySelector(".email").value;
  if(searchAttribute('username').includes(username)){
    console.log("Username already exists"); //errorPopup
    return false;
  } else if(searchAttribute('email').includes(email)){
    console.log("Email already exists"); //errorPopup
    return false;
  } 
  else if(password1 != password2){
    console.log("Passwords do not match"); //errorPopup
    return false;
  } //else if- password restrictions
  let partner = false, school = false;
  //include an option to select partner or school account, it should just toggle partner or school, it should also make sure to check the html that only one can be selected at a time, radio buttons or sth
  if(document.querySelector(".partner").checked)
    partner = true;
  else if(document.querySelector(".school").checked)
    school = true;
  else {
    console.log("No account type selected"); //errorPopup
    return false;
  }
  if(partner)
    makePartnerAccount(username, password, email);
  else if(school)
    makeSchoolAccount(username, password, email);
  location.href = 'login.html';
}
