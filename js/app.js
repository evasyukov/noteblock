const notesEl = document.querySelector('.notes')
const addBtn = document.querySelector('.note-add')


function createNote(title, text) {
    const noteEl = document.createElement('div')
    noteEl.classList.add('note')
    noteEl.innerHTML = `
    <div class="note-header">
        <p>${title}</p>
        <div class="note-action>
            <button class="note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="note-delete"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
    <p id="note-text">${text}</p>
    `



    return noteEl
}



addBtn.addEventListener('click', (e) => {
    const el = createNote("Заголовок", "Ваш текст")
    notesEl.appendChild(el)
})