/* Closure says that the inner function has the access of scope of the outer function.

Scope means the variables declared, properties declared, functions declared, etc.

*/
function outer() {
    let username = "hitesh";

    // This line is removed because 'secret' is not in the scope of 'outer'.
    // console.log("OUTER", secret);

    function inner() {
        let secret = "my123";
        console.log("inner", username); // 'username' is in scope due to closure
        console.log("inner", secret);   // 'secret' is in scope
    }

    function innerTwo() {
        console.log("innerTwo", username); // 'username' is in scope due to closure
        // This line is removed because 'secret' is not in the scope of 'innerTwo'.
        // console.log(secret);
    }

    inner();
    innerTwo();
}

outer();