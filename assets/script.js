// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has!', document.body.children)

// First, tell us your name
let yourName = "Graham O'Connell-Gibbs" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
let updatedTotalQuantity = document.querySelector('#qty-total')

let updatedGbQuantity = document.querySelector('#qty-gb')
document.getElementById('add-gb').addEventListener('click', function() {
    gb++
    updatedGbQuantity.innerHTML = gb
    updatedTotalQuantity.innerHTML = gb+cc+sugar
})


document.getElementById('minus-gb').addEventListener('click', function(){
    if (gb > 0){
        gb--
        updatedGbQuantity.innerHTML = gb
        updatedTotalQuantity.innerHTML = gb+cc+sugar
    }
})

let updatedCcQuantity = document.querySelector('#qty-cc')
document.getElementById('add-cc').addEventListener('click', function(){
    cc++
    updatedCcQuantity.innerHTML = cc
    updatedTotalQuantity.innerHTML = gb+cc+sugar
})

document.getElementById('minus-cc').addEventListener('click', function(){
   if (cc > 0){
    cc--
    updatedCcQuantity.innerHTML = cc
    updatedTotalQuantity.innerHTML = gb+cc+sugar
   } 
})

let updatedSugarQuantity = document.querySelector('#qty-sugar')
document.getElementById('add-sugar').addEventListener('click', function(){
    sugar++
    updatedSugarQuantity.innerHTML = sugar
    updatedTotalQuantity.innerHTML = sugar+gb+cc
})

document.getElementById('minus-sugar').addEventListener('click', function(){
    if (sugar > 0){
    sugar--
        updatedSugarQuantity.innerHTML = sugar
        updatedTotalQuantity.innerHTML = sugar+gb+cc
    }
})

