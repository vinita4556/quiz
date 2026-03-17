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
<<<<<<< HEAD
=======

export const loginStyles = {

  // Page container
  pageContainer:
    "min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-purple-50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden",

  // Background bubbles
  bubble1:
    "pointer-events-none hidden md:block absolute -top-10 -left-24 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-30",

  bubble2:
    "pointer-events-none hidden md:block absolute bottom-10 right-10 w-56 h-56 bg-purple-100 rounded-full blur-3xl opacity-30",

  // Back button
  backButton:
    "absolute top-5 left-4 sm:top-6 sm:left-6 inline-flex items-center gap-2 text-gray-700 bg-white/70 backdrop-blur-sm px-3 py-2 rounded-full shadow",

  backButtonIcon: "w-4 h-4",
  backButtonText: "text-xs sm:text-sm font-medium",

  // Form container
  formContainer:
    "w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-lg relative z-20",

  form: "w-full",

  formWrapper: "relative",

  animatedBorder:
    "rounded-3xl p-[2px] bg-gradient-to-r from-purple-400 via-indigo-400 to-sky-400",

  formContent:
    "bg-white/95 backdrop-blur-sm rounded-3xl p-6 md:p-10 shadow-xl",

  // Heading
  heading:
    "flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold mb-5",

  headingIcon:
    "flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 text-white",

  headingIconInner: "w-4 h-4 sm:w-5 sm:h-5",

  headingText: "text-indigo-700",

  // Subtitle
  subtitle:
    "text-sm text-gray-600 mb-5 sm:mb-6",

  // Labels & inputs
  label: "block mb-4",

  labelText:
    "text-sm font-medium text-gray-700",

  inputContainer:
    "mt-2 relative",

  inputIcon:
    "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",

  inputIconInner:
    "w-4 h-4 sm:w-5 sm:h-5 text-gray-400",

  input:
    "w-full pl-10 pr-3 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition",

  inputNormal: "border-gray-300",

  inputError: "border-red-300",

  passwordInput: "pr-12",

  passwordToggle:
    "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 cursor-pointer",

  passwordToggleIcon:
    "w-4 h-4 sm:w-5 sm:h-5",

  // Error messages
  errorText:
    "mt-2 text-xs text-red-600",

  submitError:
    "text-sm text-red-600 mb-3",

  // Buttons
  buttonsContainer:
    "mt-4 grid gap-3",

  submitButton:
    "w-full flex items-center justify-center gap-3 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-90 transition",

  submitButtonIcon: "w-4 h-4",

  submitButtonText: "text-sm sm:text-base",

  // Signup section
  signupContainer:
    "mt-6",

  signupContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-4 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow",

  signupText:
    "text-sm text-gray-700",

  signupLink:
    "text-indigo-700 font-semibold hover:underline",

  // Login prompt section
  loginPromptContainer:
    "mt-5",

  loginPromptContent:
    "flex flex-col sm:flex-row items-center justify-center gap-3 px-3 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow",

  loginPromptText:
    "text-sm text-gray-700",

  loginPromptLink:
    "text-indigo-700 font-semibold hover:underline",

  // Animations helpers
  animateFloat: "animate-float",
  animateBorder: "animate-border",
};
>>>>>>> ce7cbc2 (Added Login component)
