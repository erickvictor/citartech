const CountryService = require("../country_service");
const sinon = require("sinon");

describe("CountryService test", () => {
  it("has a module", () => {
    expect(CountryService).toBeDefined();
  });

  describe("listCountries test", () => {
    it("lists Countries", () => {
      const MockModel = {
        find: sinon.spy()
      };
      const countryService = CountryService(MockModel);
      countryService.listCountries();
      const expected = true;
      const actual = MockModel.find.calledOnce;
      expect(actual).toEqual(expected);
    });
  });

  describe("createCountry test", () => {
    it("creates a country", () => {
      const save = sinon.spy();
      let code;
      let name;

      const MockModel = function(data) {
        code = data.code;
        name = data.name;

        return {
          ...data,
          save
        };
      };
      const countryService = CountryService(MockModel);

      countryService.createCountry("BR", "Brasil");

      const expected = true;
      const actual = save.calledOnce;

      expect(actual).toEqual(expected);
      expect(code).toEqual("BR");
      expect(name).toEqual("Brasil");
    });
  });
});