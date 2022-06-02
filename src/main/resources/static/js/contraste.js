const html = document.querySelector("html")
const checkbox = document.querySelector('#btn');

console.log(checkbox);

checkbox.addEventListener('change', function() {
    html.classList.toggle('dark-mode');
})