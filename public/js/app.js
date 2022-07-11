console.log('client side javascript is loaded!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
// const errorPara = document.getElementById('message-1')
// const outputPara = document.getElementById('message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
    messageOne.innerText = 'Loading...'
    messageTwo.textContent = ''
    
    fetch('http://localhost:3000/weather?address=' + location).then(
        (response) => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.innerText = data.error
                    messageTwo.innerText = ''
                    // console.log(data.error);
                } else {
                    messageOne.innerText = data.location
                    messageTwo.innerText = data.forecast
                    // console.log(data.location);
                    // console.log(data.forecast);
                }
            });
        }
    );
});
