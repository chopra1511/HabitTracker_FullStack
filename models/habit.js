const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const habitSchema = new Schema({
    title: { type: String, required: true },
    weekData: [
        {
            day: String,
            date: Number,
            status: String
        }
    ],
    count: {type: Number}
});

module.exports = mongoose.model('Habits', habitSchema);















// const { getDb } = require("../util/database");
// const mongodb = require("mongodb");

// // const habits = [];


// module.exports = class Habits {
//   constructor(title,weekData,count) {
//       this.title = title;
//       this.weekData = weekData;
//       this.count = count;
//   }

//   save() {
//     const db = getDb();
//     db.collection("habits")
//       .insertOne(this)
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static fetchHabits() {
//     const db = getDb();
//     return db
//       .collection("habits")
//       .find()
//       .toArray()
//       .then((habits) => {
//         return habits;
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     // return habits;
//   }

//   static toggleStatus(id, day) {
    
//     const db = getDb();
//       db.collection("habits").find({ _id: new mongodb.ObjectId(id) }).toArray().then((result) => {
//         console.log(result);
//       }).catch((err) => {
//         console.log(err);
//       });;
      
//   }

//   static deleteHabit(id) {
//     const db = getDb();
//     return db
//       .collection("habits")
//       .deleteOne({ _id: new mongodb.ObjectId(id) })
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   static deleteAll() {
//     const db = getDb();
//     return db
//       .collection("habits")
//       .deleteMany({})
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// };
