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
            

            title.innerHTML = `${data.name}`;
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

            const hr = document.createElement('hr')
            hr.className = 'hrcardmini'

            const numberpk = document.createElement('p')
            numberpk.className = 'numberpk'
            numberpk.innerHTML = `(N° ${order})`
            
            div.appendChild(numberpk)
            div.appendChild(img)
            div.appendChild(title)
            div.appendChild(hr)
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
    n0 = x.toString().toLowerCase()
    console.log(n0);

}
function digitar2(x) {
    n2 = x.toString().toLowerCase()
    console.log(n2);

}



async function getPokemonData() {
    const inputElement1 = document.getElementById("searchBox1")
    const inputElement2 = document.getElementById("searchBox2")


    digitar(inputElement1.value)
    digitar2(inputElement2.value)

    if (n2 == '') {
        n1 = n0.toString()
    }
    else if (n0 == '') {
        n1 = n2.toString()
    }

    let url = `https://pokeapi.co/api/v2/pokemon/${n1}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const div = document.createElement('div');
        div.className = 'divnormal'


        const title = document.createElement('h2');
        title.style.textTransform = 'capitalize'

        const body = document.createElement('p');
        body.className = 'textin'

        const divpai = document.createElement('div')
        divpai.className = 'divpai'


        
        var peso = data.weight
        var pesoEmkg = peso / 10 // converte o peso para Kg

        altura = data.height
        var height = altura / 10 // converte altura para metros
        var name1 = data.name
        var name = name1.toString()

        



        //Nome do pokemon

        var home = document.getElementsByClassName('sitewallpaper')

        //declara a imagem do pokemon, trocando de acordo com o pokemon selecionado
        var id = data.id
        var order = id.toString()
        var image = document.createElement('img')
        image.style.backgroundColor = 'transparent'
        image.className = 'imagepokemon'
        image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${order}.png`
        

        title.innerText = `${name} (n. ${order}) `;


        const texttype = document.createElement('p')
        texttype.className = 'HP'
        const types = data.types
        const pktype = types[0].type.name
        texttype.innerHTML = `Type: ${pktype}`;


        const life = data.stats[0].base_stat
        console.log(life)
        const texthp = document.createElement('p')
        texthp.className = 'texthp'

        texthp.innerHTML = 'HP:'
        //texthp.innerHTML = `HP:`;


        const barfundo = document.createElement('div')
        barfundo.className = 'barfundo'

        const barfrente = document.createElement('div')
        barfrente.className = 'barfrente'
        
        ability_bar(life)

        function ability_bar(stats){

            if(stats > 100){
                stats = 100
            }
            barfundo.innerHTML = `<p id='hpporcentagem'>${stats}</p>`
            barfrente.style.width = `${stats}%`;
            console.log(stats)
        }


        const divdescription = document.createElement('div')
        divdescription.className = 'divdescription'
        
        //informações do pokemon
        //body.innerHTML = `Altura: ${height} m, Peso: ${pesoEmkg} Kg`;

        //var searchdiv = document.getElementById('searchdiv')

        const imageDiv = document.createElement('div');
        imageDiv.classList.add('pokemon_imagediv');


        const hr = document.createElement('hr')
        hr.className = 'hrcard'

        //estudar
        imageDiv.appendChild(image)
        div.appendChild(title)
        div.appendChild(imageDiv)
        div.appendChild(hr)
        div.appendChild(divdescription)
        divdescription.appendChild(texttype)
        divdescription.appendChild(texthp)
        divdescription.appendChild(barfundo)
        barfundo.appendChild(barfrente)
        div.appendChild(body);


        divpai.appendChild(div)
        postsContainer.innerHTML = "";
        postsContainer.appendChild(divpai);


        setTimeout(() => {

            const targetScrollPosition = divpai.getBoundingClientRect().top + window.scrollY + (-50)
            window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });

        }, 100);

    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

//busca
const inputElement99 = document.getElementById('searchBox1')
const inputElement = document.getElementById("searchBox2");
//botões
const submitButton2 = document.getElementById("submitButton2");
const submitButton1 = document.getElementById('submitButton1')


inputElement.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        getPokemonData();
    }
});

inputElement99.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        getPokemonData();
    }
});


submitButton1.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        getPokemonData();
    }
});
