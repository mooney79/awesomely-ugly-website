/*
I'm a Web Developer Mode
use a minimum of 10 _different_ html elements
use a minimum of 10 different css style attributes
use a minimum of 4 different css selectors
Use the float property to wrap text around an image
Add a button to your webpage that swaps out an image when you click it


Hey, Mikey, I Think He Likes It Mode
Sadly, the <blink> tag has been removed from html, re-implement it with CSS animations!
Scrolling marques really help grab the attention of would-be-customers, so add one to your site
Add a footer to your site with an "under construction" animated gif

Caffeinated Mode
Create a web page layout that has two columns of content that are side-by-side
Add a table of made up statistic calculations to your site (Like "# of Happy Vegetable Eaters by State")
*/

const $duck = document.querySelector('#duck');
const $duckButton = document.querySelector('button');
$duckButton.addEventListener('click', function (event) {
    $duck.setAttribute('src',"https://upload.wikimedia.org/wikipedia/commons/7/79/Operation_Upshot-Knothole_-_Badger_001.jpg");
    console.log('Button pushed!');
})