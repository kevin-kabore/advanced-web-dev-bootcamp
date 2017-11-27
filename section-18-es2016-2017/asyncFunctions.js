async function hasMostFollowers(...usernames) {
  let baseUrl = 'https://api.github.com/users/';
  let urls = usernames.map(username => $.getJSON(baseUrl + username));
  let results = await Promise.all(urls);
  console.log(results);
  let max = results.sort((a, b) => b.followers - a.followers)[0];
  return `${max.name} has the most followers with ${max.followers}`;
}

async function starWarsString(id) {
  let url = `https://swapi.co/api/people/${id}`;
  let str = '';
  let result = await $.getJSON(url);
  let film = await $.getJSON(result.films[0]);
  let planet = await $.getJSON(film.planets[0]);
  str += `${result.name} is featured in ${film.title}, directed by ${film.director} and takes place on ${planet.name}`;
  return str;
}
