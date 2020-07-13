const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const fruit = new Fruit({
  name: "Apple",
  score: 7,
  review: "Sold as a fruit"
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
})
//  below one also works 
// const personSchema = {
//   name: String,
//   age: Number,
// };

const Person = mongoose.model("Person", personSchema);
const person = new Person({
  name: "Jowar Saha",
  age: "38",
});

// person.save();

// const kiwi = new Fruit({
//   name: "Kiwi",
//   score: 4,
//   review: "Brown"
// });
//
// const orange = new Fruit({
//   name: "Orange",
//   score: 5,
//   review: "orange"
// });
//
// const banana = new Fruit({
//   name: "banana",
//   score: 6,
//   review: "Yellow"
// });

//
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   } else{
//     console.log("success");
//   }
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {

    mongoose.connection.close();
    fruits.forEach(function(fruit) {
      console.log(fruit.name);
    });
  }
})
