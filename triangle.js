//check if traingle is equilateral, isosceles or scalene
function Triangle(side1, side2, side3) {

    if((side1 == side2) && (side1 == side3)){
      console.log('Equilateral triangle');
    }
    else if ((side1 == side2) || (side2 == side3) || (side1 == side3)){
      console.log('Isosceles triangle');
    }
    else{
      console.log('Scalene triangle');
    }
  }
  
  Triangle(2,2,2) 
  Triangle(4,4,8) 
  Triangle(5,4,3) 