let navbar = document.createElement("ul");
navbar.setAttribute("id", "navbar");

let menu = document.createElement("ul");
menu.setAttribute("id", "menu")

let li1 = document.createElement("li");
li1.innerText = "STUDIO NAMMA";

let li2 = document.createElement("li");
li2.innerText = "DARK MODE";


let li3 = document.createElement("li");
li3.innerText = "MENU";

let li4 = document.createElement("li");
li4.innerText = "LET'S TALK";

function menuEffect(element) {

  element.addEventListener("mouseenter", () => {
    if (element.innerText == "MENU") {
      element.innerText = "OPEN"
    }
    else if(element.innerText == "LET'S TALK"){
      element.innerText = "CONTACT US"
    }
  })

  element.addEventListener("mouseout", () => {
    if (element.innerText == "OPEN") {
      element.innerText = "MENU"
    }
    else if(element.innerText == "CONTACT US"){
      element.innerText = "LET'S TALK"
    }
  })
}


li3.addEventListener("click", ()=>{
  if(li3.innerText == "OPEN"){
    menu.classList.add("show");
    li3.innerText = "CLOSE"
  }
  else if(li3.innerText == "CLOSE"){
    menu.classList.remove("show")
    li3.innerText = "OPEN"
  }
})

menuEffect(li3);
menuEffect(li4);

function createListElement(value){
  let li = document.createElement("li");

  if (value !== "") {
    // Structure: Container -> Video + Text Span
    li.style.display = "flex";
    li.style.alignItems = "center";
    li.style.cursor = "pointer";
    if (value === "HOME") {
      li.addEventListener("click", () => {
        window.location.href = "index.html";
      });
    }
    if (value === "WORK") {
      li.addEventListener("click", () => {
        window.location.href = "work.html";
      });
    }
    if (value === "SERVICES") {
      li.addEventListener("click", () => {
        window.location.href = "services.html";
      });
    }
    if (value === "PLANS") {
      li.addEventListener("click", () => {
        window.location.href = "plans.html";
      });
    }
    if (value === "NEWS") {
      li.addEventListener("click", () => {
        window.location.href = "news.html";
      });
    }
    if (value === "STUDIO") {
      li.addEventListener("click", () => {
        window.location.href = "studio.html";
      });
    }
    if (value === "APPROACH") {
      li.addEventListener("click", () => {
        window.location.href = "approach.html";
      });
    }

    // Video Element
    let video = document.createElement("video");
    video.src = "https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-sky-in-a-sunset-26070-large.mp4"; // Replace with your video source
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    // Video initial styles & transitions
    video.style.height = "1em";
    video.style.width = "0px";
    video.style.opacity = "0";
    video.style.objectFit = "cover";
    video.style.borderRadius = "4px";
    video.style.transition = "width 0.4s ease, opacity 0.4s ease, margin-right 0.4s ease";

    // Text Span
    let textSpan = document.createElement("span");
    textSpan.innerText = value;
    textSpan.style.transition = "transform 0.4s ease";

    li.append(video, textSpan);

    // Mouseover / Mouseout smooth shift & video reveal
    li.addEventListener("mouseover", () => {
      video.style.width = "1.5em";
      video.style.opacity = "1";
      video.style.marginRight = "15px";
      textSpan.style.transform = "translateX(40px)"; // Shifts smoothly right
    });

    li.addEventListener("mouseout", () => {
      video.style.width = "0px";
      video.style.opacity = "0";
      video.style.marginRight = "0px";
      textSpan.style.transform = "translateX(0px)";
    });
  } else {
    li.innerText = value;
  }

  menu.append(li);
}

createListElement("HOME");
createListElement("")
createListElement("WORK");
createListElement("STUDIO");
createListElement("SERVICES");
createListElement("PLANS");
createListElement("APPROACH");
createListElement("NEWS")

  /*li.innerText = value;
  menu.append(li);
}

createListElement("HOME");
createListElement("")
createListElement("WORK")
createListElement("STUDIO");
createListElement("SERVICES");
createListElement("PLANS");
createListElement("APPROACH");
createListElement("NEWS")*/

console.log(menu);

navbar.append(li1, li2, li3, li4);
document.body.append(navbar, menu);

let contactDrawer = document.createElement("div");
contactDrawer.setAttribute("id", "contactDrawer");

contactDrawer.innerHTML = `
  <div class="contact-header">
    <span>STUDIO NAMMA</span>
    <span class="close-btn" id="closeContact">CLOSE</span>
  </div>
   <div class="contact-title">
    <h1>LET'S WORK</h1>
    <h1>
      <div class="inline-video-box">
        <video src="https://i.makeagif.com/media/3-18-2022/G0VdMR.mp4" autoplay muted loop playsinline></video>
      </div>
      TOGETHER
    </h1>
  </div>`
  document.body.append(contactDrawer);

// Open Contact Drawer when LET'S TALK (li4) is clicked

li4.addEventListener("click", () => {
  contactDrawer.classList.add("show");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    li3.innerText = "MENU";
  }
});

// Close Contact Drawer
document.getElementById("closeContact").addEventListener("click", () => {
  contactDrawer.classList.remove("show");
});

