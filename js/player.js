const elements = document.getElementsByClassName(`hide-me`);
for (const element of elements) {
  element.style.display = "none";
}

// Initialise player with first song of album cued
var songIndex = 0;
var songTitle = playlist[0].title;
var filepath = [`./audio/${playlist[0].file}.webm`, `./audio/${playlist[0].file}.mp3`];
var trackNumber = playlist[0].track;
var sound = new Howl({
  src: [filepath],
  html5: true,
  onend: function () {
    playNext();
  }
});

// Cue new song by index
function cueSong(index) {
  sound.stop();

  songIndex = index;
  filepath = [`./audio/${playlist[index].file}.webm`, `./audio/${playlist[index].file}.mp3`];
  songTitle = playlist[index].title;
  trackNumber = playlist[index].track;
  sound = new Howl({
    src: filepath,
    html5: true,
    onend: function () {
      playNext();
    }
  });

  playSong();
}

// Play currently cued song
function playSong() {
  sound.play();

  // Change play button to pause button
  playBtn.style.display = "none";
  pauseBtn.style.display = "flex";

  // Update player with track info
  $("#nowPlaying").text(`NOW PLAYING`);
  $("#trackName").text(`${songTitle}`);

  // Make only currently playing track bold in playlist
  playlist.forEach((song) => {
    document.getElementById(`song${song.track}`).style.fontWeight = "500";
    document.getElementById(`track${song.track}`).style.display = "flex";
    document.getElementById(`playIcon${song.track}`).style.display = "none";
  });
  document.getElementById(`song${trackNumber}`).style.fontWeight = "700";

  // Add play icon next to currently playing track
  document.getElementById(`track${trackNumber}`).style.display = "none";
  document.getElementById(`playIcon${trackNumber}`).style.display = "flex";

  // Update player with timestamps and seek
  const interval = setInterval(function () {
    const seek = sound.seek();
    const time = Math.round(seek);
    const timeLeft = Math.round(sound.duration() - seek);
    document.getElementById("timer").innerHTML = formatTime(time);
    document.getElementById("duration").innerHTML = formatTime(timeLeft);
    document.getElementById(`progress`).style.width =
      ((seek / sound.duration()) * 100 || 0) + "%";
  }, 250);
}

function playNext() {
  if (songIndex < playlist.length - 1) {
    cueSong(songIndex + 1);
  } else {
    cueSong(0);
  }
}

function playPrev() {
  if (songIndex === 0) {
    cueSong(playlist.length - 1);
  } else {
    cueSong(songIndex - 1);
  }
}

// Handles seeking through track using scrub bar
function seekTrack(per) {
  // sound.pause();
  sound.seek(sound.duration() * per);
  // playSong();
}

// Formats integer into timestamp
function formatTime(secs) {
  var minutes = Math.floor(secs / 60) || 0;
  var seconds = secs - minutes * 60 || 0;
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

$("#playBtn").click(function () {
  playSong();
});

$("#pauseBtn").click(function () {
  sound.pause();
  pauseBtn.style.display = "none";
  playBtn.style.display = "flex";
});

$("#playNext").click(function () {
  playNext();
});

$("#playPrev").click(function () {
  playPrev();
});

$("#progressBar").click(function () {
  seekTrack(event.offsetX / progressBar.offsetWidth);
});

playlist.forEach((song) => {
  // Generate HTML track list from playlist array
  trackList.insertAdjacentHTML(
    "beforeend",
    `<a href="#" id="song${song.track}" class="track-info">
      <div id="track${song.track}" class="track-number">${song.track}</div>
      <div id="playIcon${song.track}" class="track-play-icon" style="display:none;">
        <img src="https://uploads-ssl.webflow.com/62d232d56b0817827c54906d/62d762c9160fff16e9e49e34_play-fill%202.png" loading="lazy" alt="" class="image-5">
      </div>
      <div class="track-name">${song.title}</div>
    </a>`
  );

  // Cue song in list when clicked
  $(document).on("click", `#song` + song.track, function () {
    cueSong(playlist.indexOf(song));
  });
});
