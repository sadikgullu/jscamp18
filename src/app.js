console.log("merhaba codlama.io")

//js type safe değildir
let dolarBugun = 9.30

let dolarDun = 9.20
dolarDun = "9.20"
{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
// euroDun = 11 (bu bir hatadır const değişmez)

console.log(euroDun)

//array
//camelCasing  (değişken tanımlamada ilk harf küçük sonra büyük)
//PascalCasing (ilk harf büyük)
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i<konutKredileri.length; i++) {
console.log("<li>"+ konutKredileri[i] +"</li>")
}
console.log("</ul>")

