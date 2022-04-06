function getRandomColor() {
    var hex = '0123456789ABCDEF';
    var text = '#';
    var color = '';
    for (var i = 0; i <6 ; i++){
        color +=  hex[Math.floor(Math.random() * 16)]
    }
   return text + color;
}
console.log(getRandomColor());
const btn_change = document.querySelector('.btn_change');
const box = document.querySelector('.box');
const text_hex = document.querySelector('.text_hex');
const gradient = document.querySelector('.gradient');
const btn_change_color = document.querySelector('.btn_change_color')
btn_change.onclick = () => {
    box.style.backgroundColor = getRandomColor();
    text_hex.textContent = getRandomColor();
};


btn_change_color.onclick = () => {
    box.style.backgroundColor = gradient.value;
}