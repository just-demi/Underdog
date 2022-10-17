let mongoose = require('mongoose');



const uri = "mongodb+srv://admin:admin12345@coefficiency.ta5qc.mongodb.net/Users?retryWrites=true&w=majority";
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const CustomerSchema = new mongoose.Schema({
    company_name: { type: String, index: true, required: true },
    company_no: { type: Number, required: true },
    password: {type: String, required: true},
    surname: { type: String, index: true },
    yearBorn: { type: Number, min: -5000, max: (new Date).getFullYear() },
    createdAt: { type: Date, minlength: 5 },
    address: [{
        street1: String,
        street2: String,
        city: String,
        state: String,
        zip: Number, }]
});

/*try {
    // Connect to the MongoDB cluster
     mongoose.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );

  } catch (e) {
    console.log("could not connect");
  }*/
