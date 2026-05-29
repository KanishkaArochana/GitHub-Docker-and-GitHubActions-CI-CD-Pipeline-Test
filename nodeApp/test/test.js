// var request = require('supertest');
// var app = require('../app');

// describe('GET /will', function () {

//     it('respond with hello world', function (done) {

//         request(app)
//             .get('/will')
//             .expect(200)
//             .expect('{ "response": "Hello World" }', done);

//     });

// });



var request = require("supertest");
var app = require("../app");

describe("CRUD Operations Test", function () {

    // GET ALL USERS
    it("GET /users", function (done) {

        request(app)
            .get("/users")
            .expect(200)
            .expect(function (res) {

                if (res.body.length < 5) {
                    throw new Error("Users not found");
                }

            })
            .end(done);

    });


    // GET SINGLE USER
    it("GET /users/1", function (done) {

        request(app)
            .get("/users/1")
            .expect(200)
            .expect(function (res) {

                if (res.body.name !== "John") {
                    throw new Error("Wrong user");
                }

            })
            .end(done);

    });


    // CREATE USER
    it("POST /users", function (done) {

        request(app)
            .post("/users")
            .send({
                name: "Kasun"
            })
            .expect(201)
            .expect(function (res) {

                if (res.body.name !== "Kasun") {
                    throw new Error("User not created");
                }

            })
            .end(done);

    });


    // UPDATE USER
    it("PUT /users/2", function (done) {

        request(app)
            .put("/users/2")
            .send({
                name: "Updated Samin"
            })
            .expect(200)
            .expect(function (res) {

                if (res.body.name !== "Updated Samin") {
                    throw new Error("User not updated");
                }

            })
            .end(done);

    });


    // DELETE USER
    it("DELETE /users/3", function (done) {

        request(app)
            .delete("/users/3")
            .expect(200)
            .expect(function (res) {

                if (res.body.message !== "User deleted") {
                    throw new Error("User not deleted");
                }

            })
            .end(done);

    });

});