//program to show the change in global var
let a = "hello";
function bowbow() {
    a = 5;

}
 //before fn calling
 console.log(a);
 //after the fn calling
 bowbow();
 console.log(a);