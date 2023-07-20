let n1, altura;

async function homepokemons() {


    try {

        const cardContainer = document.getElementById('cardContainer')
        for (var i = 1; i < 1009; i++) {

            n1 = i
            let url = `https://pokeapi.co/api/v2/pokemon/${n1}`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(i)
            var id = data.id
            var order = id.toString()



            const div = document.createElement('div')
            div.className = 'card'

            const div1 = document.createElement('div')
            div1.className = 'card1'

            const title = document.createElement('h3')
            title.innerText = data.name
            title.className = 'pkname'

            const body = document.createElement('p');
            body.className = 'textin'

            var peso = data.weight
            var pesoEmkg = peso / 10 // converte o peso para Kg

            altura = data.height
            var height = altura / 10 // converte altura para metros

            const imagesrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${order}.png`
            const img = document.createElement('img')
            img.className = 'pkimage'
            img.src = imagesrc






            div.appendChild(title)
            div.appendChild(img)
            div.appendChild(div1)
            cardContainer.appendChild(div)


        }

    }
    catch (error) {
        console.log(error)
    }
}
homepokemons()

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

function digitar(x) {
    n1 = x.toString().toLowerCase()
    console.log(n1);
}

async function getPokemonData() {
    const inputElement = document.getElementById("pokemon-name");
    digitar(inputElement.value);

    let url = `https://pokeapi.co/api/v2/pokemon/${n1}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const div = document.createElement('div');
        div.className = 'divnormal'

        const title = document.createElement('h2');

        const body = document.createElement('p');
        body.className = 'textin'

        const link = document.createElement('a');
        link.style.width = '8rem'

        const divpai = document.createElement('div')
        divpai.className = 'divpai'

        var peso = data.weight
        var pesoEmkg = peso / 10 // converte o peso para Kg

        altura = data.height
        var height = altura / 10 // converte altura para metros
        var name1 = data.name
        var name = name1.toString()

        //Nome do pokemon
        

        //declara a imagem do pokemon, trocando de acordo com o pokemon selecionado
        var id = data.id
        var order = id.toString()
        var image = document.createElement('img')
        image.style.backgroundColor = 'transparent'
        image.className = 'imagepokemon'
        image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${order}.png`

        title.innerText = `${name} (n. ${order})`;
        //informações do pokemon
        //body.innerHTML = `Altura: ${height} m, Peso: ${pesoEmkg} Kg`;

        //cria uma div
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('pokemon_image');

        link.href = data.species.url;
        link.innerText = "More info";

        //estudar
        imageDiv.appendChild(image)
        div.appendChild(title);
        div.appendChild(imageDiv)

        div.appendChild(body);

        divpai.appendChild(div)
        postsContainer.innerHTML = "";
        postsContainer.appendChild(divpai);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

//lê teclas

const inputElement = document.getElementById("pokemon-name");
const searchButton = document.getElementById("search-button");

inputElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        getPokemonData();
    }
});

searchButton.addEventListener("click", function () {
    getPokemonData();
});


