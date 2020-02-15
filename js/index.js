const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const midImg = document.getElementsByClassName("middle-img");
midImg[0].setAttribute("src", siteContent["main-content"]["middle-img-src"]);

let navItems = document.querySelectorAll("a");
navItems.forEach((nav, key) => nav.textContent = siteContent["nav"][`nav-item-${key+1}`]);

let ctaContent = document.querySelector("h1");
ctaContent.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let mainContent = document.querySelectorAll("h4");
mainContent[0].textContent = siteContent["main-content"]["features-h4"];
mainContent[1].textContent = siteContent["main-content"]["about-h4"];
mainContent[2].textContent = siteContent["main-content"]["services-h4"];
mainContent[3].textContent = siteContent["main-content"]["product-h4"];
mainContent[4].textContent = siteContent["main-content"]["vision-h4"];

let mainP = document.querySelectorAll(".top-content p");
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];

let secondContent = document.querySelectorAll(".bottom-content p");
secondContent[0].textContent = siteContent["main-content"]["services-content"];
secondContent[1].textContent = siteContent["main-content"]["product-content"];
secondContent[2].textContent = siteContent["main-content"]["vision-content"];

let contactHeader = document.querySelectorAll(".contact h4");
contactHeader[0].textContent = siteContent["contact"]["contact-h4"];

let contactPara = document.querySelectorAll(".contact p");
contactPara[0].textContent = siteContent["contact"]["address"];
contactPara[1].textContent = siteContent["contact"]["phone"];
contactPara[2].textContent = siteContent["contact"]["email"];

let contactH = document.querySelectorAll(".contact h4");
contactH[0].textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = siteContent["contact"]["address"];
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

let footerP = document.querySelectorAll("footer p");
footerP[0].textContent = siteContent["footer"]["copyright"]

const newItemTwo = document.createElement('a');
newItemTwo.textContent = "Start"
const newItem = document.createElement('a');
newItem.textContent = "End"

const parentElement = document.querySelector('nav');
parentElement.append(newItem) 
parentElement.prepend(newItemTwo) 

navItems.forEach( element => {
  element.style.color = "green"
})

newItem.setAttribute("style", "color: green;");
newItemTwo.setAttribute("style", "color: green;");
