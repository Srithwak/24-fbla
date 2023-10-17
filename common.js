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

function makeAccount(name, description, money, resources, email, phone1, phone2, website, socialMedia){
  let partner = {
    id: findNextID("partners.json"),
    name: name,
    description: description,
    money: money,
    resources: resources,
    email: email,
    phone1: phone1,
    phone2: phone2,
    website: website,
    socialMedia: socialMedia
  }
  uploadJSON("partners.json", partner);
  return partner;
}

function errorPopup() { //error popup function
  
}

module.exports = {
  fs, getJSON, uploadJSON, sortByID, findNextID, makeAccount, errorPopup
};

