<<<<<<< HEAD
function openNav(){
  document.getElementById("mainnav").style.width = "250px";
}

function closeNav(){
=======
function openNav() {
  document.getElementById("mainnav").style.width = "250px";
}

function closeNav() {
>>>>>>> 98cd36863ee51c9982680d471ad4ec8ca42ec893
  document.getElementById("mainnav").style.width = "0";
}

function swap(page){
   var id = page.dataset.id;
<<<<<<< HEAD
   var list = document.querySelectorAll(".trans");

   list.forEach(function(item) {
=======
   var list = document.querySelectorAll(".trans")

   list.forEach(item) {
>>>>>>> 98cd36863ee51c9982680d471ad4ec8ca42ec893
      item.classList.remove("trans");
   })
   document.getElementById(id).classList.add("trans");
}
