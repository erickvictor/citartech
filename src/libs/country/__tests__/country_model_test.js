var mongoose = require("mongoose");
// we use a test database for testing
var mongoDB = "mongodb://test:tech2019@ds137611.mlab.com:37611/citartech-test";
mongoose.connect(mongoDB , { useNewUrlParser: true });
const Country = require("../country_model");

describe("Country model test", () => {
  beforeAll(async () => {
    await Country.deleteMany({});
  });

  afterEach(async () => {
    await Country.deleteMany({});
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it("has a module", () => {
    expect(Country).toBeDefined();
  });

  describe("get country", () => {
    it("gets a country", async () => {
      const country = new Country({ code: "BR", name: "Brasil" });
      await country.save();

      const foundCountry = await Country.findOne({ code: "BR" });
      const expected = "BR";
      const actual = foundCountry.code;
      expect(actual).toEqual(expected);
    });
  });

  describe("save country", () => {
    it("saves a country", async () => {
      const country = new Country({ code: "BR", name: "Brasil" });
      const savedCountry = await country.save();
      const expected = "BR";
      const actual = savedCountry.code;
      expect(actual).toEqual(expected);
    });
  });

  describe("update country", () => {
    it("updates a country", async () => {
      const country = new Country({ code: "BR", name: "Brasil" });
      await country.save();

      country.code = "US";
      const updatedCountry = await country.save();

      const expected = "US";
      const actual = updatedCountry.code;
      expect(actual).toEqual(expected);
    });
  });
});