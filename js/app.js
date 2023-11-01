const temporadaSelect = document.getElementById("temporada");
const personajesSelect = document.getElementById("personajes");
const informacion = document.getElementById('informacion');
const posterPersonaje = document.getElementById("posterPersonaje");
const nombre = document.getElementById("nombre");
const refe = document.getElementById("ref")
temporadaSelect.addEventListener("change", function () {
    const selectedTemporada = this.value;
    const characters = getCharactersForTemporada(selectedTemporada);
    populatePersonajesSelect(characters);
});

personajesSelect.addEventListener("change", function () {
    const selectedPersonaje = this.value;
    const characterData = getCharacterData(selectedPersonaje);
    updateCharacterInfo(characterData);
});

function getCharactersForTemporada(temporada) {
    switch (temporada) {
        case "1":
            return ["Fiona", "Ian"];
        case "2":
            return ["Carl",  "Frank"];
        case "3":
            return ["Sheila", "Mickey"];
        case "4":
            return ["Kev", "Chuckie"];
        case "5":
            return ["Jody", "Svetlana"];
        default:
            return [];
    }
}

function populatePersonajesSelect(characters) {
    personajesSelect.innerHTML = '<option value="" disabled selected>Selecciona el personaje</option>';
    characters.forEach((character) => {
        const option = document.createElement("option");
        option.value = character;
        option.textContent = character;
        personajesSelect.appendChild(option);
    });
}

function getCharacterData(character) {
    // Add data for each character if needed
    switch (character) {
        case "Fiona":
            refe.href = 'Fiona.html'
            return { poster: "img/T1/Fiona.jpg", name: "Fiona", info: "Es la mayor de la familia Gallagher. Debido a la ausencia de su madre y al abandono de Frank, la mayor parte de la responsabilidad de la crianza de los hijos recae sobre sus hombros, lo que la obliga a abandonar la escuela secundaria en su tercer año."};
        case "Ian":
            refe.href = 'Ian.html'
            return { poster: "img/T1/Ian.webp", name: "Ian", info: "Es el tercero de la familia Gallagher. Aunque inicialmente se creía que era el hijo de Frank, una prueba de ADN revela que en realidad es hijo de uno de los hermanos de Frank, lo que lo convierte en primo y medio hermano de los Gallagher."};
        case "Carl":
            refe.href = 'Carl.html'
            return { poster: "img/T2/carl.jpg", name: "Carl", info: "Es el segundo hijo más joven de la familia a menudo tiene problemas en la escuela por atacar a otros estudiantes. En sus primeros años, muestra varias tendencias psicópatas, como mutilar sus juguetes y matar animales callejeros, aunque este comportamiento parece disminuir a medida que envejece."};
        case "Frank":
            refe.href = 'Frank.html'
            return { poster: "img/T2/Frank.jpg", name: "Frank", info:"Es el protagonista de Shameless y el padre de los seis hijos Gallagher inteligentes, enérgicos e independientes que probablemente estarían mejor sin él ya que es alcoholico y drogradicto."};
        case "Sheila":
            refe.href = 'Sheila.html'
            return { poster: "img/T3/Sheila.webp", name: "Sheila", info:"Tiene una enfermedad mental y desarrolló agorafobia y trastorno obsesivo compulsivo (TOC) en algún momento durante la infancia de Karen."};
        case "Mickey":
            refe.href = 'Mickey.html'
            return { poster: "img/T3/Mickey.jpg", name: "Mickey", info:"Es conocido como uno de los matones del barrio más agresivos por haber robado varios artículos de las tiendas y haber sido enviado a un reformatorio a una edad temprana, es novio de Ian."};
        case "Kev":
            refe.href = 'Kev.html'
            return { poster: "img/T4/Kev.webp", name: "Kev", info:"Es amable y de buen corazón, Kev y Veronica son conocidos por tener la relación más amorosa y comprometida del programa, así como por su vida sexual particularmente aventurera."};
        case "Chuckie":
            refe.href = 'Chuckie.html'
            return { poster: "img/T4/Chuckie.webp", name: "Chuckie", info:"Chuckie es hijo de Sammy y un hombre desconocido de uno de los tres matrimonios de su madre. Vivió con su madre en un parque de casas rodantes durante algún tiempo."};
        case "Jody":
            refe.href = 'Jody.html'
            return { poster: "img/T5/Jody.webp", name: "Jody", info:"Es una entusiasta tatuador, a menudo se la ve buscando trabajo y ayudando en la casa. Se vuelve extremadamente apegado a Sheila , llamándola 'mamá', pero no se da cuenta de que Karen rompe su celibato y lo está engañando con Lip."};
        case "Svetlana":
            refe.href = 'Svetlana.html'
            return { poster: "img/T5/Svetlana.jpg", name: "Svetlana", info:"Ella es una prostituta rusa que el padre de Mickey contrata para violar a Mickey después de que éste los pilla a él y a Ian juntos. Más tarde se revela que está embarazada de lo que supuestamente es el hijo de Mickey y que él se va a casar con ella."};
        default:
            return {};
    }
}

function updateCharacterInfo(characterData) {
    posterPersonaje.src = characterData.poster || "img/default.jpeg";
    nombre.textContent = characterData.name || "";
    informacion.textContent = characterData.info || "";
}
