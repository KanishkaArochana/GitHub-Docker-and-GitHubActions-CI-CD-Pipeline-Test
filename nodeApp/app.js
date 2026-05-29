// var express = require("express");
// var app = express();

// // Home route
// app.get("/", function (req, res) {
//   res.send('{ "response": "Hello, Welcome to Adomic Arts samin" }');
// });

// // Test route
// app.get("/will", function (req, res) {
//   res.send('{ "response": "Hello World" }');
// });

// // Ready route
// app.get("/ready", function (req, res) {
//   res.send('{ "response": "Great!, It works!" }');
// });

// module.exports = app;



var express = require("express");
var app = express();

app.use(express.json());


// Default 5 users
let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Samin" },
    { id: 3, name: "Alex" },
    { id: 4, name: "Kamal" },
    { id: 5, name: "Nimal" }
];


// CREATE USER
app.post("/users", function (req, res) {

    const user = {
        id: users.length + 1,
        name: req.body.name
    };

    users.push(user);

    res.status(201).json(user);

});


// READ ALL USERS
app.get("/users", function (req, res) {

    res.json(users);

});


// READ SINGLE USER
app.get("/users/:id", function (req, res) {

    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);

});


// UPDATE USER
app.put("/users/:id", function (req, res) {

    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    user.name = req.body.name;

    res.json(user);

});


// DELETE USER
app.delete("/users/:id", function (req, res) {

    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users = users.filter(u => u.id != req.params.id);

    res.json({
        message: "User deleted"
    });

});

module.exports = app;