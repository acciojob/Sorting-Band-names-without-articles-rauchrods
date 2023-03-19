//your code here

function sort(touristSpots){
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

	return touristSpots;
}

