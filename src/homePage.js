import image1 from './assets/homemadefood.jpg';

function home() {
    const heading = document.createElement("div");
    const name = document.createElement("h1");
    const tagline = document.createElement("h3");
    const paraDiv = document.createElement("div");

    const coverImage = document.createElement("img");
    coverImage.src = image1;
    coverImage.alt = "Homemade food";

    coverImage.classList.add('cover-image');
    name.classList.add('title');
    tagline.classList.add('tagline');
    paraDiv.classList.add('para-div');

    paraDiv.append(createPara("We specialize in delicious, homemade food that you can eat to your heart's content."),
    createPara("Craving some good ol' homely meals? Check out our Menu section!"));
    heading.append(name, tagline, paraDiv, coverImage);

    name.textContent = "Mother's Kitchen";
    tagline.textContent = "Food that makes you feel at home.";

    return heading;
}

function createPara(text) {
    const para = document.createElement("p");
    para.classList.add('para');
    
    para.textContent = text;
    return para;
}

export {home};