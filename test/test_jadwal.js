const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app");
const { Jadwal } = require("../models");

chai.use(chaiHttp);

describe("Get Jadwal", () => {
  /* GET api/banks */
  it("It should get all jadwal", (done) => {
    chai
      .request(app)
      .get("/v1/jadwal")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property("message");
        expect(res.body.message).to.equal("Success Read Jadwal");
        expect(res.body).to.have.property("data");
        done();
      });
  });
})