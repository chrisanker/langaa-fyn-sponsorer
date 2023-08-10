const imageSection = document.querySelector("#imagesGallery");
const imageOnDisplay = document.querySelector("#imageOnDisplay");

let currentImg = 1;

window.onload = (event) => {
    createImg();
    setInterval(nextImg, 2000);
}

const images = [{
    url: "https://static.wixstatic.com/media/d4c8cd_7a524be36aba4854a895d3e2caba21ab~mv2.png",
    alt: "Danbo Hesselager"
},
{
    url: "https://static.wixstatic.com/media/d4c8cd_f118737f8d3e47c49fb574d89da686ba~mv2.jpg",
    alt: "OK"
},
{
    url: "https://static.wixstatic.com/media/a89772_9c4286735c91496993a7185428b4ff65~mv2.jpg",
    alt: "Frørup Andelskasse"
},
{
    url: "https://static.wixstatic.com/media/d4c8cd_c0f304aa1217441491e8cc815fb9abb4~mv2.jpg",
    alt: "Østfyn VVS og Energiservice"
}];


function createImg() {
    imageOnDisplay.setAttribute("src", images[0].url);
    imageOnDisplay.setAttribute("alt", images[0].alt);
}

function nextImg() {
    imageOnDisplay.setAttribute("src", images[currentImg].url);
    imageOnDisplay.setAttribute("alt", images[currentImg].alt);
    if(currentImg + 1 >= images.length) {
        currentImg = 0;
    }
    else {
        currentImg++;
    }
}

