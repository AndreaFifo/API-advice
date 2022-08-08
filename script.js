const btnAdvice = document.getElementById('generate-advice');

btnAdvice.addEventListener("click", () => {
    fetch('https://api.adviceslip.com/advice')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            document.getElementById('id-advice').innerText = data.slip.id;
            document.getElementById('advice-text').innerText = '"' + data.slip.advice + '"';
        })
        .catch(error => console.log('Error: ' + error));
});

