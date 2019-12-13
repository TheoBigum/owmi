 document.addEventListener("DOMContentLoaded", hentJson);

 let forside = [];
 const forside_dest = document.querySelector("#forside");
 const forside_temp = document.querySelector("#forside_temp");


 let nyheder = [];
 const nyhed_dest = document.querySelector("#nyheder");
 const nyhed_temp = document.querySelector("#nyhed_temp");

 async function hentJson() {
     console.log("hent json");

     let forside_jsonData = await fetch("http://theobigum.com/owmiWP/wordpress/wp-json/wp/v2/forside");
     nyheder = await forside_jsonData.json();

     let nyhed_jsonData = await fetch("http://theobigum.com/owmiWP/wordpress/wp-json/wp/v2/nyhed");
     nyheder = await nyhed_jsonData.json();



     visForside();
     visNyheder();

     //            knapperVirker();
 }

 function visForside() {
     console.log("visForside")
     forside.forEach(forS => {
         const klon = nyhed_temp.cloneNode(true).content;
         klon.querySelector(".forside_h3").textContent = forS.title.rendered
         klon.querySelector(".forside_h5").innerHTML = forS.content.rendered;
         klon.querySelector(".forside_img").src = forS.forside_nyhed_billede.guid;
         forside_dest.appendChild(klon);

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
         klon.querySelector(".nyhed_img").src = nyhed.koncert_billede.guid;
         klon.querySelector(".nyhed_p").innerHTML = nyhed.content.rendered;
         nyhed_dest.appendChild(klon);

         //         dest.lastElementChild.addEventListener("click", () => {
         //             location.href = `singleView.html?id=${ret.gsx$id.$t}`;
     });


 }
