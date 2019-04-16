const createCountry = Country => (code, name) => {
    if (!code || !name)
      throw new Error(`Code: ${code} name: ${name}`);
  
    const country = new Country({ code, name });
    return country.save();
  };
  
  const listCountries = Country => () => {
    return Country.find({}).sort({ code: -1 });
  };
  
  module.exports = Country => {
    return {
      createCountry: createCountry(Country),
      listCountries: listCountries(Country)
    };
  };