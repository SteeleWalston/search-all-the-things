const BASE_URL = 'http://www.amiiboapi.com/api/amiibo/'

const throwJson = json => { throw json; };
const get = url => fetch(url)
    .then(r => r.ok ? r.json() : r.json().then(throwJson));

export function search({ term }) {
    return get(`${BASE_URL}${term}`);
}