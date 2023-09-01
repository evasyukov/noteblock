const notesEl = document.querySelector('.notes')
const addBtn = document.querySelector('.note-add')


function createNote(title, text) {
    const noteEl = document.createElement('div')
    noteEl.classList.add('note')
    noteEl.innerHTML = `
    <div class="note-header">
        <p>${title}</p>
        <div class="note-action>
            <button class="btn note-edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn note-delete"><i class="fa-solid fa-trash"></i></button>
        </div>
    </div>
    <p id="note-text">${text}</p>
    `

    const deleteBtn = noteEl.querySelector('.note-delete')
    // const editBtn = noteEl.querySelector('.note-edit')

    // editBtn.addEventListener('click', (e) => {

    // });

    deleteBtn.addEventListener('click', (e) => {
        noteEl.remove();
    });

    return noteEl
}



addBtn.addEventListener('click', (e) => {
    const el = createNote("Заголовок", "Ваш текст")
    notesEl.appendChild(el)
})