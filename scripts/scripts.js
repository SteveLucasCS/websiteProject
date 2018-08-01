/* This method expands the sibling element following a button
 * Used on multiple pages to "expand hidden content." */

 var btn = document.getElementsByClassName("expandbtn");
 var i;
 for (i = 0; i < btn.length; i++) {
     btn[i].addEventListener("click", function() {
         this.classList.toggle("active");
         var content= this.nextElementSibling;
         if (content.style.display === "block") {
             content.style.display = "none";
         } else {
             content.style.display = "block";
         }
     }
   );
 }
