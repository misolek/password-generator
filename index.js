const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let txtField1 = document.getElementById("field1")
let txtField2 = document.getElementById("field2")

function generate() {
        let password1 = [];        
        for (let i = 0; i < 15; i++) {
            let random = Math.floor(Math.random() * characters.length)
            let randomCharacters = characters[random]
            password1.push(randomCharacters)
        }
        txtField1.textContent = password1.join("");
        
        let password2 = [];        
        for (let i = 0; i < 15; i++) {
            let random = Math.floor(Math.random() * characters.length)
            let randomCharacters = characters[random]
            password2.push(randomCharacters)
        }
        txtField2.textContent = password2.join("");
}