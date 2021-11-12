import image1 from './assets/idli-vada.jpeg';
import image2 from './assets/masala-dosa.jpeg';
import image3 from './assets/dal-rice.jpeg';
import image4 from './assets/chicken-biryani.jpeg';
import image5 from './assets/hakka-noodles.jpeg';
import image6 from './assets/kurma-parotta.jpeg';

function menu() {
    const menuPart = document.createElement("div");
    const breakfastDiv = document.createElement("div");
    const lunchDiv = document.createElement("div");
    const dinnerDiv = document.createElement("div");

    breakfastDiv.append(createMenuTitle("Breakfast"),
    createMenuItems("IDLI-VADA: ₹100", image1, "Idli and Vada"),
    createMenuItems("MASALA DOSA: ₹120", image2, "Dosa filled with Masala"));

    lunchDiv.append(createMenuTitle("Lunch"),
    createMenuItems("DAL & RICE: ₹140", image3, "Rice with dal gravy"),
    createMenuItems("CHICKEN BIRYANI: ₹160", image4, "Chicken biryani"));

    dinnerDiv.append(createMenuTitle("Dinner"),
    createMenuItems("HAKKA NOODLES: ₹150", image5, "Hakka noodles"),
    createMenuItems("KURMA PAROTTA: ₹150", image6, "Parotta with kurma gravy"));

    menuPart.append(breakfastDiv, lunchDiv, dinnerDiv);

    return menuPart;
}

function createMenuTitle(name) {
    const title = document.createElement("h3");
    title.classList.add('menu-titles');
    title.textContent = name;
    return title;
}

function createMenuItems(itemName, itemImage, itemImageAlt) {
    const itemDiv = document.createElement("div");
    const name = document.createElement("h4");
    const image = document.createElement("img");
    name.textContent = itemName;
    image.src = itemImage;
    image.alt = itemImageAlt;

    itemDiv.classList.add('menu-divs');
    name.classList.add('menu-foods');
    image.classList.add('menu-images');

    itemDiv.append(image, name);
    return itemDiv;
}

export {menu};