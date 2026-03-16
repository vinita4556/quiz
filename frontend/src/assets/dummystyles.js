export const navbarStyles = {

  /* NAVBAR */

  nav: "w-full h-20 bg-gray-100 flex items-center justify-between px-4 rounded-xl relative overflow-visible",

  container: "w-full flex items-center justify-between relative z-10",

  /* BACKGROUND BUBBLES */

  bubble1: "absolute w-24 h-24 bg-gray-300 opacity-30 rounded-full top-2 left-5",
  bubble2: "absolute w-20 h-20 bg-gray-300 opacity-30 rounded-full top-6 left-40",
  bubble3: "absolute w-16 h-16 bg-gray-300 opacity-30 rounded-full bottom-3 left-80",

  /* LOGO */

  logoContainer: "flex items-center",

  logoButton: "flex items-center",

  logoInner: "w-12 h-12",

  logoImage: "w-full h-full object-contain",

  /* TITLE CENTER */

  titleContainer:
    "absolute left-1/2 -translate-x-1/2 flex items-center justify-center",

  titleBackground:
    "px-6 py-2 rounded-full bg-gradient-to-r from-blue-300 to-purple-400 shadow-md flex items-center justify-center",

  titleText:
    "text-blue-900 font-semibold text-lg whitespace-nowrap",

  /* BUTTON CONTAINER */

  desktopButtonContainer:
    "hidden md:flex items-center gap-3 ml-auto",

  /* RESULT BUTTON */

  resultButton:
    "flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 transition",

  /* LOGIN BUTTON */

  loginButton:
    "flex items-center gap-2 bg-purple-500 text-white px-4 py-2 rounded-xl shadow hover:bg-purple-600 transition",

  /* LOGOUT BUTTON */

  logoutButton:
    "flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-xl shadow hover:bg-red-600 transition",

  /* ICON */

  buttonIcon: "w-5 h-5",

  /* MOBILE MENU BUTTON */

  mobileMenuButton: "md:hidden ml-4 relative",

  menuTogggleButton:
    "p-2 rounded-lg hover:bg-gray-200 transition duration-200",

  menuIcon: "w-6 h-6 text-gray-700",

  /* MOBILE MENU PANEL */

  mobileMenuPanel:
    "absolute top-14 right-0 bg-white shadow-xl rounded-xl p-4 w-44 flex flex-col gap-3 animate-[fadeIn_0.25s_ease] z-50",

  mobileMenuList:
    "flex flex-col gap-3",

  mobileMenuLink:
    "flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition",

  mobileMenuIcon:
    "w-5 h-5",

};
