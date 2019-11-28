const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
const app = require("../app");
// const { Jadwal } = require("../models");

chai.use(chaiHttp);

var token
var idItemMasuk
describe('User Signin ', () => {
  describe('Signin', function () {
    it('Should sign in User', function (done) {
      chai.request(app)
        .post('/v1/customer/signin')
        .send({ username: 'fidin', password: 'rahasia' })
        .end(function (err, res) {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Success Signin');
          expect(res.body.data).to.have.property('token');
          token = res.body.data.token
          done();
        })
    })
    it('Should Give error when wrong credentials', function (done) {
      chai.request(app)
        .post('/v1/customer/signin')
        .send({ username: 'admin', password: 'rahasiasalah' })
        .end(function (err, res) {
          expect(res).to.have.status(403);
          expect(res).to.be.json;
          expect(res.body).to.have.property('message');
          expect(res.body.message).to.equal('Invalid Signin');
          done();
        })
    })
  })
})


const getJadwal = {
  tanggal_berangkat: "2019-11-20",
  origin: "Bandar Lampung",
  destination: "Liwa",
  jam_berangkat: "08:00"
};

describe("Get Jadwal", () => {
  /* GET api/banks */
  it("It should get all jadwal", (done) => {
    chai
      .request(app)
      .get("/v1/jadwal")
      .set('token', token)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property("message");
        expect(res.body.message).to.equal("Success Read Jadwal");
        expect(res.body).to.have.property("data");
        done();
      });
  });

  it("Should create new jadwal", (done) => {
    chai
      .request(app)
      .post("/v1/jadwal")
      .set('token', token)
      .send(
        {
          tanggal_berangkat: "2019-11-17",
          origin: "Bandar Lampung",
          destination: "Liwa",
          jam_berangkat: "08:00",
          MobilId: 1,
          jumlah_kursi: 10,
          kursi_kosong: 0,
          kursi_terisi: 0,
          harga_perkursi: 50000,
          status: "Active"
        },
      )
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.have.property("message");
        expect(res.body.message).to.equal("Succes Create jadwal");
        expect(res.body).to.have.property("data");
        // bankId = res.body.data.id;
        // newBank.name = res.body.data.name;
        // newBank.nomorRekening = res.body.data.nomorRekening;
        done();
      });
  });
})


describe("Get Pesanan & Post Pesanan", () => {

  it("It should get all pesanan", (done) => {
    chai
      .request(app)
      .get("/v1/pesanan/2")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.have.property("message");
        expect(res.body.message).to.equal("Success Read Pesanan");
        expect(res.body).to.have.property("data");
        done();
      });
  });


  it("Should create new pesanan", (done) => {
    chai
      .request(app)
      .post("/v1/pesanan")
      .send(
        {
          JadwalId: 1,
          CustomerId: 1,
          titik_jemput: "Bandar Lampung",
          jumlah_kursi: 2,
          total_bayar: 50000,
          no_telp: "082377954008",
          detail_tujuan: "Liwa Ujung"
        },
      )
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res).to.be.json;
        expect(res.body).to.have.property("message");
        expect(res.body.message).to.equal("Success Create Pesanan");
        expect(res.body).to.have.property("data");
        // bankId = res.body.data.id;
        // newBank.name = res.body.data.name;
        // newBank.nomorRekening = res.body.data.nomorRekening;
        done();
      });
  });
})