let bttn = document.querySelector('button');
let out = document.querySelector('h1');

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function rand(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;

}


function myFunction() {
    confirm("Please click OK if you want to RETRY! ! !");
    location.reload();

}

bttn.addEventListener('click', () => {
    if (numbers.length == 0) {
        out.innerText = "No More Random Numbers";

        return;
    }

    let randomIndex = rand(0, numbers.length - 1);
    let randomNum = numbers[randomIndex];
    numbers.splice(randomIndex, 1);
    out.innerText = randomNum;
})