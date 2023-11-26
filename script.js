let result;
console.log("script running");
async function fetchData() {
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=110d8d38185d8cd63f9ad706f1970941&format=json`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    result = await response.json();
    console.log(result.tracks);
    result.tracks.track.map((track) => {
      const newTrack = document.createElement("li");
      const newDiv = document.createElement("div");

      const trackName = document.createTextNode(" " + track.name + " ");

      const trackImage = document.createElement("img");
      trackImage.setAttribute("src", track.image[0]["#text"]);

      var trackUrl = document.createElement("a");
      trackUrl.setAttribute("href", track.url);
      trackUrl.setAttribute("target", "_blank");
      trackUrl.innerHTML = "Link";

      newDiv.appendChild(trackImage);
      newDiv.appendChild(trackName);
      newTrack.appendChild(newDiv);
      newTrack.appendChild(trackUrl);

      document.getElementById("track").appendChild(newTrack);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();
