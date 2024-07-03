/*************************** Modules Importation ***************************/
// import  express module
const express = require("express");
// import body-parser module 
const bodyParser = require("body-parser");
// import mongoose module
const mongoose = require ("mongoose");
// sportDB => DtaBase name
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');




/*************************** Express Application ***************************/
// create express application
const app = express();


/*************************** Models Importation ***************************/
const Match = require("./models/match");




/*************************** App Configuration ***************************/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Security configuration

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader(

        "Access-Control-Allow-Headers",

        "Origin, Accept, Content-Type, X-Requested-with, Authorization"

    );

    res.setHeader(

        "Access-Control-Allow-Methods",

        "GET, POST, DELETE, OPTIONS, PATCH, PUT");

    next();

});


let matchesTab = [
    { id: 1, scoreOne: 2, scoreTwo: 1, teamOne: 'EST', teamTwo: 'CA' },
    { id: 2, scoreOne: 0, scoreTwo: 1, teamOne: 'JUV', teamTwo: 'ROM' },
    { id: 3, scoreOne: 3, scoreTwo: 1, teamOne: 'RMD', teamTwo: 'ATM' },
    { id: 4, scoreOne: 2, scoreTwo: 2, teamOne: 'CIT', teamTwo: 'LIV' },
];

let teamsTab = [
    { id: 1, name: "CA", owner: "Med", foundation: 1920 },
    { id: 2, name: "REAL MADRID", owner: "AZER", foundation: 1980 },
    { id: 3, name: "BARCELONE", owner: "Carl", foundation: 1990 }
];

let playersTab = [
    { id: 1, name: "Cristiano", age: 38, number: 7, position: "Forwards" },
    { id: 2, name: "Messi", age: 36, number: 3, position: "Forwards" },
    { id: 3, name: "Neymar", age: 28, number: 5, position: "Forwards" },
];


function generateId(T) {
    let max;
    if (T.length == 0) {
        max = 0;
    } else {
        max = T[0].id;
        for (let i = 0; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id;
            }
        }
    }
    return max + 1;
}


/*************************** Business Logic ***************************/

// Business Logic: Add Match
app.post("/api/matches", (req, res) => {
    //instructions
    console.log("Here into BL : Add Match", req.body); 
    req.body.id = generateId(matchesTab);
    matchesTab.push(req.body);
    res.json({ isAdded: true });
});

// Business Logic: Edit Match
app.put("/api/matches", (req, res) => {
    //instructions
    console.log("Here into BL : Edit Match", req.body);
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == req.body.id) {
            matchesTab[i] = req.body;
            break;
        }
    }
    res.json({ isEdited: "success" });
});

// Business Logic: Get All Matches
app.get("/api/matches", (req, res) => {
    //instructions
    console.log("Here into BL : Get All Matches");
    res.json({ matches: matchesTab });
});

// Business Logic: Delete Match
app.delete("/api/matches/:id", (req, res) => {
    //instructions
    console.log("Here into BL : Delete Match", req.params.id);
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == req.params.id) {
            matchesTab.splice(i, 1);
            break;
        }
    }
    res.json({ isDeleted: true });
});

// Business Logic: Get Match By ID
app.get("/api/matches/:id", (req, res) => {
    //instructions 
    console.log("Here into BL : Get Match By ID", req.params.id);
    for (let i = 0; i < matchesTab.length; i++) {
        if (matchesTab[i].id == req.params.id) {
            res.json({ match: matchesTab[i] });
            break;
        }
    }
});

// Business Logic: Get Match By Score
app.post("/api/matches/search", (req, res) => {
    //instructions 
    console.log("Here into BL : Search Matches", req.body);
    let matches = [];
    for (let i = 0; i < matchesTab.length; i++) {
        if (
            matchesTab[i].scoreOne == req.body.scoreOne ||
            matchesTab[i].scoreTwo == req.body.scoreTwo) {
            matches.push(matchesTab[i]);
        }
    }
    res.json({ T: matches });
});


//***** Team */
// Business Logic: Add Team
app.post("/api/teams", (req, res) => {
    //instructions
    console.log("Here into BL : Add Team", req.body);
    req.body.id = generateId(teamsTab);
    teamsTab.push(req.body);
    res.json({ isAdded: true })
});

// Business Logic: Edit Team
app.put("/api/teams", (req, res) => {
    //instructions
    console.log("Here into BL : Edit Team", req.body);
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == req.body.id) {
            teamsTab[i] = req.body;
            break;
        }
    }
    res.json({ isEdited: "success" });
});

// Business Logic: Get All Teams
app.get("/api/teams", (req, res) => {
    //instructions
    console.log("Here into BL : Get All Teams");
    res.json({ teams: teamsTab });
});

// Business Logic: Delete Team
app.delete("/api/teams/:id", (req, res) => {
    //instructions
    console.log("Here into BL : Delete Team", req.params.id);
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == req.params.id) {
            teamsTab.splice(i, 1);
            break;
        }
    }
    res.json({ isDeleted: true });

});

// Business Logic: Get Team By ID
app.get("/api/teams/:id", (req, res) => {
    //instructions 
    console.log("Here into BL : Get Team By ID", req.params.id);
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == req.params.id) {
            res.json({ team: teamsTab[i] });
            break;
        }

    }
});


//***** Player */
// Business Logic: Add Player
app.post("/api/players", (req, res) => {
    //instructions
    console.log("Here into BL : Add Player", req.body);
    req.body.id = generateId(playersTab);
    playersTab.push(req.body);
    res.json({ isAdded: true });
});

// Business Logic: Edit Player
app.put("/api/players", (req, res) => {
    //instructions
    console.log("Here into BL : Edit Player", req.body);
    for (let i = 0; i < teamsTab.length; i++) {
        if (playersTab[i].id == req.body.id) {
            playersTab[i] = req.body;
            break;
        }
    }
    res.json({ isEdited: "success" });
});

// Business Logic: Get All Players
app.get("/api/players", (req, res) => {
    //instructions
    console.log("Here into BL : Get All Players");
    res.json({ players: playersTab });
});

// Business Logic: Delete Player
app.delete("/api/players/:id", (req, res) => {
    //instructions
    console.log("Here into BL : Delete Player", req.params.id);
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == req.params.id) {
            playersTab.splice(i, 1);
            break;
        }
    }
    res.json({ isDeleted: true });
});

// Business Logic: Get Player By ID
app.get("/api/players/:id", (req, res) => {
    //instructions 
    console.log("Here into BL : Get Player By ID", req.params.id);
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == req.params.id) {
            res.json({ player: playersTab[i] });
            break;
        }

    }
});






/*************************** App Exportation ***************************/
// make app importable
module.exports = app;


