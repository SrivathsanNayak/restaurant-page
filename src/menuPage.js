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
    const breakfastTitle = document.createElement("h3");
    const lunchTitle = document.createElement("h3");
    const dinnerTitle = document.createElement("h3");
    
    const breakfast1 = document.createElement("div");
    const imageBreakfast1 = document.createElement("img");
    const titleBreakfast1 = document.createElement("h4");
    imageBreakfast1.src = image1;
    imageBreakfast1.alt = "Idli and Vada"; 

    const breakfast2 = document.createElement("div");
    const imageBreakfast2 = document.createElement("img");
    const titleBreakfast2 = document.createElement("h4");
    imageBreakfast2.src = image2;
    imageBreakfast2.alt = "Dosa filled with masala";

    breakfastTitle.classList.add('menu-titles');
    lunchTitle.classList.add('menu-titles');
    dinnerTitle.classList.add('menu-titles');
    breakfast1.classList.add('menu-divs');
    breakfast2.classList.add('menu-divs');
    imageBreakfast1.classList.add('menu-images');
    imageBreakfast2.classList.add('menu-images');
    titleBreakfast1.classList.add('menu-foods');
    titleBreakfast2.classList.add('menu-foods');

    breakfast1.append(imageBreakfast1, titleBreakfast1);
    breakfast2.append(imageBreakfast2, titleBreakfast2);
    breakfastDiv.append(breakfastTitle, breakfast1, breakfast2);
    lunchDiv.append(lunchTitle);
    dinnerDiv.append(dinnerTitle);
    menuPart.append(breakfastDiv, lunchDiv, dinnerDiv);

    breakfastTitle.textContent = "Breakfast";
    lunchTitle.textContent = "Lunch";
    dinnerTitle.textContent = "Dinner";

    titleBreakfast1.textContent = "IDLI-VADA: ₹100";
    titleBreakfast2.textContent = "MASALA DOSA: ₹120";

    return menuPart;
}

export {menu};