import Fetch from "whatwg-fetch";

let clientId = 'eba845be34d9819';
let clientSecret = 'ac12dec7e0023d61881b60fe462dd431cf2798cd';
let rootUrl = 'https://api.imgur.com/3/';

let Api = window.api = {
  get: (url) => fetch(rootUrl + url,  {
      headers: {
        'Authorization': 'Client-ID ' + clientId
      }
    })
    .then((response) => response.json())
}

export default Api