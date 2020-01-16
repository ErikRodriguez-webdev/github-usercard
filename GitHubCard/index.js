/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
  .get("https://api.github.com/users/ErikRodriguez-webdev")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.log(error);
  });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const followersArray = [response.data.followers_url];

function createFollowerComp(object) {
  const outerBox = document.createElement("div");
  const boxImage = document.createElement("img");
  const boxCardInfo = document.createElement("div");
  const cardName = document.createElement("h3");
  const cardUserName = document.createElement("p");
  const cardLocation = document.createElement("p");
  const cardProfileText = document.createElement("p");
  const cardProfileURL = document.createElement("a");
  const cardFollowers = document.createElement("p");
  const cardFollowing = document.createElement("p");
  const cardBio = document.createElement("p");

  outerBox.classList.add("card");
  boxImage.src = object.avatar_url;
  boxCardInfo.classList.add("card-info");
  cardName.classList.add("name");
  cardUserName.classList.add("username");
  cardProfileURL.href = object.html_url;

  cardName.textContent = object.name;
  cardUserName.textContent = object.login;
  cardLocation.textContent = object.location;
  cardProfileText.textContent = "Profile: ";
  cardProfileURL.textContent = object.html_url;
  cardFollowers.textContent = `Followers: ${object.followers}`;
  cardFollowing.textContent = `Following: ${object.following}`;
  cardBio.textContent = `Bio: ${object.bio}`;

  outerBox.append(boxImage);
  outerBox.append(boxCardInfo);
  boxCardInfo.append(cardName);
  boxCardInfo.append(cardUserName);
  boxCardInfo.append(cardLocation);
  boxCardInfo.append(cardProfileText);
  cardProfileText.append(cardProfileURL);
  boxCardInfo.append(cardFollowers);
  boxCardInfo.append(cardFollowing);
  boxCardInfo.append(cardBio);

  return outerBox;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
