var CityTools = function() {
  // this.name = name;
  // this.language = language;
  // this.currency = currency;
  // this.coordinates = coordinates;
};

CityTools.prototype = {
  getRandomCity: function(countries){
    var randomNumber = parseInt(Math.random() * (countries.length - 1) + 1);
    var randomCity = {
      name: countries[randomNumber].capital,
      coords: countries[randomNumber].latlng,
      language: countries[randomNumber].languages,
      country: countries[randomNumber].name,
      currency: countries[randomNumber].currencies
    }
    return randomCity;  
  }

}

module.exports = CityTools;

