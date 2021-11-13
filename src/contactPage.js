function contact() {
    const contactDiv = document.createElement("div");
    const tagline = document.createElement("h4");
    
    tagline.classList.add('tagline');

    contactDiv.append(tagline,
    createDiv("place", "12/4A, Ruby Avenue, Silver Plaza, Dispur"),
    createDiv("phone", "1234567890"),
    createDiv("email", "motherskitchen@yahoo.com"));

    tagline.textContent = "Get in touch with us!";

    return contactDiv;
}

function createIcon(iconName) {
    const icon = document.createElement("span");
    icon.classList.add('material-icons', 'icons');
    icon.textContent = iconName;

    return icon;
}

function createPara(message) {
    const para = document.createElement("p");
    para.classList.add('para');
    para.textContent = message;

    return para;
}

function createDiv(name, msg) {
    const divs = document.createElement("div");
    divs.classList.add('contact-para');

    divs.append(createIcon(name), createPara(msg));
    return divs;
}

export {contact};