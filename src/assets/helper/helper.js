const fs = require('fs');

const readJSON = file => JSON.parse(fs.readFileSync(file));
// function overwrites any perviously existing data so data must be read first and then any updates can be pushed
const writeJSON = (file, data) => {
   fs.writeFileSync(file, JSON.stringify(data, null, 2), { encoding: 'utf8', flag: 'w' });
   console.log('function writeJSON(): write completed successfully');
}
const sortByID = file => readJSON(file).sort((a, b) => a.id - b.id);
const findNextID = file => {
   let data = sortByID(file);
   for (let i = 0; i < data.length; i++) if (data[i].id !== i) return i;
   return data.length;
}
// const partner = (
//    f_name,
//    l_name,
//    description,
//    balance,
//    resources,
//    email,
//    phone1,
//    phone2,
//    website,
//    social_media
// ) => {}

function makePartner(name, description, money, resources, email, phone1, phone2, website, socialMedia) {
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

module.exports = { getJSON, uploadJSON, sortByID, findNextID, makePartner, errorPopup };