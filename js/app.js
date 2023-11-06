const bars = document.querySelector(".navBtn")
const navMenu = document.querySelector("#navMenu")

bars.addEventListener("click", () => {
  bars.classList.toggle("navActive")
  navMenu.classList.toggle("hidden")
  // bars.classList.toggle("fa-xmark")
  
  if( !navMenu.classList.contains("hidden") ){
    navMenu.classList.add("absolute", "bg-slate-500", "p-5","shadow", "top-full", "right-2", "mt-2", "rounded","space-y-5", "bg-opacity-80", "left-2", "sm:left-auto")
  }
  else{
    navMenu.classList.remove("absolute", "bg-slate-500", "p-5", "top-full", "right-2", "mt-2", "rounded","space-y-5")
  }
})