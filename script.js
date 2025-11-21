// console.log("Hello");

let audio = {
  q: "Sounds/A0.mp3",
  w: "Sounds/A1.mp3",
  e: "Sounds/A2.mp3",
  r: "Sounds/A3.mp3",
  t: "Sounds/A4.mp3",
  y: "Sounds/A5.mp3",
  u: "Sounds/A6.mp3",
  i: "Sounds/A7.mp3",
  o: "Sounds/Ab1.mp3",
  p: "Sounds/Ab2.mp3",
};

console.log(audio);

document.querySelectorAll(".key").forEach((e) => {
  e.addEventListener("click", (dets) => {
    if (dets.target.dataset.key === "q") new Audio(audio.q).play();
    else if(dets.target.dataset.key === "w") new Audio(audio.w).play();
    else if(dets.target.dataset.key === "e") new Audio(audio.e).play();
    else if(dets.target.dataset.key === "r") new Audio(audio.r).play();
    else if(dets.target.dataset.key === "t") new Audio(audio.t).play();
    else if(dets.target.dataset.key === "y") new Audio(audio.y).play();
    else if(dets.target.dataset.key === "u") new Audio(audio.u).play();
    else if(dets.target.dataset.key === "i") new Audio(audio.i).play();
    else if(dets.target.dataset.key === "o") new Audio(audio.o).play();
    else if(dets.target.dataset.key === "p") new Audio(audio.p).play();
  });
});



document.addEventListener("keydown", (dets)=>{
    const keyPressed = dets.key.toLowerCase();
    console.log(keyPressed);
    
    if (audio[keyPressed]) {
        new Audio(audio[keyPressed]).play()
    }
    
    const key = document.querySelector(`.key[data-key="${keyPressed}"]`)
    if (key) {
        key.classList.add("active");
        setTimeout(()=>key.classList.remove("active"),300)
    }
})
