const connection = require('./index.js');

for (var i = 1; i < 101; i++) { // seed my listings table
    var randomListing = function() {
        let firstArr = ["Big", "Small", "Quaint", "Dreamy", "Average", "Tiny", "Bright"];
        let secondArr = ["blue", "black", "green", "red", "yellow", "white"];
        let thirdArr = ["house", "apartment", "treehouse", "private room"];
        let result = "";
        result += firstArr[Math.floor(Math.random() * firstArr.length)];
        result += " ";
        result += secondArr[Math.floor(Math.random() * secondArr.length)];
        result += " ";
        result += thirdArr[Math.floor(Math.random() * thirdArr.length)];
        return result;
    }

    var listing = function() {
        let object = {};
        object.id = i;
        object.listing = randomListing();
        return object;
    }

    connection.query('INSERT INTO listings SET ?', listing(), (err) => { if (err) console.log("This is the error:", err) })
}

var images = [];
for (let l = 0; l < 100; l++) {
    let imageURL = `https://eyalgarbifecbucket.s3-us-west-1.amazonaws.com/image${l}.jpg`;
    images.push(imageURL);
}
var description = function() {
    let firstArr = ["Cute ", "Adorable ", "Majestic ", "Loveable ", "Precious ", "Scary "];
    let secondArr = ["little ", "big ", "small ", "giant ", ""];
    let thirdArr = ["monster", "puppy", "kitten", "wild animal"];
    let result = "";
    result += firstArr[Math.floor(Math.random() * firstArr.length)];
    result += secondArr[Math.floor(Math.random() * secondArr.length)];
    result += thirdArr[Math.floor(Math.random() * thirdArr.length)];
}

for (let f = 1; f < 101; f++) {
    var images = [];
    for (let l = 0; l < 100; l++) {
        let imageURL = `https://eyalgarbifecbucket.s3-us-west-1.amazonaws.com/image${l}.jpg`;
        images.push(imageURL);
    }

    var description = function() {
        let firstArr = ["Cute ", "Adorable ", "Majestic ", "Loveable ", "Precious ", "Scary "];
        let secondArr = ["little ", "big ", "small ", "giant ", ""];
        let thirdArr = ["monster", "puppy", "kitten", "wild animal"];
        let result = "";
        result += firstArr[Math.floor(Math.random() * firstArr.length)];
        result += secondArr[Math.floor(Math.random() * secondArr.length)];
        result += thirdArr[Math.floor(Math.random() * thirdArr.length)];
        return result;
    }

    var numberOfImages = function() {
        let number = 5;
        number += Math.floor(Math.random() * 20);
        return number;
    }


    var uniqueId = function() {
        var id = 1;
        (function() {
            let key = id;
            id++;
            return key;
        })();
    }

    var imageObject = function() {
        let object = {};
        object.id = uniqueId();
        object.image = images[Math.floor(Math.random() * images.length)];
        object.description = description();
        object.foreignKey = f;
        return object;
    }

    for (let m = 0; m < numberOfImages(); m++) {
        connection.query("INSERT INTO propertyImages SET ?", imageObject(), (err) => { if (err) console.log("This is the error:", err) })
    }
}