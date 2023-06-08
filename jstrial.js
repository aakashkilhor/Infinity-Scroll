// function timer() {
//    console.log("hello")
// }

// let id = setTimeout(timer,5000)
// console.log(id)
// clearTimeout(id);

// clear timeout on mousemove 
// timeout - function and time
// oncli = function handle (){
//     console.log("hello")
// }
// let timeout;
// document.onmousemove = function(){
//   clearTimeout(timeout);
//   timeout = setTimeout(function(){alert("move your mouse");}, 6000);
// }
let id = 1
function timer (){
    console.log(++id)
}
timer();
timer();