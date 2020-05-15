// Your functions go here!

// COUNTING CARDS
var count = 0;
function countingCards(card1, card2, card3, card4, card5) {
   switch (card1) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }
   switch (card2) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }
   switch (card3) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }
   switch (card4) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }
   switch (card5) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count++;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count--;
         break;
   }

   if (count > 0) {
      return count + " Bet";
   } else {
      return count + " Hold";
   }
}

// RECORD COLLECTION

var collection = {
   0001: {
      album: "Pretty Hate Machine",
      artist: "Nine Inch Nails",
      tracks: ["Down In It", "Head Like a Hole"],
   },
   0002: {
      album: "Ministry Psalm 69: The Way to Succeed and the Way to Suck Eggs",
      artist: "Ministry",
      tracks: ["Jesus Built My Hotrod", "Just One Fix"],
   },
   0003: {
      artist: "Pink Floyd",
      tracks: [],
   },
   0004: {
      album: "The Black Album",
   },
};

function recordCollection(id, prop, value) {
   if (value === "") delete collection[id][prop];
   else if (prop === "tracks") {
      collection[id][prop] = collection[id][prop] || [];
      collection[id][prop].push(value);
   } else {
      collection[id][prop] = value;
   }
   console.log(collection);
   return "Please view the console for the updated collection.";
}

// ITERATE ODD NUMBERS WITH A FOR LOOP

var oddArray = [];
function forOddNumbers(input) {
   for (var count = 1; count <= input; count += 2) {
      oddArray.push(count);
   }
   return oddArray;
}

// PROFILE LOOKUP

var contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];

function profileLookup(name, prop) {
   for (var count = 0; count < contacts.length; count++) {
      if (contacts[count].firstName === name) {
         if (contacts[count].hasOwnProperty(prop)) {
            return contacts[count][prop];
         } else {
            return "No such property";
         }
      }
   }
   return "No such contact";
}

// GENERATE RANDOM WHOLE NUMBERS WITHIN A RANGE

function randomRange(myMin, myMax) {
   return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

// REMOVE ITEMS USING SPLICE

function spliceArr(input1, input2) {
   const arr = [2, 4, 5, 1, 7, 5, 2, 1];
   arr.splice(input1, input2);
   return arr;
}

// ADD ITEMS USING SPLICE

function addSlpiceArr(input1, input2, input3, input4) {
   const arr = [2, 4, 5, 1, 7, 5, 2, 1];
   arr.splice(input1, input2, input3, input4);
   return arr;
}

// CHECK FOR THE PRESENCE OF AN ELEMENT WITH indexOf()

let fruits = ["apples", "pears", "oranges", "peaches", "pears"];
function indexOfCheck(input) {
   if (fruits.indexOf(input) >= 0) {
      return true;
   }
   return false;
}

// CHECK THE TYPE OF VARIABLE

function variableType(input) {
   console.log(typeof input);
   return typeof input;
}
