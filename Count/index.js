function increment() {
    console.log("Increment button was clicked")
    let count = document.getElementById("count-el");
    count.innerHTML = Number(count.innerHTML) + 1;
    console.log(count.innerHTML);
}
function decrement() {
    console.log("Decrement button was Clicked");
    let count = document.getElementById("count-el");
    count.innerHTML = Number(count.innerHTML) - 1;
    console.log(count.innerHTML)
}