const playlists = {
  happy: [
    "🎶 Happy - Pharrell Williams",
    "🎶 Best Day of My Life - American Authors",
    "🎶 Walking on Sunshine - Katrina and The Waves"
  ],
  sad: [
    "💔 Someone Like You - Adele",
    "💔 Let Her Go - Passenger",
    "💔 Fix You - Coldplay"
  ],
  energetic: [
    "⚡ Can't Stop The Feeling! - Justin Timberlake",
    "⚡ Uptown Funk - Bruno Mars",
    "⚡ Thunder - Imagine Dragons"
  ],
  calm: [
    "🌙 Weightless - Marconi Union",
    "🌙 Ocean Eyes - Billie Eilish",
    "🌙 River Flows in You - Yiruma"
  ]
};

function showPlaylist(mood) {
  const list = playlists[mood];
  const playlistDiv = document.getElementById("playlist");
  playlistDiv.innerHTML = `<h2>${mood.charAt(0).toUpperCase() + mood.slice(1)} Playlist</h2><ul>` +
    list.map(song => `<li>${song}</li>`).join('') +
    `</ul>`;
}
