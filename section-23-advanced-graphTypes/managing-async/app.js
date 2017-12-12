// // write your code here!
// d3.json('./countries.json', function(error, data) {
//   if (error) throw error;
//
//   d3.select('body')
//     .selectAll('h3')
//     .data(data.geonames)
//     .enter()
//     .append('h3')
//     .text(d => d.countryName)
//   // console.log("DATA", data);
// })
//
// d3.csv('./simplemaps-worldcities-basic.csv', function(row) {
//   if (+row.pop < 10000) return;
//   return {
//     cityName: row.cityName,
//     countryCode: row.iso2,
//     population: +row.pop
//   }
// }, function(error, data) {
//   if (error) throw error;
//
//   console.log(data)
// })

// with AWAIT
// d3.queue()
//   .defer(d3.json, './countries.json')
//   .defer(d3.csv, './simplemaps-worldcities-basic.csv', function(row) {
//     if (+row.pop < 10000) return;
//
//     return {
//       cityName: row.city,
//       countryCode: row.iso2,
//       population: +row.pop
//     }
//   })
//   .await(function(error, countries, cities) {
//     if (error) {
//       throw error;
//     }
//
//     var data = countries.geonames.map(country => {
//       country.cities  = cities.filter(city => city.countryCode === country.countryCode);
//       return country;
//     });
//
//     var countrySelection = d3.select('body')
//       .selectAll('div')
//       .data(data)
//       .enter()
//       .append('div')
//
//     countrySelection
//       .append('h3')
//         .text(d => d.countryName);
//
//     countrySelection
//       .append('ul')
//       .html(d => d.cities.map(city => {
//         var percentage = city.population / d.population * 100;
//         // console.log(city);
//         return `<li>${city.cityName} - ${percentage.toFixed(2)}%</li>`
//       }).join(''))
//   })

// With awaitall

d3.queue()
  .defer(d3.json, './countries.json')
  .defer(d3.csv, './simplemaps-worldcities-basic.csv', function(row) {
    if (+row.pop < 10000) return;

    return {
      cityName: row.city,
      countryCode: row.iso2,
      population: +row.pop
    }
  })
  .awaitAll(function(error, allData) {
    if (error) {
      throw error;
    }

    var data = allData[0].geonames.map(country => {
      country.cities  = allData[1].filter(city => city.countryCode === country.countryCode);
      return country;
    });

    var countrySelection = d3.select('body')
      .selectAll('div')
      .data(data)
      .enter()
      .append('div')

    countrySelection
      .append('h3')
        .text(d => d.countryName);

    countrySelection
      .append('ul')
      .html(d => d.cities.map(city => {
        var percentage = city.population / d.population * 100;
        // console.log(city);
        return `<li>${city.cityName} - ${percentage.toFixed(2)}%</li>`
      }).join(''))
  })
