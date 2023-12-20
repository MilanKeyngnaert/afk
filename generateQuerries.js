const fs = require('fs');
const path = require('path');



//for heroes
/*
const jsonFilePath = './heroes.json';
fs.readFile(jsonFilePath, 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading JSON file:', readErr);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    jsonData.forEach((obj, index) => {
      const query = `INSERT INTO heroes (hero_id, name, image, tier, faction, type, hero_class, rating, ascension_level, amount_of_stars, signature_item_level, amount_of_furniture, engraving_investment)
        VALUES (
            ${obj.id},
            '${obj.name}',
            '${obj.image}',
            '${obj.tier}',
            '${obj.faction}',
            '${obj.type}',
            '${obj.class}',
            '${obj.rating}',
            '${obj.ascension_level}',
            ${obj.amount_of_stars},
            ${obj.signature_item_level},
            ${obj.amount_of_furniture},
            '[${obj.engraving}]'
        );`
  
          console.log(query);
          console.log();
    });

  } catch (jsonParseError) {
    console.error('Error parsing JSON:', jsonParseError);
  }
});
*/

//for pets

const jsonFilePath = './pets.json';
fs.readFile(jsonFilePath, 'utf8', (readErr, data) => {
  if (readErr) {
    console.error('Error reading JSON file:', readErr);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    jsonData.forEach((obj, index) => {
      const query = `INSERT INTO pets (pet_id, name, image, role, rating)
        VALUES (
            ${obj.id},
            '${obj.name}',
            '${obj.image}',
            '${obj.role}',
            '${obj.rating}'
        );`
  
          console.log(query);
          console.log();
    });

  } catch (jsonParseError) {
    console.error('Error parsing JSON:', jsonParseError);
  }
});
