const content = document.getElementById("content");
const heading = document.createElement("div");
const restaurantName = document.createElement("h1");
const restaurantTagline = document.createElement("h3");
const about = document.createElement("div");
const restaurantDescription = document.createElement("p");

heading.append(restaurantName, restaurantTagline);
about.append(restaurantDescription);
content.append(heading, about);

restaurantName.textContent = "Just a Restaurant";
restaurantTagline.textContent = "An ordinary restaurant with an ordinary website!";
restaurantDescription.textContent = "This is an ordinary restaurant. You can get some ordinary food here."