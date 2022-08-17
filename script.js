const container = document.getElementById("container");

///////////////////////////////////////////////////////////////////////////
/////////////////////// BUILD HEADER //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const headerContainer = document.createElement("div");
headerContainer.id = "header-container";
container.appendChild(headerContainer);

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
userCreateContent.id = "user-create-content";
headerMain.appendChild(userCreateContent);

const newButton = document.createElement("button");
newButton.classList = "header-buttons";
newButton.innerHTML = "New";
userCreateContent.appendChild(newButton);

const uploadButton = document.createElement("button");
uploadButton.classList = "header-buttons";
uploadButton.innerHTML = "Upload";
userCreateContent.appendChild(uploadButton);

const shareButton = document.createElement("button");
shareButton.classList = "header-buttons";
shareButton.innerHTML = "Share";
userCreateContent.appendChild(shareButton);

///////////////////////////////////////////////////////////////////////////
////////////////////// BUILD SIDEBAR //////////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const sidebar = document.createElement("div");
sidebar.id = "sidebar";
container.appendChild(sidebar);

const brandLogo = document.createElement("div");
brandLogo.classList = "brand-logo";
sidebar.appendChild(brandLogo);

const logoImage = document.createElement("img");
logoImage.src = "SVGs-and-Images/spiral.png";
logoImage.alt = "the brand logo";
logoImage.id = "logo-image";
brandLogo.appendChild(logoImage);

const brandLogoText = document.createElement("div");
brandLogoText.id = "brand-logo-text";
brandLogoText.innerHTML = "Dashboard";
brandLogo.appendChild(brandLogoText);

const navLinks = document.createElement("div");
navLinks.id = "nav-links";
sidebar.appendChild(navLinks);

////////////////////////////////////////////////////////////////////////
//////////// SECTION FOR FILLING SIDEBAR INCL SVGS /////////////////////
////////////////////////////////////////////////////////////////////////

const sidebarHome = document.createElement("button");
sidebarHome.classList = "sidebar-buttons";
sidebarHome.id = "sidebar-home";
// sidebarHome.innerHTML = "Home";
navLinks.appendChild(sidebarHome);

// const sidebarHomeSvg = document.createElement("div");
// sidebarHomeSvg.id = "sidebar-home-svg";
// sidebarHome.appendChild(sidebarHomeSvg);

const sidebarHomeText = document.createElement("div");
sidebarHomeText.innerHTML = "Home";
sidebarHome.appendChild(sidebarHomeText);

const sidebarProfile = document.createElement("button");
sidebarProfile.classList = "sidebar-buttons";
sidebarProfile.id = "sidebar-profile";
sidebarProfile.innerHTML = "Profile";
navLinks.appendChild(sidebarProfile);

const sidebarMessages = document.createElement("button");
sidebarMessages.classList = "sidebar-buttons";
sidebarMessages.id = "sidebar-messages";
sidebarMessages.innerHTML = "Messages";
navLinks.appendChild(sidebarMessages);

const sidebarHistory = document.createElement("button");
sidebarHistory.classList = "sidebar-buttons";
sidebarHistory.id = "sidebar-History";
sidebarHistory.innerHTML = "History";
navLinks.appendChild(sidebarHistory);

const sidebarTasks = document.createElement("button");
sidebarTasks.classList = "sidebar-buttons";
sidebarTasks.id = "sidebar-tasks";
sidebarTasks.innerHTML = "Tasks";
navLinks.appendChild(sidebarTasks);

const sidebarCommunities = document.createElement("button");
sidebarCommunities.classList = "sidebar-buttons";
sidebarCommunities.id = "sidebar-commuities";
sidebarCommunities.innerHTML = "Communities";
navLinks.appendChild(sidebarCommunities);

const generalSettings = document.createElement("div");
generalSettings.id = "general-settings";
sidebar.appendChild(generalSettings);

const sidebarSettings = document.createElement("button");
sidebarSettings.classList = "sidebar-buttons";
sidebarSettings.id = "sidebar-settings";
sidebarSettings.innerHTML = "Settings";
generalSettings.appendChild(sidebarSettings);

const sidebarSupport = document.createElement("button");
sidebarSupport.classList = "sidebar-buttons";
sidebarSupport.id = "sidebar-support";
sidebarSupport.innerHTML = "Support";
generalSettings.appendChild(sidebarSupport);

const sidebarPrivacy = document.createElement("button");
sidebarPrivacy.classList = "sidebar-buttons";
sidebarPrivacy.id = "sidebar-privacy";
sidebarPrivacy.innerHTML = "Privacy";
generalSettings.appendChild(sidebarPrivacy);

///////////////////////////////////////////////////////////////////////////
/////////////////BUILD PROJECTS CONTAINER /////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const main = document.createElement("div");
main.classList = "main";
container.appendChild(main);

const projectsContainer = document.createElement("div");
projectsContainer.id = "projects-container";
main.appendChild(projectsContainer);

const userProjectsTitle = document.createElement("h4");
userProjectsTitle.innerHTML = "User Projects";
projectsContainer.appendChild(userProjectsTitle);

const userProjects = document.createElement("div");
userProjects.classList = "user-projects";
projectsContainer.appendChild(userProjects);

const firstProject = document.createElement("div");
firstProject.classList = "project-example";
userProjects.appendChild(firstProject);
const secondProject = document.createElement("div");
secondProject.classList = "project-example";
userProjects.appendChild(secondProject);
const thirdProject = document.createElement("div");
thirdProject.classList = "project-example";
userProjects.appendChild(thirdProject);
const fourthProject = document.createElement("div");
fourthProject.classList = "project-example";
userProjects.appendChild(fourthProject);
const fifthProject = document.createElement("div");
fifthProject.classList = "project-example";
userProjects.appendChild(fifthProject);
const sixthProject = document.createElement("div");
sixthProject.classList = "project-example";
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

const announcementsContainer = document.createElement("div");
announcementsContainer.id = "announcements-container";
main.appendChild(announcementsContainer);

const announcementsTitle = document.createElement("h4");
announcementsTitle.innerHTML = "Announcements";
announcementsContainer.appendChild(announcementsTitle);

const announcementsBox = document.createElement("div");
announcementsBox.classList = "announcements";
announcementsContainer.appendChild(announcementsBox);

const maintenanceDiv = document.createElement("div");
maintenanceDiv.classList = "announcements-cell";
maintenanceDiv.innerHTML = "Site Maintenance";
announcementsBox.appendChild(maintenanceDiv);

const communityDiv = document.createElement("div");
communityDiv.classList = "announcements-cell";
communityDiv.innerHTML = "Community Share Day";
announcementsBox.appendChild(communityDiv);

const privacyPolicyDiv = document.createElement("div");
privacyPolicyDiv.classList = "announcements-cell";
privacyPolicyDiv.innerHTML = "Updated Privacy Policy";
announcementsBox.appendChild(privacyPolicyDiv);

///////////////////////////////////////////////////////////////////////////
///////////////BUILD TRENDING CONTAINER ///////////////////////////////////
///////////////////////////////////////////////////////////////////////////

const trendingContainer = document.createElement("div");
trendingContainer.id = "trending-container";
main.appendChild(trendingContainer);

const trendingTitle = document.createElement("h4");
trendingTitle.innerHTML = "Trending";
trendingContainer.appendChild(trendingTitle);

const trendingBox = document.createElement("div");
trendingBox.classList = "trending";
trendingContainer.appendChild(trendingBox);

/////////////// TRENDING CELL ONE /////////////////////////////////////////

const trendingCellOne = document.createElement("div");
trendingBox.appendChild(trendingCellOne);

const trendingCellOnePic = document.createElement("div");
trendingCellOnePic.classList = "trending-pic";
trendingCellOnePic.innerHTML = "PicOne";
trendingCellOne.appendChild(trendingCellOnePic);

const trendingCellOneInfo = document.createElement("div");
trendingCellOneInfo.classList = "trending-user-info";
trendingCellOne.appendChild(trendingCellOneInfo);

const trendingCellOneUserName = document.createElement("div");
trendingCellOneUserName.classList = "trending-username";
trendingCellOneUserName.innerHTML = "@What";
trendingCellOne.appendChild(trendingCellOneUserName);

const trendingCellOneUserBio = document.createElement("div");
trendingCellOneUserBio.classList = "trending-userbio";
trendingCellOneUserBio.innerHTML = "@Bio";
trendingCellOne.appendChild(trendingCellOneUserBio);

/////////////// TRENDING CELL TWO /////////////////////////////////////////

const trendingCellTwo = document.createElement("div");
trendingBox.appendChild(trendingCellTwo);

const trendingCellTwoPic = document.createElement("div");
trendingCellTwoPic.classList = "trending-pic";
trendingCellTwoPic.innerHTML = "PicTwo";
trendingCellTwo.appendChild(trendingCellTwoPic);

const trendingCellTwoInfo = document.createElement("div");
trendingCellTwoInfo.classList = "trending-user-info";
trendingCellTwo.appendChild(trendingCellTwoInfo);

const trendingCellTwoUserName = document.createElement("div");
trendingCellTwoUserName.classList = "trending-username";
trendingCellTwoUserName.innerHTML = "@What";
trendingCellTwo.appendChild(trendingCellTwoUserName);

const trendingCellTwoUserBio = document.createElement("div");
trendingCellTwoUserBio.classList = "trending-userbio";
trendingCellTwoUserBio.innerHTML = "@Bio";
trendingCellTwo.appendChild(trendingCellTwoUserBio);

/////////////// TRENDING CELL THREE /////////////////////////////////////////

const trendingCellThree = document.createElement("div");
trendingBox.appendChild(trendingCellThree);

const trendingCellThreePic = document.createElement("div");
trendingCellThreePic.classList = "trending-pic";
trendingCellThreePic.innerHTML = "PicThree";
trendingCellThree.appendChild(trendingCellThreePic);

const trendingCellThreeInfo = document.createElement("div");
trendingCellThreeInfo.classList = "trending-user-info";
trendingCellThree.appendChild(trendingCellThreeInfo);

const trendingCellThreeUserName = document.createElement("div");
trendingCellThreeUserName.classList = "trending-username";
trendingCellThreeUserName.innerHTML = "@What";
trendingCellThree.appendChild(trendingCellThreeUserName);

const trendingCellThreeUserBio = document.createElement("div");
trendingCellThreeUserBio.classList = "trending-userbio";
trendingCellThreeUserBio.innerHTML = "@Bio";
trendingCellThree.appendChild(trendingCellThreeUserBio);

/////////////// TRENDING CELL FOUR /////////////////////////////////////////

const trendingCellFour = document.createElement("div");
trendingBox.appendChild(trendingCellFour);

const trendingCellFourPic = document.createElement("div");
trendingCellFourPic.classList = "trending-pic";
trendingCellFourPic.innerHTML = "PicFour";
trendingCellFour.appendChild(trendingCellFourPic);

const trendingCellFourInfo = document.createElement("div");
trendingCellFourInfo.classList = "trending-user-info";
trendingCellFour.appendChild(trendingCellFourInfo);

const trendingCellFourUserName = document.createElement("div");
trendingCellFourUserName.classList = "trending-username";
trendingCellFourUserName.innerHTML = "@What";
trendingCellFour.appendChild(trendingCellFourUserName);

const trendingCellFourUserBio = document.createElement("div");
trendingCellFourUserBio.classList = "trending-userbio";
trendingCellFourUserBio.innerHTML = "@Bio";
trendingCellFour.appendChild(trendingCellFourUserBio);
