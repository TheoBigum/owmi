 document.addEventListener("DOMContentLoaded", hentJson);


 let forside = [];
 const forside_dest = document.querySelector("#forside");
 const forside_temp = document.querySelector("#forside_temp");

 let videoer = [];
 // const videoer_dest = document.querySelector("#");
 // const videoer_temp = document.querySelector("#videoer_temp");

 let koncerter = [];
 const koncerter_dest = document.querySelector("#koncerter");
 const koncerter_temp = document.querySelector("#koncerter_temp");

 let nyheder = [];
 const nyhed_dest = document.querySelector("#nyheder");
 const nyhed_temp = document.querySelector("#nyhed_temp");





 async function hentJson() {
     console.log("hent json");

     let forside_jsonData = await fetch("http://theobigum.com/owmiWP/wordpress/wp-json/wp/v2/forside");
     forside = await forside_jsonData.json();

     let videoer_jsonData = await fetch("http://theobigum.com/owmiWP/wordpress/wp-json/wp/v2/videoer");
     videoer = await videoer_jsonData.json();

     let koncerter_jsonData = await fetch("http://theobigum.com/owmiWP/wordpress/wp-json/wp/v2/koncerter");
     koncerter = await koncerter_jsonData.json();

     let nyhed_jsonData = await fetch("http://theobigum.com/owmiWP/wordpress/wp-json/wp/v2/nyhed");
     nyheder = await nyhed_jsonData.json();

     visForside();
     //     visVideoer();
     visKoncerter();
     visNyheder();

 }

 function visForside() {
     console.log("visForside")
     forside.forEach(fors => {
         const klon = forside_temp.cloneNode(true).content;
         klon.querySelector(".forside_h3").textContent = fors.title.rendered
         klon.querySelector(".forside_h5").innerHTML = fors.content.rendered;
         klon.querySelector(".forside_img").src = fors.forside_nyhed_billede.guid;
         forside_dest.appendChild(klon);

         //         dest.lastElementChild.addEventListener("click", () => {
         //             location.href = `singleView.html?id=${ret.gsx$id.$t}`;
     });
 };

 // function visVideoer() {
 //     console.log("visForside")
 //     forside.forEach(fors => {
 //         const klon = forside_temp.cloneNode(true).content;
 //         klon.querySelector(".forside_h3").textContent = fors.title.rendered
 //         klon.querySelector(".forside_h5").innerHTML = fors.content.rendered;
 //         klon.querySelector(".forside_img").src = fors.forside_nyhed_billede.guid;
 //         forside_dest.appendChild(klon);
 //
 //     });
 // };
 //
 //
 function visKoncerter() {
     console.log("visKoncerter")
     koncerter.forEach(koncert => {
         const klon = koncerter_temp.cloneNode(true).content;
         klon.querySelector(".koncert_img").src = koncert.koncerter_billede.guid;
         klon.querySelector(".koncert_h4").textContent = koncert.title.rendered;
         klon.querySelector(".koncert_p").textContent = koncert.koncert_text;
         klon.querySelector(".koncert_p2").innerHTML = koncert.content.rendered;
         koncerter_dest.appendChild(klon);

         //         dest.lastElementChild.addEventListener("click", () => {
         //             location.href = `singleView.html?id=${ret.gsx$id.$t}`;
     });
 };

 function visNyheder() {
     console.log("visNyheder")
     //          dest.innerHTML = "";
     nyheder.forEach(nyhed => {
         const klon = nyhed_temp.cloneNode(true).content;
         klon.querySelector(".nyhed_h4").textContent = nyhed.title.rendered
         klon.querySelector(".nyhed_img").src = nyhed.nyhed_billede.guid;
         klon.querySelector(".nyhed_p").innerHTML = nyhed.content.rendered;
         nyhed_dest.appendChild(klon);

         //         dest.lastElementChild.addEventListener("click", () => {
         //             location.href = `singleView.html?id=${ret.gsx$id.$t}`;
     });


 };
