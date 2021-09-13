/*
Create a web page layout that has two columns of content that are side-by-side
*/

const $duck = document.querySelector('#duck');
const $duckButton = document.querySelector('button');
$duckButton.addEventListener('click', function (event) {
    $duck.setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/7/79/Operation_Upshot-Knothole_-_Badger_001.jpg");
    alert('What did you do:!!?');
})