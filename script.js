// const h2 = document.createElement('h2');
// h2.textContent = "This content added by JavaScript";

// document.querySelector("body").appendChild(h2);

const viewport = document.getElementById("infographic");

const thumb_cavern = document.getElementById("thumbnail-cavern");
const thumb_tower = document.getElementById("thumbnail-tower");
const thumb_ghost = document.getElementById("thumbnail-ghost");
const thumb_beware = document.getElementById("thumbnail-beware");



thumb_cavern.onclick = function() {
    viewport.src = "./images/info/CavernInfo.jpg";
}

thumb_tower.onclick = function() {
    viewport.src = "./images/info/OutpostTowerInfo.jpg";
}

thumb_ghost.onclick = function() {
    viewport.src = "./images/info/GetGhostingInfo.jpg";
}

thumb_beware.onclick = function() {
    viewport.src = "./images/info/BewareLittleChildrenInfo.jpg";
}