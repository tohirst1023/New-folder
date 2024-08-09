let input = document.querySelector("input");
let buttonEl = document.querySelector("button");
let fromSelect = document.querySelector(".fromSelect");
let toSelect = document.querySelector(".toSelect");
let resultEl = document.querySelector(".result");

buttonEl.addEventListener("click", function (event) {
    event.preventDefault();

    let amount = Number(input.value);
    let fromCur = fromSelect.value;
    let toCur = toSelect.value;

    fetch(`https://currency-converter-pro1.p.rapidapi.com/latest-rates?base=${fromCur}&currencies=${toCur}`, {
        headers: {
            "x-rapidapi-key": "fb323d50aemsh021cce6e22c7eccp14cda2jsn5f18a9634617"
        }
    }).then(function (res) {
        return res.json();
    })
    .then(function(data) {
        let result = data.result[toCur.toUpperCase()];
        result = Math.round(result * amount);

        let h2 = document.createElement("h2");

        h2.textContent = `${result} ${toCur.toUpperCase()}`;

        resultEl.innerHTML = "";
        resultEl.appendChild(h2); // Corrected this line
    });
});
