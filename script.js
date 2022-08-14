const firstProject = document.getElementById("project-one");

const firstProjectTitle = document.createElement("div");
firstProjectTitle.classList = "project-title";
firstProjectTitle.innerHTML = "Super Cool Project";
firstProject.appendChild(firstProjectTitle);
const firstProjectText = document.createElement("div");
firstProjectText.classList = "project-text";
firstProjectText.innerHTML =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nisi rem minima expedita, facilis ex?";
firstProject.appendChild(firstProjectText);
const firstProjectLinks = document.createElement("div");
firstProjectLinks.classList = "project-links";
firstProject.appendChild(firstProjectLinks);
const firstProjectStar = document.createElement("div");
firstProjectStar.innerHTML = "star";
firstProjectLinks.appendChild(firstProjectStar);
const firstProjectEye = document.createElement("div");
firstProjectEye.innerHTML = "eye";
firstProjectLinks.appendChild(firstProjectEye);
const firstProjectShare = document.createElement("div");
firstProjectShare.innerHTML = "share";
firstProjectLinks.appendChild(firstProjectShare);
