const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const addButton = container.querySelector(".input__btn_add");
const resetButton = container.querySelector(".input__btn_reset");

function renderAdded() {
  const songs = songsContainer.querySelectorAll(".song");
  const noSongsElement = container.querySelector(".no-songs");

  if (songs.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.classList.add("input__btn_disabled");
    noSongsElement.classList.remove("no-songs_hidden");
  } else {
    resetButton.removeAttribute("disabled");
    resetButton.classList.remove("input__btn_disabled");
    noSongsElement.classList.add("no-songs_hidden");
  }
}

function addSong() {
  const artist = document.querySelector(".input__text_artist");
  const song = document.querySelector(".input__text_song");

  const trackContainer = document.createElement("div");
  trackContainer.classList.add("song");

  const artistElement = document.createElement("h4");
  artistElement.classList.add("song__artist");
  artistElement.textContent = artist.value;

  const titleElement = document.createElement("p");
  titleElement.classList.add("song__title");
  titleElement.textContent = song.value;

  const songButtonElement = document.createElement("button");
  songButtonElement.classList.add("song__like");

  songButtonElement.addEventListener("click", function (event) {
    //вешаем обработчик клика на кнопку-сердечко;
    event.target.classList.toggle("song__like_active"); //передаём обработчику колбэк, добавляющий и снимающий сердечку нужный класс.
  });

  trackContainer.appendChild(artistElement);
  trackContainer.appendChild(titleElement);
  trackContainer.appendChild(songButtonElement);

  songsContainer.appendChild(trackContainer);

  artist.value = "";
  song.value = "";

  renderAdded();
}

function resetPlaylist() {
  songsContainer.innerHTML = "";

  renderAdded();
}

addButton.addEventListener("click", addSong);
resetButton.addEventListener("click", resetPlaylist);

renderAdded();
