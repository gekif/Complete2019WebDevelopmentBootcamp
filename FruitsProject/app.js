const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/fruitsDB', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});


const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please check your data entry, no name specified!~']
    },
    rating: {
        type: Number,
        min: 1,
        max: 10
    },
    review: String
});


const Fruit = mongoose.model('Fruit', fruitSchema);


const fruit = new Fruit({
    rating: 20,
    review: "Peaches are yummy"
});


// fruit.save();


const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});


const Person = mongoose.model('Person', personSchema);


const mango = new Fruit({
    name: "Mango",
    score: 6,
    review: "Decent fruit."
});


mango.save();


Person.updateOne({name: "Amy"}, {favouriteFruit: mango}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully updated');
    }

    mongoose.connection.close();

});


/*const person = new Person({
    name: "Amy",
    age: 12,
    favouriteFruit: pineapple
});


person.save();*/


/*Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {
        mongoose.connection.close();

        fruits.forEach((fruit) => {
            console.log(fruit.name);
        });
    }
});*/


/*Fruit.updateOne({_id: '5dce7165c9c49d569cc4e6c3'}, {name: "Peach"}, (err) => {
    if (err) {
        console.log(err);
    } else{
        console.log('Successfully updated the document.');
    }

    mongoose.connection.close();
});*/


/*
Fruit.deleteOne({name: "Peach"}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully deleted the document.');
    }

    mongoose.connection.close();
});
*/


/*
Person.deleteMany({name: "John"}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Successfully deleted the document.')
    }

    mongoose.connection.close();
});
*/




const findDocuments = (db, callback) => {
    // Get the documents collection
    const collection = db.collection('fruits');
    // Find some documents
    collection.find({}).toArray(function(err, fruits) {
        assert.equal(err, null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
    });
};