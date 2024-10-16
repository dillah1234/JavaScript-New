const elemenDenganId = document.getElementById("div1");
elemenDenganId.style.color = "red";

const elemenDenganKelas = document.querySelector(".coba");
elemenDenganKelas.textContent = "Elemen pertama yang diubah";

const elemenKonten = document.querySelector(".konten");

elemenKonten.innerHTML = "<strong>Teks baru</strong>";
console.log("innerHTML:", elemenKonten.innerHTML);

elemenKonten.innerText = "Teks diubah dengan innerText";
console.log("innerText:", elemenKonten.innerText);

elemenKonten.textContent = "Teks diubah dengan textContent";
console.log("textContent:", elemenKonten.textContent);

const ulElement = document.createElement('ul');
const items = ["Item 1", "Item 2", "Item 3"];

items.forEach(item => {
    const liElement = document.createElement('li'); 
    liElement.textContent = item; 
    ulElement.appendChild(liElement); 
});

const divKonten = document.getElementById('konten');
divKonten.appendChild(ulElement); 

const firstLiElement = ulElement.firstElementChild; 
if (firstLiElement) {
    ulElement.removeChild(firstLiElement); 
}


const warna = prompt("Masukkan warna yang ingin diterapkan pada teks (red, blue, green):");

const colorBox = document.getElementById('colorBox');

if (warna === "red" || warna === "blue" || warna === "green") {
    colorBox.style.color = warna;
} else {
    alert("Warna tidak valid. Silakan masukkan warna yang benar.");
}
