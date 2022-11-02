const array = [];
const output = document.getElementById("list");

function add(event) {
    event.preventDefault();
    let input = document.getElementById("arrayInput").value;
    console.log(input);

    array.push(`<li> ${input} </li>`);
    console.log(array);

    output.innerHTML = array.join(' ');
};
function remove(event) {
    event.preventDefault();

    array.pop();
    output.innerHTML = array.join(' ');
    console.log(array);
}