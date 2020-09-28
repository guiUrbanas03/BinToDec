let userBinaryInput = document.querySelector('#binary-input');
const decimalInput = document.querySelector('#decimal-input');
const convertButton = document.querySelector('#convert-button');
11

userBinaryInput.addEventListener('keydown', (event) => {
    if (event.key != 1 && event.key != 0 && event.code != 'Backspace' && event.code != 'Enter') {
        event.preventDefault();
    }
    else if (event.code == 'Space') {
        event.preventDefault()
    }
    decimalInput.value = '';
})

convertButton.addEventListener('click', (event) => {
    event.preventDefault();
    convertBinaryToDecimal();
})

const convertBinaryToDecimal = () => {
    const binaryValue = userBinaryInput.value;
    let binaryLength = binaryValue.length - 1;
    let decimalResult = 0;

    if (binaryValue) {
        for (value of binaryValue) {
            decimalResult += value * Math.pow(2, binaryLength);
            // console.log(`${value} * 2^(${binaryLength}) = ${value * Math.pow(2, binaryLength)}`);
            binaryLength--;
        }
        decimalInput.value = decimalResult;
    }
}