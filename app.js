const mongoose = require('mongoose');

// getting-started.js
mongoose.connect("mongodb://localhost:27017/fruitsDB"
, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected")
  // console.log(db.collections)
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const pineapple = new Fruit({
//   name:"Pineapple",
//   rating:8,
//   review:"Hohohho"
// });
// pineapple.save();

const dragonFruit = new Fruit({
  name:"Buah Naga",
  rating: 10,
  review:"Legendary fruit"
});
dragonFruit.save();

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const person = new mongoose.model("person", peopleSchema);

// const someone = new person({
//   name:"Amy",
//   age:12,
//   favouriteFruit:pineapple
// });
// someone.save();

const durian = new Fruit({
  name:"Durian",
  rating:10,
  review:"gak enak"
})
// durian.save()

// Fruit.updateOne({name:"Durian"},{rating:-1},function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success!");
//     mongoose.connection.close()
//   }
// })

// Fruit.deleteOne({name:"Durian"},function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Delete Success!");
//     mongoose.connection.close();
//   }
// });
// person.deleteMany({name:"John"},function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Deleted");
//     mongoose.connection.close();
//   }
// })

person.updateOne({name:"John"},{favouriteFruit:dragonFruit},function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Berhasil update");
  }
})
