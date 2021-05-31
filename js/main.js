'use strict';

const num = 9;
const winner = Math.floor(Math.random() * num);

for (let i=0; i<num; i++) {
    const div = document.createElement('div');
    div.classList.add('box');

    div.addEventListener('click', () => {
        if (i === winner) {
            div.classList.add('win');
            div.textContent = "あたり(^^)/";
        } else {
            div.classList.add('lose');
            div.textContent = "はずれ(T_T)";
        }
    });
    document.body.appendChild(div);
}