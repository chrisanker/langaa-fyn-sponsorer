const imageOnDisplay = document.querySelector("#imageOnDisplay");

let currentImg = 1;

window.onload = (event) => {
    createImg();
    const millisBetweenImgChange = 5000;
    setInterval(nextImg, millisBetweenImgChange);
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
},
{
    url: "https://static.wixstatic.com/media/a89772_0d87546ae24c4b34ac27196f8cd7dadc~mv2.jpg",
    alt: "Hesselager Bilpleje"
},
{
    url: "https://static.wixstatic.com/media/a89772_3fc7cf06ea8b48d5be4ba4015ffbaa52~mv2.jpg",
    alt: "Carsten Andersen ApS Murermester"
},
{
    url: "https://static.wixstatic.com/media/a89772_67ce54145cc54e33b384bdd35e32a921~mv2.jpg",
    alt: "Ellerup Tømrerforretning"
},
{
    url: "https://static.wixstatic.com/media/a89772_687e3ac67b1c490a8d50f31ca99a25ff~mv2.jpg",
    alt: "Højlund Mølle - Ryttershoppen"
}];


function createImg() {
    imageOnDisplay.setAttribute("src", images[0].url);
    imageOnDisplay.setAttribute("alt", images[0].alt);
}

function nextImg() {
    imageOnDisplay.setAttribute("src", images[currentImg].url);
    imageOnDisplay.setAttribute("alt", images[currentImg].alt);
    if (currentImg + 1 >= images.length) {
        currentImg = 0;
    }
    else {
        currentImg++;
    }
}

/* const statusMessage = document.querySelector("#statusMessage");
const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const imageUrl = formData.get("url");
    const imageAlt = formData.get("alt");
    images.push({url: imageUrl, alt: imageAlt})
    statusMessage.textContent = "Url successfully saved."
    let i;
    for (i = 0; i < images.length; i++) {
        console.log(images[i]);
    }
}); */
