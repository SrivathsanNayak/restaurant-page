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
