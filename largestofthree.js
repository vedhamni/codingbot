function findLargest(x1, x2, x3) {

    if(x1 > x2 && x1 > x3){
      console.log("x1 is the largest number")
    }
    else if (x2 > x3){
      console.log("x2 is the largest number")
    }
    else{
      console.log("x3 is the largest number")
    }
  }

function dynamicFindLargest(x1, x2, x3) {

    if(x1 > x2 && x1 > x3){
      console.log(`${x1} is the largest number`);
    }
    else if (x2 > x3){
      console.log(`${x2} is the second largest number`);
    }
    else{
      console.log(`${x3} is the smallest number`);
    }
  }
  
  findLargest(26,14,8) //26 is the largest number"
  findLargest(20,40,16) //40 is the largest number"
  findLargest(8,6,49) //48 is the largest number"

dynamicFindLargest(26,14,8) //26 is the largest number"
dynamicFindLargest(20,40,16) //40 is the largest number"
dynamicFindLargest(8,6,49) //48 is the largest number"
