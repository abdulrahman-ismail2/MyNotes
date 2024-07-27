let btn = document.querySelector(".btn"),
  menu = document.querySelector(".menu"),
  square = document.querySelector(".square"),
  notes = document.querySelector(".notes");

// window.localStorage.setItem("lotfy", notes);
let arr = [];
btn.addEventListener("click", createNote);

function createNote() {
  let ele = document.createElement("div");
  ele.classList.add("ele", "animate__animated", "animate__fadeInDown");
  let noteEle = document.createElement("textarea");
  noteEle.classList.add("note");

  noteEle.setAttribute("placeholder", "Note Your Notes");
  let span = document.createElement("span");
  span.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  ele.appendChild(noteEle);
  ele.appendChild(span);
  notes.appendChild(ele);
  let deletebtns = document.querySelectorAll(".notes span");
  for (let i = 0; i < deletebtns.length; i++) {
    deletebtns[i].addEventListener("click", () => {
      deletebtns[i].parentElement.remove();
    });
  }

  // local strogeee tryinggg
  // noteEle.onchange = function () {
  //   // console.log(arr);
  //   // window.localStorage.setItem("note", noteEle.value);
  //   let notes = document.getElementsByClassName("note");
  //   for (let i = 0; i < notes.length; i++) {
  //     arr.push(notes[i].value);
  //     window.localStorage.setItem("note", notes[i].value);
  //   }
  //   console.log(arr);
  // };
  // let alleles = document.getElementsByClassName("ele");
  // for (let i = 0; i < alleles.length; i++) {
  //   menu.addEventListener("click", () => {
  //     menu.classList.add("border");
  //     square.classList.remove("border");
  //   });
  //   square.addEventListener("click", () => {
  //     square.classList.add("border");
  //     menu.classList.remove("border");
  //     // ele.style.setProperty("width", "350px", "important");
  //   });
  // }
}

let eles = document.querySelectorAll(".styles span");

eles.forEach((e) => {
  e.addEventListener("click", () => {
    eles.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
  });
  // colored theme
  document.querySelector(".colored").addEventListener("click", () => {
    document.body.style.setProperty(
      "background-image",
      " linear-gradient(to bottom, #91eae4, #86a8e7, #7f7fd5)",
      "important"
    );
    document.querySelector(".create").style.background = "#86a8e7";
    document.querySelectorAll("textarea").forEach((e) => {
      e.style.border = "3px solid #86a8e7";
    });
  });
  // black $ white theme
  document.querySelector(".black").addEventListener("click", () => {
    document.body.style.setProperty(
      "background-image",
      "linear-gradient(45deg, #000, #000)",
      "important"
    );
    document.querySelector(".create").style.background = "#000";
    // document.querySelector("textarea").style.border = "3px solid #777";
    document.querySelectorAll("textarea").forEach((e) => {
      e.style.border = "3px solid #777";
    });
  });
  // reset the deafult theme
  document.querySelector(".main").addEventListener("click", () => {
    document.body.style.setProperty(
      "background-image",
      "linear-gradient(45deg, #f8acff, #696eff)",
      "important"
    );
    document.querySelector(".create").style.background = "#696eff";
    document.querySelectorAll("textarea").forEach((e) => {
      e.style.border = "3px solid #696eff";
    });
  });
});
