const mongoose = require ("mongoose");
// create player schema 
const playerSchema = mongoose.Schema({
    name: String,
    age: Number,
    position: String,
    number: Number,
});
// affect name to playerSchema
const player = mongoose.model("Player", playerSchema);
// make model exportable 
module.exports = player;