import image1 from './assets/onam-sadya.jpeg';

function headingPart() {
    const heading = document.createElement("div");
    const name = document.createElement("h1");
    const tagline = document.createElement("h3");
    const about = document.createElement("p");
    const coverImage = document.createElement("img");
    coverImage.src = image1;

    heading.append(name, tagline, about, coverImage);

    name.textContent = "Just a Restaurant";
    tagline.textContent = "An ordinary restaurant with an ordinary website!";
    about.textContent = "This is an ordinary restaurant. You can get some ordinary food here.";

    return heading;
}

export {headingPart};