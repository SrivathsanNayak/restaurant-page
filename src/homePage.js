import image1 from './assets/homemadefood.jpg';

function headingPart() {
    const heading = document.createElement("div");
    const name = document.createElement("h1");
    const tagline = document.createElement("h3");
    const paraDiv = document.createElement("div");
    const aboutPara1 = document.createElement("p");
    const aboutPara2 = document.createElement("p");
    const coverImage = document.createElement("img");
    coverImage.src = image1;
    coverImage.alt = "Homemade food";

    coverImage.classList.add('cover-image');
    name.classList.add('title');
    tagline.classList.add('tagline');
    paraDiv.classList.add('para-div');
    aboutPara1.classList.add('para');
    aboutPara2.classList.add('para');

    paraDiv.append(aboutPara1, aboutPara2, coverImage);
    heading.append(name, tagline, paraDiv);

    name.textContent = "Mother's Kitchen";
    tagline.textContent = "Food that makes you feel at home.";
    aboutPara1.textContent = "We specialize in delicious, homemade food that you can eat to your heart's content.";
    aboutPara2.textContent = "Craving some good ol' homely meals? Check out our Menu section!";

    return heading;
}

export {headingPart};