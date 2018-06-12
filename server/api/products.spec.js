const { expect } = require("chai");
const request = require("supertest");
const db = require("../db");
const app = require("../index");
const Product = db.model("product");

describe("Product routes", () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe("/api/products/", () => {
    beforeEach(() => {
      return Product.create({
        name: "Blue Milk",
        description:
          "Blue coloured bantha milk. Bantha is an animal, which lives on planet Tatooine.",
        price: 8
      });
    });

    it("GET /api/products", () => {
      return request(app)
        .get("/api/products")
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an("array");
          expect(res.body[0].name).to.be.equal("Blue Milk");
        });
    });

    it("POST /api/products", () => {
      return request(app)
        .post("/api/products")
        .send({
          name: "Blue Milk",
          description:
            "Blue coloured bantha milk. Bantha is an animal, which lives on planet Tatooine.",
          price: 8
        }) // the HTTP request body
        .expect(201) // you'll have to customize the status yourself
        .expect("Content-Type", /json/)
        .then(res => {
          expect(res.body).to.be.an("object");
        });
    });
  }); // end describe('/api/users')
});
// end describe('Product routes')
