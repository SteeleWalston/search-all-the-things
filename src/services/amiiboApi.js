const BASE_URL = 'http://www.amiiboapi.com/api/';

const throwJson = json => { throw json; };
const get = url => fetch(url)
  .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search(searchTerm) {
  return get(`${BASE_URL}${searchTerm}`);
}

export function getAmiibo(id) {
  const url = `${BASE_URL}amiibo/?id=${id}`;
  return get(url);
}