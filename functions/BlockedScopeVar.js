// global var
let a = 'Hello';
function bowbow() {
    //local var
    let b = 'World';
    console.log(a + ' ' + b);
    if(b == 'World') {
        //blocked scope var
        let c = 'hello';
        console.log(a + ' ' + b + ' ' + c);
    }
    //var c is not defined, so error occur
    console.log(a + ' ' + b + ' ' + c);
}
bowbow();