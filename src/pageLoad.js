function navBar() {
    const nav = document.createElement("nav");
    const navList = document.createElement("ul");
    const navHome = document.createElement("li");
    const navMenu = document.createElement("li");
    const navContact = document.createElement("li");

    navList.append(navHome,  navMenu, navContact);
    nav.append(navList);

    navHome.textContent = "HOME";
    navMenu.textContent = "MENU";
    navContact.textContent = "CONTACT";
    navHome.classList.add("active");
    return nav;
}

export {navBar};