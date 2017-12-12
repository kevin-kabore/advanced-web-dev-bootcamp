var width = 600;
var height = 600;

d3.csv('./data/countryData.csv', (row, col) => {
  var obj = {
    seriesName: row.seriesName,
    country: row.CountryName
  }
  for (var key in row) {
    if (parseInt(key)) {
      obj[key] = +row[key] || null;
    }
  }

  return obj
}, (error, data) => {
  if (error) {
    throw error;
  }
  console.log('DATA:');
  console.log(data);

  var yearObj = d3.nest()
      .key(function(d) {
        return d.seriesName
      })
      .key(function(d) {
        console.log(d);
        for (var key in d) {
          if (parseInt(key)) {
            return key
          }
        }
      })
      .key(function(d){
        return d.country
      })
      .entries(data);
console.log(yearObj);

})
