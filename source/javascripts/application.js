//= require jquery
//= require popper
//= require bootstrap-sprockets
//= require_tree .

// We modified the tree above in order to have it work with Bootstrap 4

const SRC = [
  "https://d1e5t59v5asibx.cloudfront.net/api/v1/web/image/content/dam/images/entertainment/shows/r/rugby-world-cup-2019/RWC-2019_showtile_v2.png.2019-01-18T13:30:10+13:00.jpg",
  "http://www.fabrique-evenementielle.fr/wp-content/uploads/2018/07/Atelier.png",
  "https://www.autumn-internationals.co.uk/images/RWC-2019-Fixtures.png"
];

let src = SRC[0];


function changSrc(src) {
  let sliderImage = document.getElementById('slider-image');
  sliderImage.src = src
};

function switchImage() {
  let actuSrc = document.getElementById('slider-image').src;
  let index = SRC.indexOf(actuSrc);
  if (index < (SRC.length - 1)) {
    src = SRC[index + 1]  
  } else {
    src = SRC[0]
  }
  changSrc(src)
}

function selectBanner() {
  let imageId = 0;
  document.addEventListener('mouseover', event => 
    this.imageId = parseInt(event.target.id.split('')[1], 10));
  console.log(imageId)
} 

selectBanner();