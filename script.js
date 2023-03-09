var settingsmenu = document.querySelector(".settings-menu");
var darkbutton = document.getElementById("dark-button");

function settingsMenuToggle(){
       settingsmenu.classList.toggle("settings-menu-height")
}
darkbutton.onclick = function(){
       darkbutton.classList.toggle("dark-button-on");
       document.body.classList.toggle("dark-theme");

       if(localStorage.getItem("theme") == "light"){
              localStorage.setItem("theme", "dark");
       }
       else{
              localStorage.setItem("theme", "light");
       }
}

if(localStorage.getItem("theme") == "light"){
       darkbutton.classList.remove("dark-button-on");
       document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme") == "dark"){
       darkbutton.classList.add("dark-button-on");
       document.body.classList.add("dark-theme");
}
else{
       localStorage.setItem("theme", "light");
}
