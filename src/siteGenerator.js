const fs = require('fs');
const ejs = require('ejs');

//let character_info = JSON.parse(fs.readFileSync('../data/potter.json', 'utf8'));
//let index_template = fs.readFileSync('views/index.ejs', 'utf8');
//let character_template = fs.readFileSync('views/character.ejs', 'utf8');
let macro_template = fs.readFileSync('views/index.ejs', 'utf8');
let about_template = fs.readFileSync('views/about.ejs', 'utf8');

/*
  1) Generate a web page for each character
  2) Keep track of the link for index.html
*/
/*for (character in character_info){
  let character_html = ejs.render(character_template, {
    filename: __dirname + '/views/character.ejs',
    stats: character_info[character],
    name: character
  });
  character_info[character].link = getBetterFileName(character);
  fs.writeFileSync('../public/'+character_info[character].link+'.html', character_html, 'utf8');

}

/*
  1) Generate an index page of all characters

let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: character_info
});*/

//fs.writeFileSync('../src/static/index.html', index_html, 'utf8');

let macro_html = ejs.render(macro_template, {
  filename: __dirname + '/views/index.ejs',
  statedata: "../data/statescores.json"
});
let about_html = ejs.render(about_template);

fs.writeFileSync('../public/index.html', macro_html, 'utf8');
fs.writeFileSync('../public/about.html', about_html, 'utf8');


function getBetterFileName(characterName){
  let betterFileName = characterName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
