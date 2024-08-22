
const images = [
    'https://res.cloudinary.com/drkmgpcad/image/upload/v1724236655/20240522_223149_0000_oil3uj.png',
    'https://res.cloudinary.com/drkmgpcad/image/upload/v1724236655/IMG_20240806_213550_552_gbsnvm.jpg'
];

let currentIndex = 0;

function rotateImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('auto-image').src = images[currentIndex];
}

setInterval(rotateImage, 3000); 



const project_images = [
    { src: "https://res.cloudinary.com/drkmgpcad/image/upload/v1724322231/zfi6hsh5vje4b9lyfjah.png", link: "https://github.com/Fcstro/CS_Journey/tree/main/Dev_Buddy" },
    { src: "https://res.cloudinary.com/drkmgpcad/image/upload/v1724322231/nwbq4fzyp0ndmcs7hlu8.png", link: "https://github.com/Fcstro/CS_Journey/tree/main/The%20Bank" },
    { src: "https://res.cloudinary.com/drkmgpcad/image/upload/v1724322232/p5yxchg7tpqtcec6igx6.png", link: "https://github.com/Fcstro/CS_Journey/tree/main/BMI%20Calculator" },
    { src: "https://res.cloudinary.com/drkmgpcad/image/upload/v1724322232/qdx9u9nso1fbfpa76hsm.png", link: "https://github.com/Fcstro/CS_Journey/tree/main/My%20Fav.%20Animals%20HTML" },
    { src: "https://res.cloudinary.com/drkmgpcad/image/upload/v1724322232/ano34dtrcsobcfijjc6j.png", link: "https://github.com/Fcstro/CS_Journey/tree/main/Cooking%20Buddy" }
];

let project_images_currentIndex = 0;
const carouselImage = document.getElementById('carousel-image');
const carouselLink = document.getElementById('carousel-link');

function carouselChangeImage() {
    project_images_currentIndex = (project_images_currentIndex + 1) % project_images.length;
    carouselImage.src = project_images[project_images_currentIndex].src;
    carouselLink.href = project_images[project_images_currentIndex].link;
}

setInterval(carouselChangeImage, 3000); 