const addBtn = document.querySelector(".add");

addBtn.addEventListener("click", function () {
    const note = document.createElement("div");
    note.classList.add("note");

    note.innerHTML = `
        <div class="notes">
        <div class="tools">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main hidden"></div>
        <textarea title="anmol"></textarea>
        </div>
        `;

    const editBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    
    const main = note.querySelector(".main");
    const textArea = note.querySelector("textarea");

    editBtn.addEventListener("click", () => {
        main.classList.toggle("hidden");
        textArea.classList.toggle("hidden");
    }); 
    
    deleteBtn.addEventListener("click", () => {
        if(textArea.value.length > 0) {
            main.innerHTML = "";
            textArea.value = "";
        } else {
            note.remove();
        }
    });
    
    textArea.addEventListener("input", (e) => {
        const { value, tagName, title } = e.target;

        // console.log(e)
        // console.log(tagName, title)
    
        main.innerHTML = marked.parse(value);
    });
    
    document.body.appendChild(note);
});

