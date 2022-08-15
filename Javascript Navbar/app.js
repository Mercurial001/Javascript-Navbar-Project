let toggleBtn = document.querySelector(".toggleBtn");
let textLink = document.querySelector(".text-link");
let hg = 0;

//toggleBtn.addEventListener("click", function (){
//    textLink.style.height = "140px";

//});

//closeBtn.addEventListener("click", function(){
//    textLink.style.height = "0";
//});

toggleBtn.addEventListener("click", function(){
   if (textLink.classList.contains("fuckerKaayo")){
       textLink.classList.remove('fuckerKaayo')
   } else {
       textLink.classList.add("fuckerKaayo")
   }
});


