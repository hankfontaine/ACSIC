///////////////////////////////////////////////////////////////////////////
/////////////////////// BUILD HEADER //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const headerContainer = document.getElementById("header-container");

const headerTop = document.createElement("div");
headerTop.classList = "header-top";
headerContainer.appendChild(headerTop);

const searchbar = document.createElement("div");
searchbar.classList = "searchbar";
headerTop.appendChild(searchbar);

const searchIcon = document.createElement("div");
searchIcon.classList = "search-icon";
searchbar.appendChild(searchIcon);

const searchField = document.createElement("div");
searchField.classList = "search-field";
searchbar.appendChild(searchField);

const settings = document.createElement("div");
settings.classList = "settings";
headerTop.appendChild(settings);

const notifications = document.createElement("div");
notifications.classList = "notifications";
settings.appendChild(notifications);

const userThemes = document.createElement("div");
userThemes.classList = "user-themes";
settings.appendChild(userThemes);

const userSettings = document.createElement("div");
userSettings.classList = "user-settings";
userSettings.id = "userGreet";
userSettings.innerHTML = "@hankfontaine";
settings.appendChild(userSettings);

const headerMain = document.createElement("div");
headerMain.classList = "header-main";
headerContainer.appendChild(headerMain);

const profilePic = document.createElement("div");
profilePic.classList = "profile-pic";
headerMain.appendChild(profilePic);

const greeting = document.createElement("div");
greeting.classList = "greeting";
headerMain.appendChild(greeting);

const salutations = document.createElement("div");
salutations.classList = "salutations";
salutations.innerHTML = "Salutations";
greeting.appendChild(salutations);

const userSettingsTwo = document.createElement("div");
userSettingsTwo.classList = "user-settings";
userSettingsTwo.id = "userGreetTwo";
userSettingsTwo.innerHTML = "Hank @hankfontaine";
greeting.appendChild(userSettingsTwo);

const userCreateContent = document.createElement("div");
userCreateContent.classList = "user-create-content";
headerMain.appendChild(userCreateContent);

const newButton = document.createElement("button");
newButton.classList = "button-style";
newButton.innerHTML = "New";
userCreateContent.appendChild(newButton);

const uploadButton = document.createElement("button");
uploadButton.classList = "button-style";
uploadButton.innerHTML = "New";
userCreateContent.appendChild(uploadButton);

const shareButton = document.createElement("button");
shareButton.classList = "button-style";
shareButton.innerHTML = "Share";
userCreateContent.appendChild(shareButton);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

///////////////////////////////////////////////////////////////////////////
/////////////////BUILD PROJECTS CONTAINER /////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const projectsContainer = document.getElementById("projects-container");

const userProjectsTitle = document.createElement("h4");
userProjectsTitle.innerHTML = "User Projects";
projectsContainer.appendChild(userProjectsTitle);

const userProjects = document.createElement("div");
userProjects.classList = "user-projects";
projectsContainer.appendChild(userProjects);

const firstProject = document.createElement("div");
firstProject.classList = "project";
firstProject.id = "project-one";
userProjects.appendChild(firstProject);
const secondProject = document.createElement("div");
secondProject.classList = "project";
secondProject.id = "project-two";
userProjects.appendChild(secondProject);
const thirdProject = document.createElement("div");
thirdProject.classList = "project";
thirdProject.id = "project-three";
userProjects.appendChild(thirdProject);
const fourthProject = document.createElement("div");
fourthProject.classList = "project";
fourthProject.id = "project-four";
userProjects.appendChild(fourthProject);
const fifthProject = document.createElement("div");
fifthProject.classList = "project";
fifthProject.id = "project-five";
userProjects.appendChild(fifthProject);
const sixthProject = document.createElement("div");
sixthProject.classList = "project";
sixthProject.id = "project-six";
userProjects.appendChild(sixthProject);

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

const secondProjectTitle = document.createElement("div");
secondProjectTitle.classList = "project-title";
secondProjectTitle.innerHTML = "Less Cool Project";
secondProject.appendChild(secondProjectTitle);
const secondProjectText = document.createElement("div");
secondProjectText.classList = "project-text";
secondProjectText.innerHTML =
  "Repellat neque sunt nulla eius, commodi consequatur ipsum quaerat beatae optio nemo autem ea unde.";
secondProject.appendChild(secondProjectText);
const secondProjectLinks = document.createElement("div");
secondProjectLinks.classList = "project-links";
secondProject.appendChild(secondProjectLinks);
const secondProjectStar = document.createElement("div");
secondProjectStar.innerHTML = "star";
secondProjectLinks.appendChild(secondProjectStar);
const secondProjectEye = document.createElement("div");
secondProjectEye.innerHTML = "eye";
secondProjectLinks.appendChild(secondProjectEye);
const secondProjectShare = document.createElement("div");
secondProjectShare.innerHTML = "share";
secondProjectLinks.appendChild(secondProjectShare);

const thirdProjectTitle = document.createElement("div");
thirdProjectTitle.classList = "project-title";
thirdProjectTitle.innerHTML = "Impossible App";
thirdProject.appendChild(thirdProjectTitle);
const thirdProjectText = document.createElement("div");
thirdProjectText.classList = "project-text";
thirdProjectText.innerHTML =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nisi rem minima expedita, facilis ex?";
thirdProject.appendChild(thirdProjectText);
const thirdProjectLinks = document.createElement("div");
thirdProjectLinks.classList = "project-links";
thirdProject.appendChild(thirdProjectLinks);
const thirdProjectStar = document.createElement("div");
thirdProjectStar.innerHTML = "star";
thirdProjectLinks.appendChild(thirdProjectStar);
const thirdProjectEye = document.createElement("div");
thirdProjectEye.innerHTML = "eye";
thirdProjectLinks.appendChild(thirdProjectEye);
const thirdProjectShare = document.createElement("div");
thirdProjectShare.innerHTML = "share";
thirdProjectLinks.appendChild(thirdProjectShare);

const fourthProjectTitle = document.createElement("div");
fourthProjectTitle.classList = "project-title";
fourthProjectTitle.innerHTML = "Easy Peasy App";
fourthProject.appendChild(fourthProjectTitle);
const fourthProjectText = document.createElement("div");
fourthProjectText.classList = "project-text";
fourthProjectText.innerHTML =
  "Repellat neque sunt nulla eius, commodi consequatur ipsum quaerat beatae optio nemo autem ea unde.";
fourthProject.appendChild(fourthProjectText);
const fourthProjectLinks = document.createElement("div");
fourthProjectLinks.classList = "project-links";
fourthProject.appendChild(fourthProjectLinks);
const fourthProjectStar = document.createElement("div");
fourthProjectStar.innerHTML = "star";
fourthProjectLinks.appendChild(fourthProjectStar);
const fourthProjectEye = document.createElement("div");
fourthProjectEye.innerHTML = "eye";
fourthProjectLinks.appendChild(fourthProjectEye);
const fourthProjectShare = document.createElement("div");
fourthProjectShare.innerHTML = "share";
fourthProjectLinks.appendChild(fourthProjectShare);

const fifthProjectTitle = document.createElement("div");
fifthProjectTitle.classList = "project-title";
fifthProjectTitle.innerHTML = "Ad Blocker";
fifthProject.appendChild(fifthProjectTitle);
const fifthProjectText = document.createElement("div");
fifthProjectText.classList = "project-text";
fifthProjectText.innerHTML =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse nisi rem minima expedita, facilis ex?";
fifthProject.appendChild(fifthProjectText);
const fifthProjectLinks = document.createElement("div");
fifthProjectLinks.classList = "project-links";
fifthProject.appendChild(fifthProjectLinks);
const fifthProjectStar = document.createElement("div");
fifthProjectStar.innerHTML = "star";
fifthProjectLinks.appendChild(fifthProjectStar);
const fifthProjectEye = document.createElement("div");
fifthProjectEye.innerHTML = "eye";
fifthProjectLinks.appendChild(fifthProjectEye);
const fifthProjectShare = document.createElement("div");
fifthProjectShare.innerHTML = "share";
fifthProjectLinks.appendChild(fifthProjectShare);

const sixthProjectTitle = document.createElement("div");
sixthProjectTitle.classList = "project-title";
sixthProjectTitle.innerHTML = "Money Maker";
sixthProject.appendChild(sixthProjectTitle);
const sixthProjectText = document.createElement("div");
sixthProjectText.classList = "project-text";
sixthProjectText.innerHTML =
  "Repellat neque sunt nulla eius, commodi consequatur ipsum quaerat beatae optio nemo autem ea unde.";
sixthProject.appendChild(sixthProjectText);
const sixthProjectLinks = document.createElement("div");
sixthProjectLinks.classList = "project-links";
sixthProject.appendChild(sixthProjectLinks);
const sixthProjectStar = document.createElement("div");
sixthProjectStar.innerHTML = "star";
sixthProjectLinks.appendChild(sixthProjectStar);
const sixthProjectEye = document.createElement("div");
sixthProjectEye.innerHTML = "eye";
sixthProjectLinks.appendChild(sixthProjectEye);
const sixthProjectShare = document.createElement("div");
sixthProjectShare.innerHTML = "share";
sixthProjectLinks.appendChild(sixthProjectShare);

///////////////////////////////////////////////////////////////////////////
///////////////BUILD ANNOUNCNEMENTS CONTAINER /////////////////////////////
///////////////////////////////////////////////////////////////////////////

const announcementsContainer = document.getElementById(
  "announcements-container"
);
const announcementsTitle = document.createElement("h4");
announcementsTitle.innerHTML = "Announcements";
announcementsContainer.appendChild(announcementsTitle);

const announcementsBox = document.createElement("div");
announcementsBox.classList = "announcements";
announcementsContainer.appendChild(announcementsBox);

const maintenanceDiv = document.createElement("div");
maintenanceDiv.id = "maintenance";
maintenanceDiv.classList = "announcements-cell";
maintenanceDiv.innerHTML = "Site Maintenance";
announcementsBox.appendChild(maintenanceDiv);

const communityDiv = document.createElement("div");
communityDiv.id = "community-share-day";
communityDiv.classList = "announcements-cell";
communityDiv.innerHTML = "Community Share Day";
announcementsBox.appendChild(communityDiv);

const privacyPolicyDiv = document.createElement("div");
privacyPolicyDiv.id = "updated-privacy-policy";
privacyPolicyDiv.classList = "announcements-cell";
privacyPolicyDiv.innerHTML = "Updated Privacy Policy";
announcementsBox.appendChild(privacyPolicyDiv);
