const project = [
  {
    title: "Elon Musk",
    paragraph: ` CEO of Tesla,Space-X,Neura-Link and so many other small scale
    business/cooperate society`,
  },
  {
    title: "Jeff Bezos",
    paragraph: ` CEO and founder of Amazon,Amazon prime and Amazon KDP  and so many other small scale
      business/cooperate society`,
  },
  {
    title: "Steve Jobs(late)",
    paragraph: ` CEO and founder of Apple and so many other small scale
      business/cooperate society`,
  },
  {
    title: "Bill Gates",
    paragraph: ` CEO and founder of Microsoft and so many other small scale
      business/cooperate society`,
  },
  {
    title: "John Doe",
    paragraph: ` CEO and founder of W3Schools and so many other small scale
      business/cooperate society`,
  },
  {
    title: "Phillip  Emeagwali",
    paragraph: ` CEO of Tesla,Space-X,Neura-Link and so many other small scale
      business/cooperate society`,
  },
  {
    title: "Mike Ejeagha",
    paragraph: ` CEO of Tesla,Space-X,Neura-Link and so many other small scale
      business/cooperate society`,
  },
  {
    title: "Future upcoming entrepreneur",
    paragraph: ` CEO of Nexa and so many other small  small scale
      business/cooperate society`,
  },
  {
    title: "Upcoming Aerospace Ent.",
    paragraph: ` CEO of Nexa space co-operation and so many other small scale
      business/cooperate society`,
  },
  {
    title: "UAI-ENT",
    paragraph: ` CEO of Nexa Artificial Intelligence/NAIN.co  and so many other small scale
      business/cooperate society`,
  },
];

const listContentContainer = document.querySelector(".list-content-container");
const text = document.querySelector("#text");

window.addEventListener("DOMContentLoaded", () => {
  project.forEach((element) => {
    //use object destructuring here.
    const { title, paragraph } = element;
    console.log(title);
    const a = document.createElement("a");
    a.innerHTML = `<div class="list-content-list-item">
             <h1 class="list-item-header">${title}</h1>
             <p class="list-item-paragraph">
             ${paragraph}
              </p>
            </div>`;
    listContentContainer.appendChild(a);
  });
  console.log(listContentContainer);
});

text.addEventListener("keyup", () => {
  let filter = text.value.toLowerCase();
  console.log(filter);
  let aHere = document.getElementsByTagName("a");
  for (let i = 0; i < aHere.length; i++) {
    // let b = aHere[i].querySelector(".list-content-list-item"); OR
    let b = aHere[i].querySelectorAll(".list-content-list-item")[0];
    //OR
    // let b = aHere[i].getElementsByClassName("list-content-list-item")[0];
    console.log(b);
    // let c = b.querySelector(".list-item-header"); OR
    let c = b.querySelectorAll(".list-item-header")[0];
    //OR
    // let c = b.getElementsByClassName("list-item-header")[0];
    console.log(c);

    let textValue = c.textContent || c.innerText;
    if (textValue.toLowerCase().indexOf(filter) > -1) {
      aHere[i].style.display = "";
      aHere[i].style.visibility = "visible";
      aHere[i].style.opacity = 1;
      aHere[i].style.zIndex = 2;
    } else {
      aHere[i].style.display = "none";
    }

    if (text.value == 0) {
      aHere[i].style.visibility = "hidden";
      aHere[i].style.opacity = 0;
      aHere[i].style.zIndex = -2;
    }
  }
});
