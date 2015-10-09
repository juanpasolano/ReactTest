import Fetch from "whatwg-fetch";

var clientId = 'eba845be34d9819';
var clientSecret = 'ac12dec7e0023d61881b60fe462dd431cf2798cd';
var rootUrl = 'https://api.imgur.com/3/';

var Api = {
  get: (url) => fetch(rootUrl + url,  {
      headers: {
        'Authorization': 'Client-ID ' + clientId
      }
    })
    .then((response) => response.json())
}
window.api = Api;
export default Api