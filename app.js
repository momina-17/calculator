let buttons = document.querySelectorAll('.button');
let display = document.querySelector('#input');
let string = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.innerHTML === 'AC') {
            display.value = '';
            string = '';
        } 
        else if (button.innerHTML === 'DEL') {
            display.value = display.value.slice(0, -1);
            string = string.slice(0, -1);
        } 
        else if (button.innerHTML === '=') {
            try {
                display.value = eval(string);
            } catch (error) {
                display.value = 'Error';
            }
        }
        else {
            let value = button.innerText;
            string += value;
            display.value = string;
        }
        
    });
});
