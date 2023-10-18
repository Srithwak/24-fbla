const fs = require('fs'); //json

function getJSON(file) { //gets data from JSON file in a useable format
    return JSON.parse(fs.readFileSync(file));
}

function uploadJSON(file, data) { //overwrites JSON file and uploads with data
    fs.writeFileSync(file, JSON.stringify(data, null, 2), {
        encoding: 'utf8',
        flag: 'w'
    });
    console.log("Upload complete");
}

function sortByID(jsonFile) { //sorts the json file based on id
  return getJSON(jsonFile).sort((a, b) => a.id - b.id);
}

function findNextID(jsonFile) { //finds the next available ID to use
  let jsonData = sortByID(jsonFile);
  for(let i = 0; i < jsonData.length; i++)
    if(jsonData[i].id != i)
      return i;
  return jsonData.length;
}

function makePartner(name, description, email){ //not tested
  let account = {
    id: findNextID("accounts.json"),
    username: name,
    password: null,
    description: description,
    money: 0,
    resources: [],
    email: email,
    phone: 0,
    website: "",
    socialMedia: []
  }
  uploadJSON("accounts.json", getJSON('accounts.json').push(account));
  return account;
}

function makeSchoolAccount(username, password, email) { //not tested
  let account = {
    id: findNextID("accounts.json"),
    username: username,
    password: password,
    email: email,
    phone: null,
    website: null,
    messages: [],
    socialMedia: [],
    notes: [],
    hashKey: ""
  }
  uploadJSON("accounts.json", getJSON('accounts.json').push(account));
  return account;
}

function errorPopup() { //error popup function
  
}

module.exports = {
  fs, getJSON, uploadJSON, sortByID, findNextID, makePartnerAccount, makeSchoolAccount, errorPopup
};

