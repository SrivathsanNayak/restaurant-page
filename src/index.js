import { navBar } from "./pageLoad.js";
import { home } from "./homePage.js";
import { menu } from "./menuPage.js";
import { contact } from "./contactPage.js";

const content = document.getElementById("content");
const nav = navBar();
const heading = home();
const menuDiv = menu();
const contactDiv = contact();

content.append(nav, heading);

const tabs = document.querySelectorAll("nav > ul > li");
let currentTab = tabs[0];

tabs.forEach(function(tab) {
    tab.addEventListener('click', () => {
        tabs.forEach(e => e.classList.remove('active'));
        tab.classList.add('active');
        switchTab(tab);
    })
});

function switchTab(e) {
    if (e != currentTab) {
        currentTab = e;
        while (content.firstChild) {
            content.removeChild(content.lastChild);
        }
        if (currentTab.textContent === "HOME") {
            content.append(nav, heading);
        } else if (currentTab.textContent === "MENU") {
            content.append(nav, menuDiv);
        } else {
            content.append(nav, contactDiv);
        }
    }
}