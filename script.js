const container = document.querySelector(".container"); // напишите свой код здесь
const songsContainer = container.querySelector(".songs-container");
const songs = songsContainer.querySelectorAll(".song");
const addButton = container.querySelector(".input__btn_add");
const resetButton = container.querySelector(".input__btn_reset");

if (songs.length === 0) {
  resetButton.setAttribute("disabled", "true"); // напишите ваш код здесь
  resetButton.classList.add("input__btn_disabled");
} else {
  resetButton.removeAttribute("disabled", true); // здесь уберём атрибут "disabled"
  resetButton.classList.remove("input__btn_disabled"); // а здесь уберём класс "input__btn_disabled"
}

function renderAdded() {
  const songs = songsContainer.querySelectorAll(".song");

  /* опредедите переменную noSongsElement.
    В неё должен попадать элемент с классом .no-songs */
  const noSongsElement = container.querySelector(".no-songs");

  if (songs.length === 0) {
    resetButton.setAttribute("disabled", true);
    resetButton.classList.remove("input__btn_disabled");

    noSongsElement.classList.remove("no-songs_hidden"); // необходимо убрать скрытие, если песен нет
  } else {
    resetButton.removeAttribute("disabled");
    resetButton.classList.remove("input__btn_disabled");

    noSongsElement.classList.add("no-songs_hidden"); // необходимо скрыть элемент no-songs,
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

  trackContainer.appendChild(artistElement); //метод appendChild
  trackContainer.appendChild(titleElement);
  trackContainer.appendChild(songButtonElement);

  songsContainer.appendChild(trackContainer);

  /*/
  songsContainer.innerHTML += `
        <div class="song">
            <h4 class="song__artist">${artist.value}</h4>
            <p class="song__title">${song.value}</p>          
            <button class="song__like"></button>
        </div>
    `;        */
  renderAdded();
}

function resetPlaylist() {
  //В теле функции просто сотрите всё содержимое songsContainer.
  songsContainer.innerHTML = "";
}

// artist.value = "";
// song.value = "";

addButton.addEventListener("click", addSong);
resetButton.addEventListener("click", resetPlaylist);

renderAdded();

//узнать, какой тип в .input__text_artist - "string"
//console.log(typeof document.querySelector('.input__text_artist').value);

// не забудьте вызвать функцию
//addSong();
//addSong();
//addSong();

/*
resetButton.setAttribute('style', 'background-color: #f1f1f1');   
  console.log(resetButton.setAttribute('disabled'));
  */

//console.log(songs);

/*
     
const container = document.querySelector('#container');
const content = container.querySelector('.content');
const contentItem = content.querySelector('.content__item');

console.log(contentItem) // Выведет: <div class="content__item"></div>

const contentItems = content.querySelectorAll('.content__item');

console.log(contentItems); /* Выведет коллекцию NodeList, которая будет содержать все элементы c классом .content__item 
*/
