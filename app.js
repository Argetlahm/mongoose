const mongoose = require('mongoose');

// getting-started.js
mongoose.connect("mongodb://localhost:27017/fruitsDB"
, {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected")
});

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const buah = new Fruit({
  name:"Apple",
  rating:7,
  review:"Buah kejadian"
});
// buah.save();

const peopleSchema = mongoose.Schema({
  name: String,
  age: Number
});

const person = mongoose.model("Person",peopleSchema);
const someone = new person({
  name:"John",
  age:37
});
// someone.save()

const orange = new Fruit({
  name:"Orange",
  rating: 7,
  review:"Asem"
});
const banana = new Fruit({
  name:"Banana",
  rating:10,
  review:"Paling kusuka"
});
// Fruit.insertMany([orange,banana],function(err){
//   if(err){
//     console.log(err)
//   }else{
//     console.log("Berhasil menambah")
//   }
// })

Fruit.find(function(err,fruits){
  if(err){
    console.log(err)
  }else{
    fruits.forEach(function(item){
      console.log(item.name)
      mongoose.connection.close()
    });
  }
});
