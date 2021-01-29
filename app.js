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
  name: {
    type: String,
    required:true
  },
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const durian = new Fruit({
  name:"Durian",
  rating:10,
  review:"gak enak"
})
// durian.save()

Fruit.updateOne({name:"Durian"},{rating:-1},function(err){
  if (err) {
    console.log(err);
  } else {
    console.log("Success!");
    mongoose.connection.close()
  }
})
