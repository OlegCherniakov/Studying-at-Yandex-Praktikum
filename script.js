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

function addSong() {
  const artist = document.querySelector(".input__text_artist");
  const song = document.querySelector(".input__text_song"); // аналогично выберите input с названием песни
  //Управление содержимым: свойства .innerHTML / .textContent
  /* вставим разметку с помощью innerHTML
    Используйте грависы, чтобы разместить её
    на нескольких строчках */

  const trackContainer = document.createElement(
    "div"
  ); /* здесь создайте элемент div */
  trackContainer.classList.add("song"); /* а здесь присвойте ему класс .song */

  const artistElement = document.createElement("h4"); // создаём элемент h4 и кладём его в переменную
  artistElement.classList.add("song__artist"); // добавляем класс song__artist
  artistElement.textContent = artist.value; // добавляем текст

  const titleElement = document.createElement("p");
  titleElement.classList.add("song__title");
  titleElement.textContent = song.value;

  const songButtonElement = document.createElement("button");
  songButtonElement.classList.add("song__like");

  /*
  songButtonElement.addEventListener("click", function (event) {
    //вешаем обработчик клика на кнопку-сердечко;
    event.target.classList.toggle("song__like_active"); //передаём обработчику колбэк, добавляющий и снимающий сердечку нужный класс.
  });
  */

  trackContainer.appendChild(artistElement);
  trackContainer.appendChild(titleElement);
  trackContainer.appendChild(songButtonElement);

  songsContainer.appendChild(trackContainer);

  artist.value = "";
  song.value = "";

  renderAdded();
}

const artistInput = document.querySelector(".input__text_artist"); //Ввод с клавиатуры в поле
const songInput = document.querySelector(".input__text_song");

function keyHandler(event) {
  if (event.key === "Enter") {
    //когда нажимаем Enter, то
    addSong(); //срабатывает фенкция addSong
  }
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
  'Игорь Тальков. Лучшее',
  'Музыка категории Б',
  'Подборка с фестиваля FYRE'
];

/* можно не сохранять элемент в переменную,
а сразу вызвать метод addEventListener */
document.querySelector('.cover__heading').addEventListener('dblclick', function (event) {
  playListTitles[Math.floor(Math.random() * playListTitles.length)];// дальше только вставить случайный элемент
  event.target.textContent = playListTitles[Math.floor(Math.random() * playListTitles.length)];
});


// вешаем слушатель на элемент songsContainer
songsContainer.addEventListener('click', function (event) {
  event.target.classList.toggle('song__like_active');
  if (event.target.classList.contains('song__like')) {
    event.target.classList.toggle('song__like_active');
}
});