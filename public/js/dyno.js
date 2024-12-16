import * as data from './dyno_pizza.json'
console.log("Hello")

let menu = document.querySelector("filters_menu").innerHTML = `<li class="active dyno_menu" data-filter="*">All</li>`
for (let food_category in data.food) {
    menu.innerHTML += `<li class="active ${food_category}" data-filter="*">${food_category}</li>
}
