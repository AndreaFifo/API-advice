window.onload = function(){
    const btnAdvice = document.getElementById('generate-advice');

    btnAdvice.addEventListener("click", () => {
        fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                document.getElementById('id-advice').innerText = "Advice #" + data.slip.id;
                document.getElementById('advice-text').innerText = '"' + data.slip.advice + '"';
            })
            .catch(error => console.log('Error: ' + error));
    });
}


