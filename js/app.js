const notesEl = document.querySelector(".notes");
const addBtn = document.querySelector(".note-add");

function createNote(title, text) {
  const noteEl = document.createElement("div");
  noteEl.classList.add("note");
  noteEl.innerHTML = `
    <div class="note-header">
        <p id="note-title">${title}</p>
        <textarea id="note-title-input" class="note-title hidden">${title}</textarea>
        <div>
            <button class="btn note-edit"><i class="fa-solid fa-pen"></i></button>
            <button class="btn note-delete"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
    <p id="note-text">${text}</p>
    <textarea id="note-textarea" class="note-text hidden">${text}</textarea>
    `;

  const deleteBtn = noteEl.querySelector(".note-delete");
  const editBtn = noteEl.querySelector(".note-edit");
  const titleEl = noteEl.querySelector("#note-title");
  const textEl = noteEl.querySelector("#note-text");
  const titleInputEl = noteEl.querySelector("#note-title-input");
  const textAreatEl = noteEl.querySelector("#note-textarea");

  editBtn.addEventListener("click", (e) => {
    titleEl.classList.toggle("hidden");
    textEl.classList.toggle("hidden");

    titleInputEl.classList.toggle("hidden");
    textAreatEl.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", (e) => {
    noteEl.remove();
  });

  titleInputEl.addEventListener("input", (e) => {
    titleEl.innerText = e.target.value
  })

  textAreatEl.addEventListener("input", (e) => {
    textEl.innerText = e.target.value
  })

  return noteEl
}

addBtn.addEventListener("click", (e) => {
  const el = createNote("title", "your text")
  notesEl.appendChild(el)
});

const body = document.getElementById("page")
const mainPage = document.getElementById("main-page")


document.querySelector(".backround-menu").addEventListener("click", (e) => {
  if (e.target.nodeName === "A")
  body.classList.remove("light", "dark", "relax")
  body.classList.add(e.target.attributes["value"].value)

  saveEl()
})

function saveEl() {
  const background = body.classList
  localStorage.setItem('background', background)
}

document.addEventListener('DOMContentLoaded', () => {

  body.classList.remove("light", "dark", "relax")
  const savedBackground = localStorage.getItem('background')

  if (savedBackground) {
    body.classList.add(savedBackground)
  }
})
