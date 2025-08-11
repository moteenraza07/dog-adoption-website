// client id and secret passcode provided when creating account in pet finder api
const client_id = "fM0jsW78aUTFEGAD5kpS5AHAKsKqyTb4N6mG3j0Pvc5jHQGCqZ";
const client_secret = "A7mBvO70gpTESDyCI7gQmi5gSiNiBAY661beTRSH";

document.addEventListener("DOMContentLoaded", function () {
  const find_me = document.getElementById("find-me");
  // on click function that will fetch the api and display
  // dog name, dog age, dog gender and dog image
  if (find_me) {
    find_me.addEventListener("click", function () {
      fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`,
      })
        // error handling
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const token = data.access_token;
          return fetch(
            `https://api.petfinder.com/v2/animals?type=dog&limit=1`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
        })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Did not fetch dog info");
          }
          return response.json();
        })
        .then((data) => {
          if (data.animals && data.animals.length > 0) {
            // create a variable that gets the first photo of the dog image
            const dog = data.animals[0];

            const photoUrl =
              dog.photos && dog.photos.length > 0
                ? dog.photos[0].medium
                : "https://via.placeholder.com/150";
            // use inner html to display in dog-display container
            document.getElementById("dog-display").innerHTML = `
              <h3>Name: ${dog.name}</h3>
              <p>Age: ${dog.age}</p>
              <p>Gender: ${dog.gender}</p>
              <img class="dog-photo" src="${photoUrl}" alt="${dog.name}">
            `;
          }
        })
        .catch((error) => console.error("Error Fetching data", error));
    });
  }
});

// have the adopt-me button direct the user to the forms page.

const adopt_me = document.getElementById("adopt-me");
if (adopt_me) {
  adopt_me.addEventListener("click", function () {
    window.location.href = "adoption-form.html";
  });
}
