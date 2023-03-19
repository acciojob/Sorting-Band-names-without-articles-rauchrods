//your code here


	touristSpots.sort((a,b)=>{
   let a1 = a.replace(/(the |a |an )/i, "");
   let b1 = b.replace(/(the |a |an )/i, "");

   if (a1 < b1) {
    return -1;
  }

  if (a1 > b1) {
    return 1;
  }

  return 0;
   
});

for(let val of touristSpots){
  let liobj = document.createElement("li");
   liobj.innerHTML = val;
   document.getElementById("band").appendChild(liobj);
}


