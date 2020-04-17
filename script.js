const container = document.querySelector(".container");
const songsContainer = container.querySelector(".songs-container");
const addButton = container.querySelector(".input__btn_add");
const resetButton = container.querySelector(".input__btn_reset");

function renderAdded() {
  const songs = songsContainer.querySelectorAll(".song");
  const noSongsElement = container.querySelector(".no-songs");

  if (songs.length === 0) {
    resetButton.setAttribute("disabled", true); // здесь уберём атрибут "disabled"
    resetButton.classList.add("input__btn_disabled"); // а здесь уберём класс "input__btn_disabled"
    noSongsElement.classList.remove("no-songs_hidden");
  } else {
    resetButton.removeAttribute("disabled");
    resetButton.classList.remove("input__btn_disabled");
    noSongsElement.classList.add("no-songs_hidden");
  }
}

// функция принимает два параметра
function createSong(artistValue, songValue) {
    // выносим логику создания элемента из функции addSong
    const trackContainer = document.createElement('div');
    trackContainer.classList.add('song');

    const artistElement = document.createElement('h4');
    artistElement.classList.add('song__artist');
    artistElement.textContent = artistValue; // первый параметр используем здесь

    const titleElement = document.createElement('p');
    titleElement.classList.add('song__title');
    titleElement.textContent = songValue; // а второй здесь

    const songButtonElement = document.createElement('button');
    songButtonElement.classList.add('song__like');

    trackContainer.appendChild(artistElement);
    trackContainer.appendChild(titleElement);
    trackContainer.appendChild(songButtonElement);

    // необходимо вернуть элемент трека
    return trackContainer;
}

// функция принимает два параметра
function createSong(artistValue, songValue) {
  // выносим логику создания элемента из функции addSong
  const trackContainer = document.createElement('div');
  trackContainer.classList.add('song');

  const artistElement = document.createElement('h4');
  artistElement.classList.add('song__artist');
  artistElement.textContent = artistValue; // первый параметр используем здесь

  const titleElement = document.createElement('p');
  titleElement.classList.add('song__title');
  titleElement.textContent = songValue; // а второй здесь

  const songButtonElement = document.createElement('button');
  songButtonElement.classList.add('song__like');

  trackContainer.appendChild(artistElement);
  trackContainer.appendChild(titleElement);
  trackContainer.appendChild(songButtonElement);

  // необходимо вернуть элемент трека
  return trackContainer;
}

function addSong(event) {
  event.preventDefault();

  const form = document.forms.add; // в эту переменную запишите форму
    const artist = form.elements.artist; //достаньте элемент по имени artist
const song = form.elements.song; //а этот по имени song

  // вызываем функцию createSong, передавай ей аргументы
  const trackContainer = createSong(artist.value, song.value);

  // дальше ничего не изменилось
  songsContainer.appendChild(trackContainer);

  artist.value = '';
  song.value = '';

  renderAdded();
}

const artistInput = document.querySelector(".input__text_artist"); //Ввод с клавиатуры в поле
const songInput = document.querySelector(".input__text_song");

function keyHandler(event) {
  if (event.key === "Enter") {
    //когда нажимаем Enter, то
    addSong(); //срабатывает фенкция addSong
  }
  /*
  if (event.key.toLowerCase() === "ё") {
    //Данный код блокирует ввод буквы Ё в окне
    event.preventDefault();
  }
*/
}

artistInput.addEventListener("keydown", keyHandler); //Слушатели
songInput.addEventListener("keydown", keyHandler); //Слушатели

function resetPlaylist() {
  songsContainer.innerHTML = "";

  renderAdded();
}

addButton.addEventListener("click", addSong); //Слушатели
resetButton.addEventListener("click", resetPlaylist); //Слушатели

renderAdded();

const playListTitles = [
  "Игорь Тальков. Лучшее",
  "Музыка категории Б",
  "Подборка с фестиваля FYRE",
];

function doubleClickHandler(event) {
  event.target.textContent =
    playListTitles[Math.floor(Math.random() * playListTitles.length)];
  document
    .querySelector(".cover__heading")
    .removeEventListener("dblclick", doubleClickHandler); //Снимаем слушателя. Двойной клик будет один раз
}

document
  .querySelector(".cover__heading")
  .addEventListener("dblclick", doubleClickHandler); //Слушатель, который запускает по двойному клику function doubleClickHandler

// вешаем слушатель на элемент songsContainer
songsContainer.addEventListener("click", function (event) {
  event.target.classList.toggle("song__like_active");
  if (event.target.classList.contains("song__like")) {
    event.target.classList.toggle("song__like_active");
  }
});


console.log(document.forms);