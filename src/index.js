import printTest from './pageLoad.js';
import image1 from './assets/onam-sadya.jpeg';

const content = document.getElementById("content");
const heading = document.createElement("div");
const restaurantName = document.createElement("h1");
const restaurantTagline = document.createElement("h3");
const about = document.createElement("div");
const restaurantDescription = document.createElement("p");
const homePageImage = document.createElement("img");

homePageImage.src = image1;
homePageImage.onclick = printTest;

heading.append(restaurantName, restaurantTagline);
about.append(restaurantDescription);
content.append(heading, about);
content.append(homePageImage);

restaurantName.textContent = "Just a Restaurant";
restaurantTagline.textContent = "An ordinary restaurant with an ordinary website!";
restaurantDescription.textContent = "This is an ordinary restaurant. You can get some ordinary food here."