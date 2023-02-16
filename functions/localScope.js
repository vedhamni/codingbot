//program showing local scope var
let a = "hi";
function bowbow() {
    let b = "Nive!";
    console.log(a + b);

}
bowbow();
console.log(a + b); //error