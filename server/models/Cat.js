// require mongoose, a popular MongoDB library for nodejs
const mongoose = require('mongoose');

// Set mongoose's Promise to ES6 promises.
mongoose.Promise = global.Promise;

// variable to hold our Model
// A Model is our data structure to handle data. This can be an object, JSON, XML or anything else.
let CatModel = {};

// A DB Schema to define our data structure
const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },

  bedsOwned: {
    type: Number,
    min: 0,
    required: true,
  },

  createdData: {
    type: Date,
    default: Date.now,
  },

});

// Schema.statics are static methods attached to the Model or objects
CatSchema.statics.sayName = (cat) => {
  console.log(cat.name);
};

// Schema.statics are static methods attached to the Model or objects
CatSchema.statics.findByName = (name, callback) => {
  const search = {
    name,
  };

  return CatModel.findOne(search, callback);
};

// Create the cat model based on the schema. You provide it with a custom discriminator
CatModel = mongoose.model('Cat', CatSchema);


// export our public properties
module.exports.CatModel = CatModel;
module.exports.CatSchema = CatSchema;
