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

const displayPhotos = (dataFromApi) => {
 // Query the document to get the UL where we will be putting our photos:
 console.log(dataFromApi);
 const ulElement = document.querySelector(`.gallery`);

 dataFromApi.forEach((photoObject) => {

  const newLi = document.createElement(`li`);

  const imgElement = document.createElement(`img`);
  imgElement.src = photoObject.urls.regular;
  imgElement.alt = photoObject.alt_description;

  // Append the image inside the LI, and then the LI inside the UL:
  newLi.append(imgElement);
  ulElement.append(newLi);
 });
}

getPhotos();
