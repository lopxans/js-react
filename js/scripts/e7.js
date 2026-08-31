/* 

// Normal function
function greeding() {
    console.log('hello');
}
greeding();
// _______________________________________________________

// Anonymous Function: function without name
const function1  = function() {
    console.log('Hello2');
}
console.log(function1);
console.log(typeof function1);
function1();

// _______________________________________________
const object1 = {
    num: 2,
    fun: function() {
        console.log('hello3');
    }
}
object1.fun();

// _________________________________________________________
// function parameter
function display(param) {
    console.log(param);
}
display(2);

// _________________________________________________________
// Callback function: Passing a function into another function
function run(param) {
    param();
}
run(function () {
    console.log('hello4')
});

// _________________________________________________________
// A function we want to run in the future
setTimeout(function() {
    console.log('timeout');
    console.log('tomeout1')  // Synchronous Code
    }, 3000);
    console.log('next line');   // Asynchronous Code
    - Asynchronous Code: Won't wait for a line to finish before going the next line
    - Synchronous Code: weill wait for one line to finish before going the next line
// _________________________________________________________



*/



setInterval(function() {
    console.log('interval')
}, 3000);
console.log('next line 2');



