import { navBar } from "./pageLoad.js";
import { headingPart } from "./homePage.js";

const content = document.getElementById("content");
const nav = navBar();
const heading = headingPart();
content.append(nav, heading);