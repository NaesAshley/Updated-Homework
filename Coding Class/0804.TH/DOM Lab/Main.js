//DOM Lab
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: " catalog ",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: " orders ",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: " account ",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
//links for About, category, order, account

const mainEl = document.querySelector("main"); //this looked for main within html found it and said its = to mainE1
mainEl.style.backgroundColor = "var(--main-bg)"; // this brought background color

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"; // this inserted the "sei rocks in Main"
//>>Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl.classList.add("flex-ctr"); // Add a class of flex-ctr to mainEl.

const topMenuEl = document.getElementById("top-menu"); //querySelector returns the first element hat matches a css selector.
//>> the <nav id="top-menu">element in a variable named topMenuEl.
topMenuEl.style.height = "100%"; //Set the height topMenuElelement to be 100%.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)"; // Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.classList.add("flex-around"); //Add a class of flex-aroundto topMenuEl.

menuLinks.forEach((element) => {
  const link = document.createElement("a"); //Create an <a> element.
  link.setAttribute = ("href", element.href); //On the new element, add an href attribute with its value set to the href property of the "link" object.
  link.textContent = element.text; //Set the new element's content to the value of the text property of the "link" object.
  topMenuEl.appendChild(link); //Append the new element to the topMenuEl element.
});
/////
const subMenueE1 = document.getElementById("sub-menu");
subMenueE1.style.height = "100%";
subMenueE1.style.backgroundColor = "var(--sub-menu-bg)"; //Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenueE1.classList.add("flex-around"); //Add the class of flex-aroundto the subMenuElelement.
subMenueE1.style.setProperty("position", "absolute"); //Set the CSS position property of subMenuElto the value of absolute.
subMenueE1.style.setProperty("top", "0"); //Set the CSS topproperty of subMenuElto the value of 0
////

let topMenuLinks = topMenuEl.querySelectorAll("a"); // Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
var showingSubMenue = false; //Declare a global showingSubMenuvariable and initialize it to false;

topMenuEl.addEventListener("click", () => {
  event.preventDefault();
  console.log(event.target); ///////////////////////////////// LOOK THIS UPPPPP!!!!
}); //Attach a delegated 'click' event listener to topMenuEl.
