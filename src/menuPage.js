function menu() {
    const menuPart = document.createElement("div");
    const breakfastDiv = document.createElement("div");
    const lunchDiv = document.createElement("div");
    const dinnerDiv = document.createElement("div");
    const breakfastTitle = document.createElement("h3");
    const lunchTitle = document.createElement("h3");
    const dinnerTitle = document.createElement("h3");

    breakfastTitle.classList.add('menu-titles');
    lunchTitle.classList.add('menu-titles');
    dinnerTitle.classList.add('menu-titles');

    breakfastDiv.append(breakfastTitle);
    lunchDiv.append(lunchTitle);
    dinnerDiv.append(dinnerTitle);
    menuPart.append(breakfastDiv, lunchDiv, dinnerDiv);

    breakfastTitle.textContent = "Breakfast";
    lunchTitle.textContent = "Lunch";
    dinnerTitle.textContent = "Dinner";

    return menuPart;
}

export {menu};