            function openNav() {
                document.getElementById("mainnav").style.width = "250px";
            }

            function closeNav() {
                document.getElementById("mainnav").style.width = "0";
            }

            function swap(page){
                var page = ???;
                forEach(function swap("trans") {
                  document.getElementById(page).classList.remove("trans");
                })

                var id = page.dataset.id;
                document.getElementById(id).classList.add("trans");
            }
