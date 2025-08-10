const client_id = "fM0jsW78aUTFEGAD5kpS5AHAKsKqyTb4N6mG3j0Pvc5jHQGCqZ";
const client_secret = "A7mBvO70gpTESDyCI7gQmi5gSiNiBAY661beTRSH";

document
  .getElementsByClassName("dog-adopt")
  .addEventListener("click", function () {
    fetch("https://api.petfinder.com/v2/oauth2/token")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        displayData(data);
      })
      .catch((error) => console.error("Error Fetchin data", error));
  });
