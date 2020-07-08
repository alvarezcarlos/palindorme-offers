let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app/app");

chai.should();

chai.use(chaiHttp);

describe('Products API', () => {
  //Test GET with queryParams
  describe('GET /api/products', () => {
    it("It should get product by id", done => {
      chai.request(server)
        .get("/api/products")
        .query({id: '11'})
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.length.should.be.eq(1);
        })
      done();
    })

    it("It should have just one queryParam", done => {
      chai.request(server)
        .get("/api/products")
        .query({id: '11', brand: 'someBrand'})
        .end((err, response) => {
          response.should.have.status(400);
        })
      done()
    })

    it("It should have a value from more than 3 characters", done => {
      chai.request(server)
        .get("/api/products")
        .query({brand: 'so'})
        .end((err, response) => {
          response.should.have.status(400);
        });
      done()
    })

    it("It should not allow any query param", done => {
      chai.request(server)
        .get("/api/products")
        .query({hola: 'soas'})
        .end((err, response) => {
          response.should.have.status(400);
        });
      done()
    })
  });
});