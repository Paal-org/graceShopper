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
    const blue = {
      name: "Blue Milk",
      description:
        "Blue coloured bantha milk. Bantha is an animal, which lives on planet Tatooine.",
      price: 8
    };

    beforeEach(() => {
      return Product.create({
        blue
      });
    });

    it("GET /api/products", () => {
      return request(app)
        .get("/api/products")
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an("array");
          expect(res.body[0].name).to.be.equal(blue.name);
        });
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
