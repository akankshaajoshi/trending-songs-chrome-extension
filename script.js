let result;
console.log("script running");
async function fetchData() {
  const url = `https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=YOUR_API_KEY&format=json`;
  const options = {
    method: "GET",
  };

  try {
    const response = await fetch(url, options);
    result = await response.json();
    console.log(result.tracks);
    result.tracks.track.map((track) => {
      const newTrack = document.createElement("li");

      const trackName = document.createTextNode(" " + track.name + " ");

      const trackImage = document.createElement("img");
      trackImage.setAttribute("src", track.image[0]["#text"]);

      var trackUrl = document.createElement("a");
      trackUrl.setAttribute("href", track.url);
      trackUrl.setAttribute("target", "_blank");
      trackUrl.innerHTML = "Link";

      newTrack.appendChild(trackImage);
      newTrack.appendChild(trackName);
      newTrack.appendChild(trackUrl);

      document.getElementById("track").appendChild(newTrack);
    });
  } catch (error) {
    console.error(error);
  }
}

fetchData();
