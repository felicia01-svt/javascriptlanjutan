const mahasiswa = {
    npm: "2428240051",
    nama: "Felicia"
}

console.log(mahasiswa)
console.log(mahasiswa.npm)
console.log(mahasiswa.nama)

const hobi = ["Berenang", "Makan", "Tidur", 1, true]
console.log(hobi);
console.log(hobi[1]);
console.log(hobi[0]);

const data = [
    {
        "nama": "Feli",
        "npm": "2428240051",
        "list_nilai": [
            "A",
            "A-",
            "B+"
        ]
    },
    {
        "nama": "Joshua",
        "npm": "2428240001",
        "list_nilai": [
            "A",
            "A-",
            "B+"
        ]

    }


]

console.log(data[0].nama);
console.log(data[1].npm);
console.log(data[0].list_nilai[1]);

//-------------------------------------
//DOM

const heroElement = document.getElementById("hero-element")
const subHeroElement = document.getElementById("subhero-element")
const clickSaya = document.getElementById('click-saya')


console.log(heroElement);
console.log(subHeroElement);

heroElement.innerText = "Helloo"
subHeroElement.innerHTML = "<i>CSS</i>"

let isChanges = false;
clickSaya.addEventListener("click", () => {
    if (isChanges){
        
    heroElement.innerText ="Belajar JavaScript"

    }else {
        heroElement.innerText ="Hello World"
    }

    isChanges = !isChanges 
    
})

//------------
//LOcalStorage

const formMahasiswa = document.getElementById("form-mahasiswa")

formMahasiswa.addEventListener("submit", (event) => {
    event.preventDefault()

    const form = new FormData(formMahasiswa)
    const data = Object.fromEntries(form)

    console.log(data);

    localStorage.setItem("mahasiswa",
        JSON.stringify(data))


})
