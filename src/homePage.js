import image1 from './assets/homemadefood.jpg';

function headingPart() {
    const heading = document.createElement("div");
    const name = document.createElement("h1");
    const tagline = document.createElement("h3");
    const about = document.createElement("p");
    const coverImage = document.createElement("img");
    coverImage.src = image1;
    coverImage.alt = "Homemade food";

    coverImage.classList.add('cover-image');

    heading.append(name, tagline, about, coverImage);

    name.textContent = "Mother's Kitchen";
    tagline.textContent = "Food that makes you feel at home.";
    about.textContent = "This is an ordinary restaurant. You can get some ordinary food here.";

    return heading;
}

export {headingPart};