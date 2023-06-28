const apiEndpoint = `https://api.unsplash.com/photos`;
const myApiKey = `KWZWSi6RO17IHffahBMJ2e1hv4yiHP3gvhigpz3Q05Q`;

// Create a function to request data from the API:
const getPhotos = () => {

 const myUrl = new URL(apiEndpoint);
 myUrl.search = new URLSearchParams({
  client_id: myApiKey
 })
 fetch(myUrl)
  .then((response) => {
   return response.json();
  })
  .then((jsonData) => {
   // Call the displayPhotos function and pass it the data from the API:
   displayPhotos(jsonData);
  });
}