const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://fullstackopen:${password}@fso2022.fkjoaek.mongodb.net/?retryWrites=true&w=majority`;

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

mongoose
  .connect(url)
  .then(() => {
    console.log("connected");

    // Person.find({}).then((result) => {
    //   result.forEach((person) => {
    //     console.log(person);
    //   });
    //   mongoose.connection.close();
    // });

    const person = new Person({
      name: name,
      number: number,
    });

    return person.save();
  })
  .then(() => {
    console.log(`added ${name} number ${number} to person`);
    return mongoose.connection.close();
  })
  .catch((err) => console.log(err));
