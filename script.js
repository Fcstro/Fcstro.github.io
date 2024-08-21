const images = [
    'https://res.cloudinary.com/drkmgpcad/image/upload/v1724236655/20240522_223149_0000_oil3uj.png',
    'https://res.cloudinary.com/drkmgpcad/image/upload/v1724236655/IMG_20240806_213550_552_gbsnvm.jpg'
    
];

let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('auto-image').src = images[currentIndex];
}

setInterval(changeImage, 3000); // Change image every 3 seconds
