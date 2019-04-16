const app = require("../app");
const request = require("supertest");
var mongoose = require("mongoose");
var mongoDB = "mongodb://test:tech2019@ds137611.mlab.com:37611/citartech-test";
mongoose.connect(mongoDB , { useNewUrlParser: true });

describe("App test", () => {
  it("has a module", () => {
    expect(app).toBeDefined();
  });

  let server;

  beforeAll(() => {
    server = app.listen(3001);
  });

  afterAll(done => {
    mongoose.connection.close();
    server.close(done);
  });

  describe("country routes test", () => {
    it("can list countries", async () => {
      await request(server).get("/countrycodes").expect(200);
    });

    it("can post countries", async () => {
      await request(server).post("/countrycodes?code=BR&name=Brasil").expect(200);
    });

    it("fails if code is missing in post coutrycodes", async () => {
      await request(server).post("/countrycodes?name=BR").expect(500);
    });

    it("fails if name is missing in post countrycodes", async () => {
      await request(server).post("/countrycodes?code=Brasil").expect(500);
    });

    it("fails if code and name is missing in post countrycodes", async () => {
      await request(server).post("/countrycodes").expect(500);
    });
  });

  describe("404", () => {
    it("returns 404", async () => {
      await request(server).post("/fail").expect(404);
    });
  });
});