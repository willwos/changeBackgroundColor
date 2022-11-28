const btn = document.getElementById('btn');
const colors = ['salmon', 'green', 'yellow', 'pink', 'orange', 'black', 'turqoise', 'red', 'light blue']


btn.addEventListener('click', function onClick(event) {

    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
