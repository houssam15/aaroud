const fs = require("node:fs");
const {data} = require("./data")
const transform_to_json = require('./bohor')
function extractConditions(inputString) {
    const re = /if\(S\.innerText==='([^']+)'\)/g;
    const conditions = [];
    let match;

    while ((match = re.exec(inputString)) !== null) {
        if (match[1]) {
            conditions.push(match[1]);
        }
    }
    return conditions;
}

fs.writeFile("bahr.js", "const ba7rs="+ JSON.stringify(transform_to_json(extractConditions(data))), "utf8", function (err) {
    if (err) {
      console.error("Une erreur est survenue:", err);
    } else {
      console.log("Fichier enregistré sous result.js");
    }
  });

  

console.log(transform_to_json(extractConditions(data))) 

