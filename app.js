/*const object = {
    "name": "Josh",
    "weight": 175,
    "age": 30,
    "eyecolor": "brown",
    "isHappy": true,
    "cars": ["Chevy", "Honda"],
    "favoriteBook": {
        "title": "The Last Kingdom",
        "author": "Bernard Cornwell",
        "rating": 8.38
    }
};

const objectJSON = JSON.stringify(object);
console.log(objectJSON);

const dog = {
  name: "Mango",
  age: 3,
  isHappy: true,
};

const dogJSON = JSON.stringify(dog);
console.log(dogJSON);

const json = '{"name":"Mango","age":3,"isHappy":true}';

const jsonParsed = JSON.parse(json);
console.log(jsonParsed);
console.log(jsonParsed.name) 

try {
  const data = JSON.parse("Well, this is awkward");
} catch (error) {
  console.log(error.name);// "SyntaxError"
  console.log(error.message);// Unexpected token W in JSON at position 0
};

try {
  const data = JSON.parse('{username: "Mango"}');
} catch (error) {
  console.log(error.name);// "SyntaxError"
  console.log(error.message);// "Unexpected token u in JSON at position 1"
}

const settings = {
  theme: "dark",
  isAuthenticated: true,
  options: [1, 2, 3],
};

localStorage.setItem("settings", JSON.stringify(settings));

const savedSettings = localStorage.getItem("settings");
console.log(savedSettings);
const parsedSettings = JSON.parse(savedSettings);
console.log(parsedSettings);// settings object
*/

//const Joi = require("joi");
//const shortid = require("shortid");
const express = require("express");

const app = express();

app.use("*", (req, res) => {
  console.log("був запит від браузера");
  res.send("<h1>Привіт, це тобі привіт від серверу Express!</h1>")
});

const listener = app.listen(4444, () => {
  console.log("Сервер запущено на порту" + listener.address().port);
});

//console.log("Москва палає ясно!");

//const passwordSchema = Joi.string().min(3).max(10).alphanum();
//console.log(passwordSchema.validate("rr2334r"));

//console.log(shortid.generate());